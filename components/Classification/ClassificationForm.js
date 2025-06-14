import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email Address is required'),
  contactNumber: Yup.string()
    .matches(
      /^5\d{8}$/,
      'Contact Number must start with 5 and be exactly 9 digits long'
    )
    .required('Contact Number is required'),
  classificationType: Yup.string()
    .oneOf(
      ['Customer', 'Vendor', 'Employee', 'Other'],
      'Invalid Classification Type'
    )
    .required('Classification Type is required'),
  description: Yup.string().required('Description is required'),
})

const ClassificationForm = () => {
  const [submitting, setSubmitting] = useState(false) // Track form submission state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track success popup state
  // console.log("showSuccessPopup",showSuccessPopup);
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
  const { t } = useTranslation()

  const onSubmit = async (data) => {
    setSubmitting(true) // Start submission
    // console.log("data", data);

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: { ...data, form: 'classification' } }), // Send form data to backend
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
      setValue('contactNumber', value) // Manually update the phone value in react-hook-form
    }
  }

  return (
    <div className='bg-gray min-h-screen flex items-center justify-center p-4'>
      <div className='bg-gray-100 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
        <div className='flex items-center mb-8'>
          <Image
            src='/assets/form/class.gif'
            alt='Classification Icon'
            width={48}
            height={48}
            className='mr-4'
          />
          <h1 className='text-center text-gray-900 text-3xl font-semibold tracking-tight'>
            {t('classificationForm')}
          </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Full Name Field */}
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-700'
              >
                {t('fullName')}
              </label>
              <input
                type='text'
                id='fullName'
                {...register('fullName')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.fullName && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.fullName.message}
                </div>
              )}
            </div>

            {/* Email Address Field */}
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
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.email && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.email.message}
                </div>
              )}
            </div>

            {/* Contact Number Field */}
            <div>
              <label
                htmlFor='contactNumber'
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
                  className='mr-2'
                />
                <span className='text-gray-700'>+966</span>
                <input
                  type='text'
                  id='contactNumber'
                  {...register('contactNumber')}
                  onChange={handlePhoneChange}
                  className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                    errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                  required
                />
              </div>
              {errors.contactNumber && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.contactNumber.message}
                </div>
              )}
            </div>

            {/* Classification Type Field */}
            <div>
              <label
                htmlFor='classificationType'
                className='block text-sm font-medium text-gray-700'
              >
                {t('classificationType')}
              </label>
              <select
                id='classificationType'
                {...register('classificationType')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.classificationType
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
                required
              >
                <option value=''>{t('selectType')}</option>
                <option value='Customer'>{t('customer')}</option>
                <option value='Vendor'>{t('vendor')}</option>
                <option value='Employee'>{t('employee')}</option>
                <option value='Other'>{t('other')}</option>
              </select>
              {errors.classificationType && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.classificationType.message}
                </div>
              )}
            </div>
          </div>

          {/* Description Field */}
          <div>
            <label
              htmlFor='description'
              className='block text-sm font-medium text-gray-700'
            >
              {t('description')}
            </label>
            <textarea
              id='description'
              {...register('description')}
              rows='4'
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {errors.description && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.description.message}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              className='w-full bg-orange-250 text-white-500 py-3 px-6 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out'
              disabled={isSubmitting || !isValid}
            >
              {submitting ? 'Submitting...' : t('submit')}
            </button>
          </div>
        </form>
      </div>
      {/* {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold text-green-500">Form submitted successfully!</h2>
            <button 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setShowSuccessPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )} */}
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

export default ClassificationForm
