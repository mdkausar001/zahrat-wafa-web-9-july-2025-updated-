import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// import { useFormPopup } from '../components/FormPopUpContext';
// const axios = require('axios');

const steps = [
  { title: 'Step 1: Personal Info', fields: ['Last_Name', 'Phone'] },
  { title: 'Step 2: Contact Info', fields: ['Address', 'Email'] },
  { title: 'Step 3: Vehicle Info', fields: ['Vehicle_Reg_No', 'Vehicle_Brand', 'Vehicle_Model'] },
  { title: 'Step 4: Appointment', fields: [ 'uploadImage', 'Problems_Remark'] }
];

const initialValues = {
  Email: '',
  Last_Name: '',
  Phone: '',
  Address	: '',
  Vehicle_Reg_No: '',
  Vehicle_Model: '',
  Vehicle_Brand: '',
  // Appointment_Date: '',
  Problems_Remark: ''
};



const validationSchemas = [
  Yup.object({
    Last_Name: Yup.string().required('Name is required'),
    Phone: Yup.string()
      .matches(/^5\d{8}$/, 'Mobile number must start with 5 and be exactly 9 digits')
      .required('Mobile number is required'),
  }),
  Yup.object({
    Address	: Yup.string().required('Address is required'),
    Email: Yup.string().email('Invalid email address').required('Email is required')
  }),
  Yup.object({
    Vehicle_Reg_No: Yup.string().required('Vehicle registration number is required'),
    Vehicle_Brand: Yup.string().required('Vehicle brand is required'),
    Vehicle_Model: Yup.string().required('Vehicle model is required')
  }),
  Yup.object({
    // appointmentDate: Yup.string().required('Appointment date is required'),
    // uploadImage: Yup.mixed().required('Image is required'),
    Problems_Remark: Yup.string().required('Problems/Remark is required')
  })
];

const FormComponent = () => {
  const [step, setStep] = useState(0);
  const { isOpen, closePopup } = useState('');
  // useFormPopup();
  const [accessToken, setAccessToken] = useState('');
  const closePopupF = () => closePopup(false);


  const generateAccessToken = async () => {
    try {
      const response = await axios.post('https://accounts.zoho.com/oauth/v2/token', null, {
        params: {
          grant_type: 'authorization_code',
          client_id: '1000.SCYNHHNYGF8BMY5JR74IR9ZXPAPB1N',
          client_secret: 'b1a6c3c38245f55527c4042d909a76a882c46ab6a4',
          redirect_uri: 'https://zahrat-web.vercel.app/',
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

  // const handleSubmit = async (values, actions) => {
  //   const formData = new FormData();
  //   Object.entries(values).forEach(([key, value]) => {
  //     if (key === 'uploadImage') {
  //       formData.append(key, value);
  //     } else {
  //       formData.append(key, value);
  //     }
  //   });

  //   if (!accessToken) {
  //     await generateAccessToken();
  //   }

  //   try {
  //     const response = await axios.post(
  //       'https://www.zohoapis.com/crm/v6/Leads',
  //       formData,
  //       {
  //         headers: {
  //           'Authorization': `Bearer ${accessToken}`,
  //           'Content-Type': 'multipart/form-data',
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


  const handleSubmit = async (values, actions) => {
    console.log("values",values)
    const { appointmentDate, uploadImage, ...restValues } = values;
  
    const argumentsObject = {
      appointmentDate,
      uploadImage,
      ...restValues
    };
    console.log("argumentsObject",argumentsObject);
  
    const formData = new FormData();
    formData.append('arguments', JSON.stringify(argumentsObject));
    console.log("formData0",formData)

    
  
    try {
      const response = await axios.post(
        'https://www.zohoapis.com/crm/v2/functions/zahratw/actions/execute?auth_type=apikey&zapikey=1003.6fc0d1272d8141c5720f6cea2fed716e.1277c0e814d6e2984e85d4432c280c03q',
        formData,
        {
          headers: {
            'Content-Type': 'form-data',
            'Accept': '*/*',
          }
        }
      );
  
      console.log('Zoho API response:', response.data);
      alert('Form submitted successfully!');
      actions.resetForm();
      closePopup();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Form submission failed.');
    }
  };
  

  const [response, setResponse] = useState(null);
  const handleSubmit1 = async () => {
    try {
      const url = 'https://www.zohoapis.com/crm/v2/functions/zahratw/actions/execute';
      const params = {
        auth_type: 'apikey',
        zapikey: '1003.6fc0d1272d8141c5720f6cea2fed716e.1277c0e814d6e2984e85d4432c280c03',
      };
      const formData = new FormData();
      formData.append('arguments', JSON.stringify({
        "Email": "dddk@ai.cok",
        "Last_Name": "dd",
        "Phone": "559034114",
        "Address": "d",
        "Vehicle_Reg_No": "3",
        "Vehicle_Model": "d",
        "Vehicle_Brand": "d",
        "Problems_Remark": "dd"
      }));
      console.log("formDataNew",formData);
      const response = await axios.post(url, formData, {
        params: params,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResponse(response.data); // Assuming response.data contains the JSON response from the server
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };
  return (
    <>
    {isOpen && (
  // <div className="fixed inset-0 bg-black-250 flex justify-center items-center z-10000" style={{ zIndex: "10000" }}>
  //   <div className="bg-gray-100 p-8 rounded shadow-lg w-full max-w-md">
  //     <div className="flex justify-end">
  //       <button
  //         type="button"
  //         className="text-gray-600 hover:text-gray-800"
  //         onClick={closePopupF}
  //       >
  //         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  //         </svg>
  //       </button>
  //     </div>
  //     <h2 className="text-2xl font-bold mb-4 text-black-500">{steps[step].title}</h2>
  //     <Formik
  //       initialValues={initialValues}
  //       validationSchema={validationSchemas[step]}
  //       onSubmit={handleNext}
  //     >
  //       {({ setFieldValue }) => (
  //         <Form>
  //           {steps[step].fields.map((field) => (
  //             <div className="mb-4" key={field}>
  //               <label className="block text-gray-700">
  //                 {field.split(/(?=[A-Z])/).join(' ')}
  //               </label>
  //               {field === 'mobile' ? (
  //                 <div className="flex items-center mt-1">
  //                   <img src="/assets/zahra/ksa.png" alt="Saudi Flag" className="w-6 h-4 mr-2" />
  //                   <span className="mr-2">+966</span>
  //                   <Field
  //                     name={field}
  //                     type="text"
  //                     className="p-2 w-full border border-gray-300 rounded-md"
  //                     onChange={(event) => setFieldValue(field, event.target.value)}
  //                   />
  //                 </div>
  //               ) : (
  //                 <Field
  //                   name={field}
  //                   type={field === 'uploadImage' ? 'file' : 'text'}
  //                   className="mt-1 p-2 w-full border border-gray-300 rounded-md"
  //                   onChange={(event) => {
  //                     if (field === 'uploadImage') {
  //                       setFieldValue('uploadImage', event.currentTarget.files[0]);
  //                     } else {
  //                       setFieldValue(field, event.target.value);
  //                     }
  //                   }}
  //                 />
  //               )}
  //               <ErrorMessage
  //                 name={field}
  //                 component="div"
  //                 className="text-red-250 text-sm"
  //               />
  //             </div>
  //           ))}
  //           <div className="flex justify-between">
  //             {step > 0 && (
  //               <button
  //                 type="button"
  //                 className="bg-gray-500 text-white py-2 px-4 rounded"
  //                 onClick={() => setStep(step - 1)}
  //               >
  //                 Previous
  //               </button>
  //             )}
  //             <button
  //               type="submit"
  //               className="bg-blue-500 text-white py-2 px-4 rounded"
  //             >
  //               {step === steps.length - 1 ? 'Submit' : 'Next'}
  //             </button>
  //           </div>
  //         </Form>
  //       )}
  //     </Formik>
  //   </div>
  // </div>

    <div className="fixed inset-0 bg-black-250 flex justify-center items-center z-10000" style={{ zIndex: "10000" }}>

      <button
          type="button"
          className="text-gray-600 hover:text-gray-800"
          onClick={closePopupF}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
     <iframe
    title='Zahrat'
    frameBorder="0"
    style={{ height: '50%', width: '70%', border: 'none' }}
    src='https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Zahrat1/formperma/8Jf7s9Ce_O2IzOig_9JWIyrWDzY2Anl7ZJhoAmGPqzk'
  />

  </div>
)}

    </>
  );
};

export default FormComponent;
