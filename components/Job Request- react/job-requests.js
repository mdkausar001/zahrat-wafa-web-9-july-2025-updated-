import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next' // Assuming you're using react-i18next for translation
import Image from 'next/image'

const JobRequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()
  const { t } = useTranslation() // for translation
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [supportingDocuments, setSupportingDocuments] = useState(null)

  const handleFileChange = (e) => {
    setSupportingDocuments(e.target.files[0])
  }

  const [fuelLevel, setFuelLevel] = useState('1/2')

  const getNeedleRotation = () => {
    switch (fuelLevel) {
      case 'E':
        return -105 // Position for Empty
      case '1/4':
        return -90 // Position for 1/4
      case '1/2':
        return 0 // Position for Half-full
      case '3/4':
        return 0 // Position for 3/4
      case 'F':
        return 105 // Position for Full
      default:
        return 0
    }
  }
  // Function to handle fuel level click
  const handleFuelChange = (level) => {
    setFuelLevel(level)
  }

  //

  // Function to handle touch movement
  const handleTouchMove = (event) => {
    const touch = event.touches[0]
    const gaugeRect = document
      .getElementById('fuel-gauge')
      .getBoundingClientRect()

    const centerX = gaugeRect.left + gaugeRect.width / 2
    const centerY = gaugeRect.top + gaugeRect.height / 2

    const touchX = touch.clientX - centerX
    const touchY = touch.clientY - centerY

    const angle = Math.atan2(touchY, touchX) * (180 / Math.PI) + 90 // Convert to degrees

    if (angle <= -90 && angle >= -135) {
      setFuelLevel('E') // Empty
    } else if (angle < -45 && angle > -90) {
      setFuelLevel('1/4') // 1/4
    } else if (angle <= -45 && angle > 0) {
      setFuelLevel('1/2') // Half
    } else if (angle > 0 && angle < 45) {
      setFuelLevel('3/4') // 3/4
    } else {
      setFuelLevel('F') // Full
    }
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from(
    { length: currentYear - 1980 + 1 },
    (_, index) => currentYear - index
  ) // Years from 1980 to current year

  const onSubmit = async (data) => {
    try {
      // Send the form data to your API
      // console.log("new job equest-data",data)
      // const formData = {
      //   ...data, // This contains the other form data like fullName, email, etc.
      // fuelLevel
      // , // Add the fuel level from state
      // };
      // console.log("new job request data:", formData);

      const formData = {
        ...data,
        fuelLevel: fuelLevel, // Explicitly add fuelLevel
        supportingDocuments: supportingDocuments,
        form: 'jobrequest',
      }

      // Log the complete formData to the console
      console.log('new job request data:', formData)

      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }), // Send formData in body
      })
      // const response = await fetch('/api/submitForm', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   // body: JSON.stringify(data),
      //   body: JSON.stringify({ formData: { ...data,fuelLevel :fuelLevel, form: "jobrequest" } }),

      // });

      if (response.ok) {
        // Show the success popup if the submission is successful
        setShowSuccessPopup(true)
      } else {
        console.error('Error submitting the form', response.statusText)
      }
    } catch (error) {
      console.error('Error submitting the form', error)
    }
  }

  return (
    // <div className="max-w-md mx-auto mt-10">
    //   <h2 className="text-2xl font-semibold text-center">{t('jobRequest')}</h2>

    <div className='bg-gray min-h-screen flex items-center justify-center p-4'>
      <div className='bg-gray-100 p-10 rounded w-full max-w-2xl'>
        <div className='flex items-center mb-8'>
          <Image
            src='/assets/form/jobinfo.gif'
            alt='Car Service Icon'
            width={48}
            height={48}
            className='mr-4'
          />
          <h1 className='text-center text-gray-900 text-3xl font-semibold tracking-tight'>
            {/* {t('jobInformationForm')} */}
            New Job Request
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='mt-6 space-y-6'>
          {/* Full Name Field */}
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
              {...register('fullName', { required: t('fullNameRequired') })}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.fullName && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.fullName.message}
              </div>
            )}
          </div>

          {/* Email Field */}
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
              {...register('email', { required: t('emailRequired') })}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
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
              {t('contactNumber')} *
            </label>
            <div className='flex'>
              <span className='flex items-center px-3 border rounded-l-md bg-gray-200 text-gray-700'>
                +966
              </span>
              <input
                type='tel'
                id='contactNumber'
                {...register('contactNumber', {
                  required: t('contactNumberRequired'),
                })}
                className={`mt-1 block w-full px-4 py-3 border rounded-r-md shadow-sm text-gray-900 ${
                  errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='Enter your contact number'
              />
            </div>
            {errors.contactNumber && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.contactNumber.message}
              </div>
            )}
          </div>

          {/* Plate Number Field */}
          <div>
            <label
              htmlFor='plateNumber'
              className='block text-sm font-medium text-gray-700'
            >
              {t('plateNumber')}
            </label>
            <input
              type='text'
              id='plateNumber'
              {...register('plateNumber')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.plateNumber ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.plateNumber && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.plateNumber.message}
              </div>
            )}
          </div>

          {/* Service Required Field */}
          <div>
            <label
              htmlFor='serviceRequired'
              className='block text-sm font-medium text-gray-700'
            >
              {t('serviceRequired')} *
            </label>
            <select
              id='serviceRequired'
              {...register('serviceRequired', {
                required: t('serviceRequiredRequired'),
              })}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.serviceRequired ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value=''>{t('selectServiceRequired')}</option>
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
            {errors.serviceRequired && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.serviceRequired.message}
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
            />
            {errors.carModel && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.carModel.message}
              </div>
            )}
          </div>

          {/* Claim No Field */}
          <div>
            <label
              htmlFor='claimNo'
              className='block text-sm font-medium text-gray-700'
            >
              {t('claimNo')}
            </label>
            <input
              type='text'
              id='claimNo'
              {...register('claimNo')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.claimNo ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.claimNo && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.claimNo.message}
              </div>
            )}
          </div>

          {/* Chassis Field */}
          <div>
            <label
              htmlFor='chassis'
              className='block text-sm font-medium text-gray-700'
            >
              {t('chassis')}
            </label>
            <input
              type='text'
              id='chassis'
              {...register('chassis')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.chassis ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.chassis && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.chassis.message}
              </div>
            )}
          </div>

          {/* Color Field */}
          <div>
            <label
              htmlFor='color'
              className='block text-sm font-medium text-gray-700'
            >
              {t('color')}
            </label>
            <input
              type='text'
              id='color'
              {...register('color')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.color ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.color && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.color.message}
              </div>
            )}
          </div>

          {/* Odometer Field */}
          <div>
            <label
              htmlFor='odometer'
              className='block text-sm font-medium text-gray-700'
            >
              {t('odometer')}
            </label>
            <input
              type='number'
              id='odometer'
              {...register('odometer')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.odometer ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.odometer && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.odometer.message}
              </div>
            )}
          </div>

          {/* Vehicle User Field */}
          <div>
            <label
              htmlFor='vehicleUser'
              className='block text-sm font-medium text-gray-700'
            >
              {t('vehicleUser')}
            </label>
            <input
              type='text'
              id='vehicleUser'
              {...register('vehicleUser')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.vehicleUser ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.vehicleUser && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.vehicleUser.message}
              </div>
            )}
          </div>

          {/* Client Source Field */}
          <div>
            <label
              htmlFor='clientSource'
              className='block text-sm font-medium text-gray-700'
            >
              {t('clientSource')} *
            </label>
            <select
              id='clientSource'
              {...register('clientSource', {
                required: t('clientSourceRequired'),
              })}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.clientSource ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value=''>{t('selectClientSource')}</option>
              <option value='Tawuniya'>{t('tawuniya')}</option>
              <option value='Al Sagar'>{t('alSagar')}</option>
              <option value='Najm'>{t('najm')}</option>
              <option value='UMA'>{t('uma')}</option>
              <option value='Special'>{t('special')}</option>
              <option value='Other'>{t('other')}</option>
            </select>
            {errors.clientSource && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.clientSource.message}
              </div>
            )}
          </div>

          {/* Days Field */}
          <div>
            <label
              htmlFor='days'
              className='block text-sm font-medium text-gray-700'
            >
              {t('days')}
            </label>
            <input
              type='number'
              id='days'
              {...register('days')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.days ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.days && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.days.message}
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
            >
              <option value=''>{t('selectCarMakeYear')}</option>
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

          {/* Description of the Issue Field */}
          <div>
            <label
              htmlFor='issueDescription'
              className='block text-sm font-medium text-gray-700'
            >
              {t('descriptionOfIssue')}
            </label>
            <textarea
              id='issueDescription'
              {...register('issueDescription')}
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
                errors.issueDescription ? 'border-red-500' : 'border-gray-300'
              }`}
              rows='3'
              placeholder={t('describeYourIssue')}
            />
            {errors.issueDescription && (
              <div className='text-red-500 text-sm mt-1'>
                {errors.issueDescription.message}
              </div>
            )}
          </div>

          {/* Preferred Service Date Field */}
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
              className={`mt-1 block w-full px-4 py-3 border rounded-md shadow-sm text-gray-900 ${
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

          {/* Upload Supporting Documents/Images Field */}

          {/* Upload Supporting Documents/Images Field */}
          {/* <div>
  <label htmlFor="supportingDocuments" className="block text-sm font-medium text-gray-700">{t('uploadSupportingDocuments')}</label>
  <input
    type="file"
    id="supportingDocuments"
    accept="image/*,application/pdf" // Allows only image and PDF file uploads
    {...register('supportingDocuments')}
    className={`mt-1 block w-full text-gray-900 ${errors.supportingDocuments ? 'border-red-500' : 'border-gray-300'}`}
  />
  {errors.supportingDocuments && <div className="text-red-500 text-sm mt-1">{errors.supportingDocuments.message}</div>}
</div> */}

          <div>
            <label
              htmlFor='supportingDocuments'
              className='block text-sm font-medium text-gray-700'
            >
              Upload Supporting Documents
            </label>
            <input
              type='file'
              id='supportingDocuments'
              accept='image/*,application/pdf'
              onChange={handleFileChange}
              className='mt-1 block w-full text-gray-900'
            />
          </div>

          {/* Buttons for changing fuel levels */}

          <div className='flex flex-col items-center justify-center h-screen'>
            {/* Fuel Gauge SVG */}
            <h1 className='text-2xl font-bold font-sans mt-1'>
              Select the Fuel Level
            </h1>
            <div
              id='fuel-gauge'
              className='relative'
              onTouchMove={handleTouchMove}
              style={{ touchAction: 'none' }} // Prevent default touch actions
            >
              <svg width='200' height='200' viewBox='0 0 200 200'>
                {/* Outer Circle */}
                <circle
                  cx='100'
                  cy='100'
                  r='90'
                  stroke='#333'
                  strokeWidth='10'
                  fill='none'
                />

                {/* Labels for E, 1/2, and F */}
                <text
                  x='35'
                  y='120'
                  fill='#000'
                  fontSize='20'
                  fontWeight='bold'
                >
                  E
                </text>
                <text x='90' y='45' fill='#000' fontSize='20' fontWeight='bold'>
                  1/2
                </text>
                <text
                  x='155'
                  y='120'
                  fill='#000'
                  fontSize='20'
                  fontWeight='bold'
                >
                  F
                </text>

                {/* Fuel Icon */}
                <text x='95' y='150' fill='#000' fontSize='18'>
                  ⛽
                </text>

                {/* Needle */}
                <line
                  x1='100'
                  y1='100'
                  x2='100'
                  y2='30'
                  stroke='red'
                  strokeWidth='4'
                  transform={`rotate(${getNeedleRotation()} 100 100)`}
                  strokeLinecap='round'
                />

                {/* Needle Center */}
                <circle cx='100' cy='100' r='6' fill='black' />

                {/* Tick Marks Between E and 1/2, and 1/2 and F */}
                {/* Small tick between E and 1/2 */}
                <line
                  x1='100'
                  y1='20'
                  x2='100'
                  y2='35'
                  stroke='#000'
                  strokeWidth='2'
                  transform='rotate(-22.5 100 100)' // Between E and 1/2
                />
                {/* Small tick between 1/2 and F */}
                <line
                  x1='100'
                  y1='20'
                  x2='100'
                  y2='35'
                  stroke='#000'
                  strokeWidth='2'
                  transform='rotate(22.5 100 100)' // Between 1/2 and F
                />
              </svg>
            </div>

            {/* Display the selected fuel level */}
            <h2 className='mt-1 text-xl font-semibold'>
              Selected: {fuelLevel}-
            </h2>

            {/* Buttons for Fuel Level Selection */}
            <div className=' flex gap-4'>
              <button
                className={`px-4 py-2 bg-red-500 text-white rounded-full ${
                  fuelLevel === 'E' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleFuelChange('E')}
                disabled={fuelLevel === 'E'}
              >
                E-End
              </button>
              <button
                className={`px-4 py-2 bg-yellow-500 text-white rounded-full ${
                  fuelLevel === '1/2' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleFuelChange('1/2')}
                disabled={fuelLevel === '1/2'}
              >
                1/2-Medium
              </button>
              <button
                className={`px-4 py-2 bg-green-500 text-white rounded-full ${
                  fuelLevel === 'F' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => handleFuelChange('F')}
                disabled={fuelLevel === 'F'}
              >
                F-High
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full py-2 px-6 bg-orange-250 text-white rounded shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300'
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </button>
          </div>

          {/* Success Popup */}
          {showSuccessPopup && (
            <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75'>
              <div className='bg-white-500 p-5 rounded shadow-lg text-center'>
                <h3 className='text-lg font-semibold'>{t('success')}</h3>
                <p>{t('formSubmittedSuccessfully')}</p>
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className='mt-4 py-2 px-4 bg-blue-600 text-white rounded'
                >
                  {t('close')}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default JobRequestForm
