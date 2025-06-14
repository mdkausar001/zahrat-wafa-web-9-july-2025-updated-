// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import Image from 'next/image';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//     name: Yup.string().required('Name is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     phone: Yup.string()
//         .matches(/^5\d{8}$/, 'Phone number must start with 5 and be exactly 9 digits long')
//         .required('Phone number is required'),
//     complaint: Yup.string().required('Complaint is required'),
// });

// const ComplaintsForm = () => {
//     var formik = useFormik({
//         initialValues: {
//             name: '',
//             email: '',
//             phone: '',
//             complaint: '',
//         },
//         validationSchema,
//         onSubmit: async (values) => {
//             // Handle form submission logic here

//             console.log(values);

//             try {
//                 // const response = await fetch('http://localhost:5000/api/submitForm', {
//                     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submitForm`, {

//                   method: 'POST',
//                   headers: {
//                     'Content-Type': 'application/json',
//                   },
//                   body: JSON.stringify(values),
//                 });

//                 if (response.ok) {
//                   const result = await response.json();
//                   console.log('Form submitted successfully:', result);
//                 } else {
//                   console.error('Form submission failed');
//                 }
//               } catch (error) {
//                 console.error('Error submitting form:', error);
//               } finally {
//                 setSubmitting(false); // Reset loading state
//               }

//         },
//         validateOnChange: false, // Validate only on submit or on blur
//         validateOnBlur: true,
//     });

//     const handlePhoneChange = (e) => {
//         const { value } = e.target;
//         // Allow only numbers and enforce length restriction dynamically
//         if (/^\d{0,10}$/.test(value) && value.startsWith('5')) {
//             formik.setFieldValue('phone', value);
//         }
//     };

//     return (
//         <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
//             <div className="bg-white-500 p-8 rounded-lg shadow-lg w-full max-w-2xl">
//                 <div className="flex items-center mb-6">
//                     <Image
//                         src="/assets/form/download.svg"
//                         alt="Complaint Icon"
//                         width={48}
//                         height={48}
//                         className="mr-4"
//                     />
//                     <h1 className="text-center text-black-600  text-3xl  font-light-bold tracking-wider uppercase">Complaint Form</h1>
//                 </div>
//                 <form onSubmit={formik.handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                             <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 id="name"
//                                 name="name"
//                                 value={formik.values.name}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
//                                     formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 required
//                             />
//                             {formik.touched.name && formik.errors.name ? (
//                                 <div className="text-red-300 text-sm mt-1 text-red-250">{formik.errors.name}</div>
//                             ) : null}
//                         </div>
//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                             <input
//                                 type="email"
//                                 id="email"
//                                 name="email"
//                                 value={formik.values.email}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
//                                     formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
//                                 }`}
//                                 required
//                             />
//                             {formik.touched.email && formik.errors.email ? (
//                                 <div className="text-red-300 text-sm mt-1 text-red-250">{formik.errors.email}</div>
//                             ) : null}
//                         </div>
//                         <div className="relative mt-1">
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                             <div className="flex items-center space-x-2">
//                                 <Image
//                                     src="/assets/zahra/ksa.png" // Update path as needed
//                                     alt="Saudi Flag"
//                                     width={24} // Adjust width as necessary
//                                     height={16} // Adjust height as necessary
//                                     className="mr-2 "
//                                 />
//                                 <span className="mr-2">+966</span>
//                                 <input
//                                     type="text"
//                                     id="phone"
//                                     name="phone"
//                                     value={formik.values.phone}
//                                     onChange={handlePhoneChange}
//                                     onBlur={formik.handleBlur}
//                                     className={`p-2 w-full border rounded-md ${
//                                         formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-300'
//                                     }`}
//                                     required
//                                 />
//                             </div>
//                             {formik.touched.phone && formik.errors.phone ? (
//                                 <div className="text-red-300 text-sm mt-1 text-red-250">{formik.errors.phone}</div>
//                             ) : null}
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">Complaint Description</label>
//                         <textarea
//                             id="complaint"
//                             name="complaint"
//                             value={formik.values.complaint}
//                             onChange={formik.handleChange}
//                             onBlur={formik.handleBlur}
//                             rows="4"
//                             className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
//                                 formik.touched.complaint && formik.errors.complaint ? 'border-red-500' : 'border-gray-300'
//                             }`}
//                             required
//                         />
//                         {formik.touched.complaint && formik.errors.complaint ? (
//                             <div className="text-red-300 text-sm mt-1 text-red-250">{formik.errors.complaint}</div>
//                         ) : null}
//                     </div>
//                     <div>
//                         <button
//                             type="submit"
//                             className="w-full bg-orange-250 text-white-500 py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
//                         >
//                             Submit
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ComplaintsForm;
//2 hook
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
// import Image from 'next/image';
// import { useState } from 'react';

// // Validation schema using Yup
// const validationSchema = Yup.object({
//   name: Yup.string().required('Name is required'),
//   email: Yup.string().email('Invalid email address').required('Email is required'),
//   phone: Yup.string()
//     .matches(/^5\d{8}$/, 'Phone number must start with 5 and be exactly 9 digits long')
//     .required('Phone number is required'),
//   complaint: Yup.string().required('Complaint is required'),
// });

// const ComplaintsForm = () => {
//   const [submitting, setSubmitting] = useState(false); // Track form submission state

//   // useForm hook with Yup validation
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting, isValid },
//     setValue,
//   } = useForm({
//     resolver: yupResolver(validationSchema),
//     mode: 'onTouched', // Validation triggers on blur or touch
//   });

//   const onSubmit = async (data) => {
//     setSubmitting(true); // Start submission

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submitForm`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Form submitted successfully:', result);
//       } else {
//         console.error('Form submission failed');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setSubmitting(false); // Reset submission state
//     }
//   };

//   const handlePhoneChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,9}$/.test(value) && value.startsWith('5')) {
//       setValue('phone', value); // Manually update the phone value in react-hook-form
//     }
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4">
//       <div className="bg-white-500 p-8 rounded-lg shadow-lg w-full max-w-2xl">
//         <div className="flex items-center mb-6">
//           <Image src="/assets/form/download.svg" alt="Complaint Icon" width={48} height={48} className="mr-4" />
//           <h1 className="text-center text-black-600  text-3xl  font-light-bold tracking-wider uppercase">Complaint Form</h1>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Name Field */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//               <input
//                 type="text"
//                 id="name"
//                 {...register('name')}
//                 className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//                 required
//               />
//               {errors.name && <div className="text-red-300 text-sm mt-1 text-red-250">{errors.name.message}</div>}
//             </div>

//             {/* Email Field */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 {...register('email')}
//                 className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//                 required
//               />
//               {errors.email && <div className="text-red-300 text-sm mt-1 text-red-250">{errors.email.message}</div>}
//             </div>

//             {/* Phone Field */}
//             <div className="relative mt-1">
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <div className="flex items-center space-x-2">
//                 <Image src="/assets/zahra/ksa.png" alt="Saudi Flag" width={24} height={16} className="mr-2 " />
//                 <span className="mr-2">+966</span>
//                 <input
//                   type="text"
//                   id="phone"
//                   {...register('phone')}
//                   onChange={handlePhoneChange}
//                   className={`p-2 w-full border rounded-md ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//                   required
//                 />
//               </div>
//               {errors.phone && <div className="text-red-300 text-sm mt-1 text-red-250">{errors.phone.message}</div>}
//             </div>
//           </div>

//           {/* Complaint Field */}
//           <div>
//             <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">Complaint Description</label>
//             <textarea
//               id="complaint"
//               {...register('complaint')}
//               rows="4"
//               className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${errors.complaint ? 'border-red-500' : 'border-gray-300'}`}
//               required
//             />
//             {errors.complaint && <div className="text-red-300 text-sm mt-1 text-red-250">{errors.complaint.message}</div>}
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-orange-250 text-white-500 py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
//               disabled={isSubmitting || !isValid}
//             >
//               {submitting ? 'Submitting...' : 'Submit'}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ComplaintsForm;
//4
// components/ComplaintsForm.js

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(
      /^5\d{8}$/,
      'Phone number must start with 5 and be exactly 9 digits long'
    )
    .required('Phone number is required'),
  complaint: Yup.string().required('Complaint is required'),
})

const ComplaintsForm = () => {
  const { t } = useTranslation()

  const [submitting, setSubmitting] = useState(false) // Track form submission state
  // const [showSuccessPopup, setShowSuccessPopup] = useState(true); // Track success popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track success popup state

  // useForm hook with Yup validation
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched', // Validation triggers on blur or touch
  })

  const onSubmit = async (data) => {
    setSubmitting(true) // Start submission
    console.log('data777', data)

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ formData: data }), // Send form data to backend
        // body: JSON.stringify({ ...data, form: "complaint" }), // Send form data to backend
        body: JSON.stringify({ formData: { ...data, form: 'complaint' } }),
      })

      if (response.ok) {
        const result = await response.json()
        // console.log('Form submitted successfully:', result);
        setShowSuccessPopup(true) // Show success popup
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setSubmitting(false) // Reset submission state
    }
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value
    if (/^\d{0,9}$/.test(value) && value.startsWith('5')) {
      setValue('phone', value) // Manually update the phone value in react-hook-form
    }
  }

  return (
    <div className='bg-gray-50 min-h-screen flex items-center justify-center p-4'>
      {/* <div className="bg-white-500 p-8 rounded-lg shadow-lg w-full max-w-2xl"> */}
      <div className='bg-gray-100 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
        <div className='flex items-center mb-4'>
          <Image
            src='/assets/form/com.gif'
            alt='Complaint Icon'
            width={48}
            height={48}
            className='mr-4'
          />
          <h1 className='text-center text-black-600  text-3xl  font-light-bold tracking-wider uppercase'>
            {t('complaintForm')}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Name Field */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                {t('fullName')}
              </label>
              <input
                type='text'
                id='name'
                {...register('name')}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.name && (
                <div className='text-red-300 text-sm mt-1 text-red-250'>
                  {errors.name.message}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                {t('emailAddress')}
              </label>
              <input
                type='email'
                id='email'
                {...register('email')}
                className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.email && (
                <div className='text-red-300 text-sm mt-1 text-red-250'>
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div className='relative mt-1'>
              <label
                htmlFor='phone'
                className='block text-sm font-medium text-gray-700'
              >
                {t('contactNumber')}
              </label>
              <div className='flex items-center space-x-2'>
                <Image
                  src='/assets/zahra/ksa.png'
                  alt='Saudi Flag'
                  width={24}
                  height={16}
                  className='mr-2 '
                />
                <span className='mr-2'>+966</span>
                <input
                  type='text'
                  id='phone'
                  {...register('phone')}
                  onChange={handlePhoneChange}
                  className={`p-2 w-full border rounded-md ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
              </div>
              {errors.phone && (
                <div className='text-red-300 text-sm mt-1 text-red-250'>
                  {errors.phone.message}
                </div>
              )}
            </div>
          </div>

          {/* Complaint Field */}
          <div>
            <label
              htmlFor='complaint'
              className='block text-sm font-medium text-gray-700'
            >
              {t('complaintDescription')}
            </label>
            <textarea
              id='complaint'
              {...register('complaint')}
              rows='4'
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm ${
                errors.complaint ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.complaint && (
              <div className='text-red-300 text-sm mt-1 text-red-250'>
                {errors.complaint.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full bg-orange-250 text-white-500 py-2 px-4 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out'
              disabled={isSubmitting || !isValid}
            >
              {submitting ? 'Submitting...' : t('submit')}
            </button>
          </div>
        </form>
      </div>
      {showSuccessPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-00 bg-opacity-50 z-50'>
          <div className='bg-white-500 p-8 rounded-md shadow-xl max-w-md w-full text-center'>
            {/* Green check icon */}
            <div className='flex justify-center mb-4'>
              <div className='bg-green-500 rounded-full p-3'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='2'
                  stroke='white'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
            </div>

            {/* Success message */}
            <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
              {/* Your Request has been submitted successfully! */}
              {t('requestSubmitted')}
            </h2>
            <p className='text-gray-600 mb-6'>
              {/* Thank you for your submission. We will get back to you soon. */}
              {t('thankYouMessage')}
            </p>

            {/* Close button */}
            <button
              className='bg-green-500 hover:bg-green-600 text-white-500 py-2 px-6 rounded-md transition duration-300'
              onClick={() => setShowSuccessPopup(false)}
            >
              {/* Close */}
              {t('close')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ComplaintsForm
