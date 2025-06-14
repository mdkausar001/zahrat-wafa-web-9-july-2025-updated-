import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useFormPopup } from '../components/FormPopUpContext';

const steps = [
  { title: 'Step 1: Personal Info', fields: ['name', 'mobile'] },
  { title: 'Step 2: Contact Info', fields: ['address', 'email'] },
  { title: 'Step 3: Vehicle Info', fields: ['vehicleRegNo', 'vehicleBrand', 'vehicleModel'] },
  { title: 'Step 4: Appointment', fields: ['appointmentDate', 'uploadImage', 'problemsRemark'] }
];

const initialValues = {
  name: '',
  mobile: '',
  address: '',
  email: '',
  vehicleRegNo: '',
  vehicleBrand: '',
  vehicleModel: '',
  appointmentDate: '',
  uploadImage: '',
  problemsRemark: ''
};

const validationSchemas = [
  Yup.object({
    name: Yup.string().required('Name is required'),
    mobile: Yup.string()
      .matches(/^5\d{8}$/, 'Mobile number must start with 5 and be exactly 9 digits')
      .required('Mobile number is required'),
  }),
  Yup.object({
    address: Yup.string().required('Address is required'),
    email: Yup.string().email('Invalid email address').required('Email is required')
  }),
  Yup.object({
    vehicleRegNo: Yup.string().required('Vehicle registration number is required'),
    vehicleBrand: Yup.string().required('Vehicle brand is required'),
    vehicleModel: Yup.string().required('Vehicle model is required')
  }),
  Yup.object({
    // appointmentDate: Yup.string().required('Appointment date is required'),
    // uploadImage: Yup.mixed().required('Image is required'),
    problemsRemark: Yup.string().required('Problems/Remark is required')
  })
];

const FormComponent = () => {
  const [step, setStep] = useState(0);
  const { isOpen, closePopup } = useFormPopup();
  console.log("isOpen",isOpen);
  const [accessToken, setAccessToken] = useState('');
  const closePopupF = () => closePopup(false);

  const generateAccessToken = async () => {
    try {
      const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
        params: {
          grant_type: 'authorization_code',
          client_id: '1000.519SYFFAP4B7G5C9P4K2VJ30833ZCP',
          client_secret: '35a6791d35bbbe0c76a85e9b4ecc21577e5c8ae43f',
          redirect_uri: 'https://zahrat-wafa.com/',
          code: '1000.8047eebe67957ab39541c253b3e02b7c.383976e2022a9c2c6b7eb2cef3294053'
        }
      });
      setAccessToken(response.data.access_token);
    } catch (error) {
      console.error('Error generating access token:', error);
      alert('Failed to generate access token');
    }
  };

  const handleNext = (values, actions) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit(values, actions);
    }
  };

  const handleSubmit = async (values, actions) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'uploadImage') {
        formData.append(key, value);
      } else {
        formData.append(key, value);
      }
    });

    if (!accessToken) {
      await generateAccessToken();
    }

    try {
      const response = await axios.post(
        'https://www.zohoapis.com/crm/v6/Leads',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'multipart/form-data',
          }
        }
      );

      alert('Form submitted successfully!');
      actions.resetForm();
      closePopup();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submission failed.');
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black-250 flex justify-center items-center z-10000 " style={{ zIndex: "10000" }}>
           <iframe
        title="Zoho CRM Form"
        width="610px"
        height="630px"
        src="https://crm.zoho.com/crm/WebFormServeServlet?rid=7df51e37511aa123873e3ea4f57406d75eed28107798186b9d0dd2d45b789bb00b66274e846bc4b0d04efef3a82cd1e6gid25db4f2c0b92b2b19d5e5ce0e04289089e0e7e8aedc77c549c9d0a1165c477e6"
        style={{ border: 'none' }}
      ></iframe>
      <button
        onClick={closePopupF}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          color: 'black',
        }}
        aria-label="Close"
      >
        close
      </button>
        </div>
      )}
    </>
  );
};

export default FormComponent;
