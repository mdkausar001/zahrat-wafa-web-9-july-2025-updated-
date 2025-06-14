// import { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';

// const steps = [
//   { title: 'Step 1: Personal Info', fields: ['name', 'mobile'] },
//   { title: 'Step 2: Contact Info', fields: ['address', 'email'] },
//   { title: 'Step 3: Vehicle Info', fields: ['vehicleRegNo', 'vehicleBrand', 'vehicleModel'] },
//   { title: 'Step 4: Appointment', fields: ['appointmentDate', 'uploadImage', 'problemsRemark'] }
// ];

// const initialValues = {
//   name: '',
//   mobile: '',
//   address: '',
//   email: '',
//   vehicleRegNo: '',
//   vehicleBrand: '',
//   vehicleModel: '',
//   appointmentDate: '',
//   uploadImage: '',
//   problemsRemark: ''
// };

// const validationSchemas = [
//   Yup.object({
//     name: Yup.string().required('Name is required'),
//     mobile: Yup.string().required('Mobile number is required')
//   }),
//   Yup.object({
//     address: Yup.string().required('Address is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required')
//   }),
//   Yup.object({
//     vehicleRegNo: Yup.string().required('Vehicle registration number is required'),
//     vehicleBrand: Yup.string().required('Vehicle brand is required'),
//     vehicleModel: Yup.string().required('Vehicle model is required')
//   }),
//   Yup.object({
//     appointmentDate: Yup.string().required('Appointment date is required'),
//     uploadImage: Yup.mixed().required('Image is required'),
//     problemsRemark: Yup.string().required('Problems/Remark is required')
//   })
// ];

// const FormComponent = () => {
//   const [step, setStep] = useState(0);

//   const handleNext = (values, actions) => {
//     if (step < steps.length - 1) {
//       setStep(step + 1);
//     } else {
//       handleSubmit(values, actions);
//     }
//   };

//   const handleSubmit = async (values, actions) => {
//     try {
//       const formData = new FormData();
//       for (let key in values) {
//         formData.append(key, values[key]);
//       }

//       const response = await axios.post(
//         'https://www.zohoapis.com/crm/v6/Leads',
//         formData,
//         {
//           headers: {
//             'Authorization': 'Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf'
//           }
//         }
//       );

//       alert('Form submitted successfully!');
//       actions.resetForm();
//     } catch (error) {
//       console.error('Form submission error:', error);
//       alert('Form submission failed.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
//         <h2 className="text-2xl font-bold mb-4">{steps[step].title}</h2>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchemas[step]}
//           onSubmit={handleNext}
//         >
//           {({ setFieldValue }) => (
//             <Form>
//               {steps[step].fields.map((field) => (
//                 <div className="mb-4" key={field}>
//                   <label className="block text-gray-700">{field.split(/(?=[A-Z])/).join(' ')}</label>
//                   <Field
//                     name={field}
//                     type={field === 'uploadImage' ? 'file' : 'text'}
//                     className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//                     onChange={(event) => {
//                       if (field === 'uploadImage') {
//                         setFieldValue('uploadImage', event.currentTarget.files[0]);
//                       } else {
//                         setFieldValue(field, event.target.value);
//                       }
//                     }}
//                   />
//                   <ErrorMessage
//                     name={field}
//                     component="div"
//                     className="text-red-600 text-sm"
//                   />
//                 </div>
//               ))}
//               <div className="flex justify-between">
//                 {step > 0 && (
//                   <button
//                     type="button"
//                     className="bg-gray-500 text-white py-2 px-4 rounded"
//                     onClick={() => setStep(step - 1)}
//                   >
//                     Previous
//                   </button>
//                 )}
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   {step === steps.length - 1 ? 'Submit' : 'Next'}
//                 </button>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default FormComponent;

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
  // First_Name: '',
  // Mobile: '',
  // City:  '',
  // Email: '',
  // Vehicle_Reg_No:  '',
  // Vehicle_Brand:  '',
  // Vehicle_Model:  '',
  // Appointment_Date:  '',
  // Upload_Image: '',
  // Problems_Remark: ''
};

const validationSchemas = [
  Yup.object({
    name: Yup.string().required('Name is required'),
    // mobile: Yup.string().required('Mobile number is required')
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

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const FormComponent = () => {
  const [step, setStep] = useState(0);
  const { isOpen, closePopup } = useFormPopup();

  const handleNext = (values, actions) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit(values, actions);
    }
  };


  const [accessToken, setAccessToken] = useState('');

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

  const handleSubmit = async (values, actions) => {
    console.log("form data", values);
    const mappedValues = {
      First_Name: values.name || '',
      Mobile: values.mobile || '',
      City: values.address || '',
      Email: values.email || '',
      Vehicle_Reg_No: values.vehicleRegNo || '',
      Vehicle_Brand: values.vehicleBrand || '',
      Vehicle_Model: values.vehicleModel || '',
      Appointment_Date: values.appointmentDate || '',
      Upload_Image: values.uploadImage || '',
      Problems_Remark: values.problemsRemark || ''
  };

  console.log("mappedValues",mappedValues)
    try {
     
        if (!accessToken) {
          await generateAccessToken();
        }
      // const formData = new FormData();
      // for (let key in values) {
      //   formData.append(key, values[key]);
      // }
      // console.log("formData",formData)

      const response = await axios.post(
        'https://www.zohoapis.com/crm/v6/Leads',
        mappedValues,
        {
          headers: {
            'Authorization': `Bearer ${accessToken}`
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


  // const handleSubmit = async (values, actions) => {
  //   console.log("values", values);
  //   try {
  //     const formData = new FormData();
  //     formData.append('First_Name', values.name);
  //     formData.append('Mobile', values.mobile);
  //     formData.append('City', values.address);
  //     formData.append('Email', values.email);
  //     formData.append('Vehicle_Reg_No', values.vehicleRegNo);
  //     formData.append('Vehicle_Brand', values.vehicleBrand);
  //     formData.append('Vehicle_Model', values.vehicleModel);
  //     formData.append('Appointment_Date', values.appointmentDate);
  //     formData.append('Upload_Image', values.uploadImage);
  //     formData.append('Problems_Remark', values.problemsRemark);

  //     console.log("formData",formData)
  
  //     const response = await axios.post(
  //       'https://www.zohoapis.com/crm/v6/Leads',
  //       formData,
  //       {
  //         headers: {
  //           'Authorization': 'Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf'
  //         }
  //       }
  //     );
  
  //     alert('Form submitted successfully!');
  //     actions.resetForm();
  //     closePopup();
  //   } catch (error) {
  //     console.error('Form submission error:', error);
  //     alert('Form submission failed.');
  //   }
  // };
  

  return (
    <>
      {isOpen && (
                // <div className="fixed inset-0 bg-black-250 bg-opacity-50 flex justify-center items-center">

        <div className="fixed inset-0 bg-black-250  flex justify-center items-center z-10000" style={{zIndex:"10000"}}>
          <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-black-500">{steps[step].title}</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchemas[step]}
              onSubmit={handleNext}
            >
              {({ setFieldValue }) => (
                // <Form>
                //   {steps[step].fields.map((field) => (
                //     <div className="mb-4" key={field}>
                //       <label className="block text-gray-700">{capitalize(field.split(/(?=[A-Z])/).join(' '))}</label>
                //       <Field
                //         name={field}
                //         type={field === 'uploadImage' ? 'file' : 'text'}
                //         className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                //         onChange={(event) => {
                //           if (field === 'uploadImage') {
                //             setFieldValue('uploadImage', event.currentTarget.files[0]);
                //           } else {
                //             setFieldValue(field, event.target.value);
                //           }
                //         }}
                //       />
                //       <ErrorMessage
                //         name={field}
                //         component="div"
                //         className="text-red-250 text-sm"
                //       />
                //     </div>
                //   ))}
                //   <div className="flex justify-between">
                //     {step > 0 && (
                //       <button
                //         type="button"
                //         className="bg-gray-500 text-white py-2 px-4 rounded"
                //         onClick={() => setStep(step - 1)}
                //       >
                //         Previous
                //       </button>
                //     )}
                //     <button
                //       type="submit"
                //       className="bg-blue-500 text-white py-2 px-4 rounded"
                //     >
                //       {step === steps.length - 1 ? 'Submit' : 'Next'}
                //     </button>
                //   </div>
                // </Form>
                <Form>
  {steps[step].fields.map((field) => (
    <div className="mb-4" key={field}>
      <label className="block text-gray-700">
        {capitalize(field.split(/(?=[A-Z])/).join(' '))}
      </label>
      {field === 'mobile' ? (
        <div className="flex items-center mt-1">
          <img 
            src="/assets/zahra/ksa.png" 
            alt="Saudi Flag" 
            className="w-6 h-4 mr-2"
          />
          <span className="mr-2">+966</span>
          <Field
            name={field}
            type="text"
            className="p-2 w-full border border-gray-300 rounded-md"
            onChange={(event) => {
              setFieldValue(field, event.target.value);
            }}
          />
        </div>
      ) : (
        <Field
          name={field}
          type={field === 'uploadImage' ? 'file' : 'text'}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          onChange={(event) => {
            if (field === 'uploadImage') {
              setFieldValue('uploadImage', event.currentTarget.files[0]);
            } else {
              setFieldValue(field, event.target.value);
            }
          }}
        />
      )}
      <ErrorMessage
        name={field}
        component="div"
        className="text-red-250 text-sm"
      />
    </div>
  ))}
  <div className="flex justify-between">
    {step > 0 && (
      <button
        type="button"
        className="bg-orange-250 text-white-500 py-2 px-4 rounded"
        onClick={() => setStep(step - 1)}
      >
        Previous
      </button>
    )}
    <button
      type="submit"
      className="bg-green-500 text-white-500 py-2 px-4 rounded"
    >
      {step === steps.length - 1 ? 'Submit' : 'Next'}
    </button>
    
  </div>
 
</Form>

              )}
            </Formik>
            {/* <button
              onClick={closePopup}
              className="absolute top-5 right-4 m-4 text-gray-600"
            >
              &times;
            </button> */}
          </div>
        </div>
      )}
    </>
  );
};

export default FormComponent;

