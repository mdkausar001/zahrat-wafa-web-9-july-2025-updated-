import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const SuggestionsForm = () => {
  const { t } = useTranslation()

  const [submitting, setSubmitting] = useState(false) // Track form submission state
  // const [showSuccessPopup, setShowSuccessPopup] = useState(true); // Track success popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track success popup state

  // console.log("process.env.NEXT_PUBLIC_API_URL",process.env.NEXT_PUBLIC_API_URL);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      contactNumber: '',
      suggestionType: '',
      suggestionDetails: '',
      attachment: null,
    },
    // validationSchema: Yup.object({

    //   name: Yup.string().required('Name is required'),
    //   email: Yup.string().email('Invalid email address').required('Email is required'),
    //   suggestionType: Yup.string().required('Suggestion Type is required'),
    //   suggestionDetails: Yup.string().required('Suggestion Details are required'),
    // }),
    onSubmit: async (values) => {
      // Handle form submission
      // console.log("values333",values);
      try {
        // const response = await fetch('http://localhost:5000/api/suggestionForm', {
        // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/suggestionForm`, {
        const response = await fetch('/api/submitForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // body: JSON.stringify(values),
          body: JSON.stringify({ formData: { ...values, form: 'suggestion' } }),
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
        setSubmitting(false) // Reset loading state
      }
    },
  })

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-50'>
      <div className='bg-white-500 rounded-lg p-8 max-w-2xl w-full'>
        <div className='flex items-center mb-6'>
          <img
            src='/assets/form/suggest.gif' // Replace with the actual path to your GIF
            alt='Suggestion Icon'
            className='h-8 w-8 mr-3' // Adjust the size as needed
          />
          <h2 className='text-2xl font-bold text-gray-800'>
            {t('shareYourSuggestions')}
          </h2>
        </div>
        {/* <h2 className="text-2xl font-bold mb-6 text-gray-800">Share Your Suggestions</h2> */}
        <form onSubmit={formik.handleSubmit} className='space-y-6'>
          {/* Name Field */}
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-gray-700 font-semibold mb-2'>
              {t('fullName')} <span className='text-red-500'>*</span>
            </label>
            <input
              id='name'
              name='name'
              type='text'
              className={`border p-3 rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.name && formik.errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <span className='text-red-500 text-sm mt-1'>
                {formik.errors.name}
              </span>
            ) : null}
          </div>

          {/* Email Field */}
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-gray-700 font-semibold mb-2'>
              {t('emailAddress')} <span className='text-red-500'>*</span>
            </label>
            <input
              id='email'
              name='email'
              type='email'
              className={`border p-3 rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.email && formik.errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className='text-red-500 text-sm mt-1'>
                {formik.errors.email}
              </span>
            ) : null}
          </div>

          {/* Contact Number Field */}
          <div className='flex flex-col'>
            <label
              htmlFor='contactNumber'
              className='text-gray-700 font-semibold mb-2'
            >
              {t('contactNumber')}
            </label>
            <input
              id='contactNumber'
              name='contactNumber'
              type='text'
              className='border p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.contactNumber}
            />
          </div>

          {/* Suggestion Type Dropdown */}
          <div className='flex flex-col'>
            <label
              htmlFor='suggestionType'
              className='text-gray-700 font-semibold mb-2'
            >
              {t('suggestionType')} <span className='text-red-500'>*</span>
            </label>
            <select
              id='suggestionType'
              name='suggestionType'
              className={`border p-3 rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.suggestionType && formik.errors.suggestionType
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.suggestionType}
            >
              <option value=''>{t('select')}</option>
              <option value='Service Improvement'>
                {t('serviceImprovement')}
              </option>
              <option value='Product Enhancement'>
                {t('productEnhancement')}
              </option>
              <option value='Customer Service'>{t('customerService')}</option>
              <option value='Other'>{t('other')}</option>
            </select>
            {formik.touched.suggestionType && formik.errors.suggestionType ? (
              <span className='text-red-500 text-sm mt-1'>
                {formik.errors.suggestionType}
              </span>
            ) : null}
          </div>

          {/* Suggestion Details Text Area */}
          <div className='flex flex-col'>
            <label
              htmlFor='suggestionDetails'
              className='text-gray-700 font-semibold mb-2'
            >
              {t('suggestionDetails')} <span className='text-red-500'>*</span>
            </label>
            <textarea
              id='suggestionDetails'
              name='suggestionDetails'
              className={`border p-3 rounded-md focus:outline-none focus:ring-2 ${
                formik.touched.suggestionDetails &&
                formik.errors.suggestionDetails
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
              rows='4'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.suggestionDetails}
            />
            {formik.touched.suggestionDetails &&
            formik.errors.suggestionDetails ? (
              <span className='text-red-500 text-sm mt-1'>
                {formik.errors.suggestionDetails}
              </span>
            ) : null}
          </div>

          {/* Attachment (Optional) */}
          <div className='flex flex-col'>
            <label
              htmlFor='attachment'
              className='text-gray-700 font-semibold mb-2'
            >
              {t('attachmentOptional')}
            </label>
            <input
              id='attachment'
              name='attachment'
              type='file'
              className='border p-3 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
              onChange={(event) =>
                formik.setFieldValue('attachment', event.currentTarget.files[0])
              }
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-orange-250 text-white-500 p-2 px-10 md:text-xl shadow-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300'
              disabled={formik.isSubmitting}
            >
              {t('submit')}
            </button>
          </div>
        </form>
      </div>
      {showSuccessPopup && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-00 bg-opacity-50 z-50'>
          <div className='bg-white p-8 rounded-md shadow-xl max-w-md w-full text-center'>
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
              Your Request has been submitted successfully!
            </h2>
            <p className='text-gray-600 mb-6'>
              Thank you for your submission. We will get back to you soon.
            </p>

            {/* Close button */}
            <button
              className='bg-green-500 hover:bg-green-600 text-white-500 py-2 px-6 rounded-md transition duration-300'
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default SuggestionsForm

// //2
// import { useState } from 'react';

// const TestForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Name:', name);
//     console.log('Email:', email);
//     alert(`Name: ${name}, Email: ${email}`);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center p-4">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Test Form</h2>

//         {/* Name Input */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//           />
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TestForm;
