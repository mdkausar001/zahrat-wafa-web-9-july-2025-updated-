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
    .required('Email is required'),
  contactNumber: Yup.string()
    .matches(
      /^5\d{8}$/,
      'Contact Number must start with 5 and be exactly 9 digits long'
    )
    .required('Contact Number is required'),
  serviceRequired: Yup.string().required('Service Required is mandatory'),
  carModel: Yup.string(),
  carMakeYear: Yup.number()
    .min(1900, 'Year must be 1900 or later')
    .max(new Date().getFullYear(), `Year cannot be in the future`),
  issueDescription: Yup.string(),
  preferredServiceDate: Yup.date().nullable(),
  supportingDocuments: Yup.mixed(),
})

const JobRequestForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track success popup state

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  })
  const { t } = useTranslation()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, '0')
    const month = date.toLocaleString('default', { month: 'short' })
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }

  const onSubmit = async (data) => {
    setSubmitting(true)
    try {
      const response = await fetch('/api/submitJobRequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          preferredServiceDate: formatDate(data.preferredServiceDate),
          form: 'jobrequest',
        }),
      })

      if (response.ok) {
        const result = await response.json()
        setShowSuccessPopup(true)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-4'>
      <div className='bg-white-500 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
        <h1 className='text-center text-gray-900 text-3xl font-semibold mb-8'>
          {t('jobRequestForm')}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Full Name */}
            <div>
              <label
                htmlFor='fullName'
                className='block text-sm font-medium text-gray-700'
              >
                {t('fullName')} *
              </label>
              <input
                type='text'
                id='fullName'
                {...register('fullName')}
                className={`mt-1 block w-full px-4 py-3 border rounded shadow-sm ${
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

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                {t('email')} *
              </label>
              <input
                type='email'
                id='email'
                {...register('email')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
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

            {/* Contact Number */}
            <div>
              <label
                htmlFor='contactNumber'
                className='block text-sm font-medium text-gray-700'
              >
                {t('contactNumber')} *
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
                  className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
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

            {/* Service Required */}
            <div>
              <label
                htmlFor='serviceRequired'
                className='block text-sm font-medium text-gray-700'
              >
                {t('serviceRequired')} *
              </label>
              <input
                type='text'
                id='serviceRequired'
                {...register('serviceRequired')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
                  errors.serviceRequired ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.serviceRequired && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.serviceRequired.message}
                </div>
              )}
            </div>

            {/* Car Model */}
            <div>
              <label
                htmlFor='carModel'
                className='block text-sm font-medium text-gray-700'
              >
                {t('carModel')}
              </label>
              <input
                type='text'
                id='carModel'
                {...register('carModel')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
                  errors.carModel ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.carModel && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.carModel.message}
                </div>
              )}
            </div>

            {/* Car Make Year */}
            <div>
              <label
                htmlFor='carMakeYear'
                className='block text-sm font-medium text-gray-700'
              >
                {t('carMakeYear')}
              </label>
              <input
                type='number'
                id='carMakeYear'
                {...register('carMakeYear')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
                  errors.carMakeYear ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.carMakeYear && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.carMakeYear.message}
                </div>
              )}
            </div>
          </div>

          {/* Description of the Issue */}
          <div>
            <label
              htmlFor='issueDescription'
              className='block text-sm font-medium text-gray-700'
            >
              {t('descriptionOfTheIssue')}
            </label>
            <textarea
              id='issueDescription'
              {...register('issueDescription')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
                errors.issueDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              rows='4'
            />
            {errors.issueDescription && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.issueDescription.message}
              </div>
            )}
          </div>

          {/* Preferred Service Date */}
          <div>
            <label
              htmlFor='preferredServiceDate'
              className='block text-sm font-medium text-gray-700'
            >
              {t('preferredServiceDate')}
            </label>
            <input
              type='date'
              id='preferredServiceDate'
              {...register('preferredServiceDate')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm ${
                errors.preferredServiceDate
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {errors.preferredServiceDate && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.preferredServiceDate.message}
              </div>
            )}
          </div>

          {/* Supporting Documents */}
          <div>
            <label
              htmlFor='supportingDocuments'
              className='block text-sm font-medium text-gray-700'
            >
              {t('uploadSupportingDocuments')}
            </label>
            <input
              type='file'
              id='supportingDocuments'
              {...register('supportingDocuments')}
              className={`mt-1 block w-full text-gray-900`}
              multiple
            />
          </div>

          {/* Submit Button */}
          <div className='flex justify-end'>
            <button
              type='submit'
              className='bg-orange-250 text-white px-6 py-2 rounded shadow-md hover:bg-blue-700'
              disabled={isSubmitting || submitting}
            >
              {submitting ? 'Submitting...' : t('submit')}
            </button>
          </div>
        </form>

        {/* Success Popup */}
        {showSuccessPopup && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white-500 p-6 rounded-lg shadow-lg text-center'>
              <h2 className='text-2xl font-semibold mb-4'>
                {t('successPopupTitle')}
              </h2>
              <p>{t('successPopupMessage')}</p>
              <button
                className='mt-4 bg-orange-250 text-white px-4 py-2 rounded-md shadow-md'
                onClick={() => setShowSuccessPopup(false)}
              >
                {t('closePopupButton')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default JobRequestForm
