import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

// Validation schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  contactNumber: Yup.string()
    .matches(
      /^5\d{8}$/,
      'Contact Number must start with 5 and be exactly 9 digits long'
    )
    .required('Contact Number is required'),
  carModel: Yup.string().required('Car Model is required'),
  carMakeYear: Yup.number()
    .min(1900, 'Year must be 1900 or later')
    .max(new Date().getFullYear(), `Year cannot be in the future`)
    .required('Car Make Year is required'),
  serviceType: Yup.string()
    .oneOf(
      [
        'Car Collision Repair',
        'Car Denting',
        'Painting',
        'General Maintenance',
        'Other',
      ],
      'Invalid Service Type'
    )
    .required('Type of Service Performed is required'),
  serviceDate: Yup.date().required('Service Date is required'),
  completionDate: Yup.date().nullable(),
  technicianName: Yup.string(),
  additionalComments: Yup.string(),
})

const JobInformationForm = () => {
  const [submitting, setSubmitting] = useState(false)
  // const [showSuccessPopup, setShowSuccessPopup] = useState(true); // Track success popup state
  const [showSuccessPopup, setShowSuccessPopup] = useState(false) // Track success popup state

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  })
  const { t } = useTranslation()

  const formatDate = (date) => {
    if (!date) return '' // Return empty string if date is not provided
    const d = new Date(date)
    return d.toISOString().split('T')[0] // Format as yyyy-MM-dd
  }

  const onSubmit = async (data1) => {
    setSubmitting(true)
    // console.log("fform-data",data1);

    // // Format dates before sending
    // const formattedData = {
    //   ...data,
    //   serviceDate: formatDate(data.serviceDate),
    //   completionDate: formatDate(data.completionDate),
    // };
    // console.log("formattedData-date",formattedData);

    // Helper function to format dates as yyyy-MM-dd
    const formatDate = (dateString) => {
      const date = new Date(dateString)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0') // Adding 1 since getMonth() returns 0-11
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }

    // Format dates before sending
    const data = {
      ...data1,
      serviceDate: formatDate(data1.serviceDate),
      completionDate: formatDate(data1.completionDate),
    }

    console.log('formattedData-date', data)
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData: { ...data, form: 'jobinformation' } }),
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
      setSubmitting(false)
    }
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - 1900 + 1 },
    (_, i) => i + 1900
  )
  // <span className="mr-1">{t('theMostTrusted')}</span>

  return (
    <div className='bg-gray min-h-screen flex items-center justify-center p-4'>
      <div className='bg-gray-100 p-10 rounded-lg shadow-lg w-full max-w-2xl'>
        <div className='flex items-center mb-8'>
          <Image
            src='/assets/form/jobinfo.gif'
            alt='Car Service Icon'
            width={48}
            height={48}
            className='mr-4'
          />
          <h1 className='text-center text-gray-900 text-3xl font-semibold tracking-tight'>
            {t('jobInformationForm')}
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

            {/* Car Model Field */}
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
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.carModel ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.carModel && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.carModel.message}
                </div>
              )}
            </div>

            {/* Car Make Year Field */}
            <div>
              <label
                htmlFor='carMakeYear'
                className='block text-sm font-medium text-gray-700'
              >
                {t('carMakeYear')}
              </label>
              <select
                id='carMakeYear'
                {...register('carMakeYear')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.carMakeYear ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              >
                <option value=''>{t('selectYear')}</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {errors.carMakeYear && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.carMakeYear.message}
                </div>
              )}
            </div>

            {/* Type of Service Performed Field */}
            <div>
              <label
                htmlFor='serviceType'
                className='block text-sm font-medium text-gray-700'
              >
                {' '}
                {t('typeOfServicePerformed')}
              </label>
              <select
                id='serviceType'
                {...register('serviceType')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.serviceType ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              >
                <option value=''>{t('selectServiceType')}</option>
                <option value='Car Collision Repair'>
                  {t('carCollisionRepair')}
                </option>
                <option value='Car Denting'>{t('carDenting')}</option>
                <option value='Painting'>{t('painting')}</option>
                <option value='General Maintenance'>
                  {t('generalMaintenance')}
                </option>
                <option value='Other'>{t('other')}</option>
              </select>
              {errors.serviceType && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.serviceType.message}
                </div>
              )}
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Service Date Field */}
            <div>
              <label
                htmlFor='serviceDate'
                className='block text-sm font-medium text-gray-700'
              >
                {t('serviceDate')}
              </label>
              <input
                type='date'
                id='serviceDate'
                {...register('serviceDate')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.serviceDate ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.serviceDate && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.serviceDate.message}
                </div>
              )}
            </div>

            {/* Service Completion Date Field */}
            <div>
              <label
                htmlFor='completionDate'
                className='block text-sm font-medium text-gray-700'
              >
                {t('serviceCompletionDateOptional')}
              </label>
              <input
                type='date'
                id='completionDate'
                {...register('completionDate')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.completionDate ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.completionDate && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.completionDate.message}
                </div>
              )}
            </div>

            {/* Technician Name Field */}
            <div>
              <label
                htmlFor='technicianName'
                className='block text-sm font-medium text-gray-700'
              >
                {t('technicianNameOptional')}
              </label>
              <input
                type='text'
                id='technicianName'
                {...register('technicianName')}
                className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                  errors.technicianName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.technicianName && (
                <div className='text-red-500 text-sm mt-1'>
                  {errors.technicianName.message}
                </div>
              )}
            </div>
          </div>

          {/* Additional Comments Field */}
          <div>
            <label
              htmlFor='additionalComments'
              className='block text-sm font-medium text-gray-700'
            >
              {t('additionalComments')}
            </label>
            <textarea
              id='additionalComments'
              {...register('additionalComments')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.additionalComments ? 'border-red-500' : 'border-gray-300'
              }`}
              rows='4'
            />
            {errors.additionalComments && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.additionalComments.message}
              </div>
            )}
          </div>

          {/* <button
            type="submit"
            className="bg-orange-250 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
            disabled={submitting || isSubmitting}
          >
            {submitting || isSubmitting ? 'Submitting...' : 'Submit'}
          </button> */}

          {/* Button Container */}
          <div className='flex justify-end '>
            <button
              type='submit'
              className='bg-orange-250 text-white-500 px-8 py-2 shadow hover:bg-blue-700'
              //   className="bg-orange-250 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700"
              disabled={submitting || isSubmitting}
            >
              {submitting || isSubmitting ? 'Submitting...' : t('submit')}
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

export default JobInformationForm
