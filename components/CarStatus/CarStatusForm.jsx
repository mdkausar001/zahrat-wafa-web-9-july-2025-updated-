import React, { useState } from 'react'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import {
  FaUser,
  FaMapMarkerAlt,
  FaPhone,
  FaCarSide,
  FaCalendarAlt,
  FaPalette,
  FaHashtag,
  FaListOl,
  FaClipboardCheck,
  FaRegClock,
  FaClipboardList,
  FaRegCalendarAlt,
  FaUserCircle,
  FaRegIdCard,
  FaRegDotCircle,
} from 'react-icons/fa'
import PhoneInput from '../PhoneInputWrapper'

const mockCarStatus = {
  model: 'Toyota Camry',
  plate: 'XYZ 1234',
  status: 'Ready for Pickup',
  serviceDate: 'October 20, 2023',
  location: 'Dubai, UAE',
}

const CarStatusForm = () => {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [sentOtp, setSentOtp] = useState('')
  const [error, setError] = useState('')
  const [carStatus, setCarStatus] = useState(null)

  const handleSendOtp = (e) => {
    e.preventDefault()
    if (!/^\d{10,15}$/.test(mobile)) {
      setError('Enter a valid mobile number')
      return
    }
    setError('')
    const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString()
    setSentOtp(generatedOtp)
    alert(`OTP sent: ${generatedOtp}`)
    setStep(2)
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault()
    if (otp !== sentOtp) {
      setError('Invalid OTP')
      return
    }
    setError('')
    setCarStatus(mockCarStatus)
    setStep(3)
  }

  return (
    <div className='min-h-screen flex flex-col bg-gray-50'>
      {/* <Header /> */}

      <main className='flex-grow flex items-center justify-center md:px-4 px-2 py-4'>
        <div className='w-full max-w-md relative'>
          {/* Glassmorphism Card */}
          <div className='backdrop-blur-xl bg-white-500 rounded-2xl shadow-2xl md:p-8 flex flex-col items-center'>
            {/* Form & Hero only on step 1 and 2 */}
            {(step === 1 || step === 2) && (
              <>
                {/* Hero Car Illustration */}
                <div className='w-full flex justify-center mb-2'>
                  <img
                    src='/car-animation.gif'
                    alt='Car'
                    className='w-72 object-cover  md:mt-10'
                  />
                </div>
                <h1 className='text-2xl font-extrabold text-slate-800 text-center tracking-tight drop-shadow'>
                  Check Your Car Status
                </h1>
                <p className='text-slate-600 text-center mb-4 text-sm md:text-lg'>
                  Enter your mobile number, verify OTP, and see your car status
                  instantly.
                </p>
                <form
                  onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
                  className='w-full space-y-4 px-1'
                >
                  {/* <div className='mb-4 w-full'> */}
                  <label className='block text-slate-700 font-semibold mb-2'>
                    Mobile Number
                  </label>
                  <PhoneInput
                    country={'sa'}
                    value={mobile}
                    onChange={setMobile}
                    inputClass='!w-full !pr-4 !py-3 !text-xl !border !border-orange-250 !bg-white-500 !text-gray-900 transition'
                    buttonClass='!bg-white'
                    containerClass='!w-full'
                    inputProps={{
                      name: 'mobile',
                      required: true,
                      disabled: step === 2,
                    }}
                    enableSearch
                  />
                  {/* </div> */}
                  {step === 2 && (
                    <div>
                      <label className='block text-gray-700 font-semibold mb-1'>
                        OTP Verification
                      </label>
                      <div className='relative'>
                        <input
                          type='text'
                          value={otp}
                          onChange={(e) =>
                            setOtp(e.target.value.replace(/\D/, ''))
                          }
                          placeholder='Enter OTP'
                          className='w-full px-4 py-2 focus:ring-1 focus:ring-orange-250 border border-orange-250 transition'
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  )}
                  <button
                    type='submit'
                    className='w-full flex justify-center items-center bg-orange-250 text-white-500 font-bold py-2 shadow-lg transition-all duration-200 transform hover:scale-105'
                  >
                    {step === 1 ? 'Send OTP' : 'Verify'}
                  </button>
                  {step === 2 && (
                    <div
                      className='text-yellow-700 text-sm mt-2 cursor-pointer hover:underline'
                      onClick={() => setStep(1)}
                    >
                      Edit Mobile Number
                    </div>
                  )}
                  {error && (
                    <div className='text-red-500 mt-2 text-sm'>{error}</div>
                  )}
                </form>
              </>
            )}

            {step === 3 && carStatus && (
              <div className='w-full min-h-screen bg-white-500 pb-20'>
                {/* Top Red Gradient & Car Illustration */}
                <div className=' pb-4 relative'>
                  <div className='flex justify-center'>
                    <img
                      src='/car-animation.gif'
                      alt='Car'
                      className='w-56 object-contain mt-14'
                    />
                  </div>
                  <div className='text-center mt-2'>
                    <div className='text-xl font-bold text-white tracking-wide'>
                      6126 Rrd {carStatus.quotesNumber || 'Qt-007259'}
                      <span className='ml-2 px-2 py-1 bg-green-500 text-white-100 text-xs rounded-full font-semibold align-middle'>
                        {carStatus.statusBadge || 'Not Updated'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className='px-2 pb-14'>
                  {/* Description */}
                  {/* <div className='font-semibold text-gray-700 mb-1'>
                    Description
                  </div> */}
                  <div className='mb-3 text-gray-500 text-sm'></div>

                  {/* Customer Details */}
                  <div className='font-semibold text-gray-700 mb-2'>
                    Customer Details
                  </div>
                  <div className='space-y-3 mb-4'>
                    <div className='bg-orange-250 text-white-500 block rounded-xl p-3 mb-2'>
                      <div className='flex items-center mb-1 '>
                        <FaUser className='text-blue-400 mr-2 text-lg' />
                        <span className='font-medium text-blue-700'>Name</span>
                      </div>
                      <div className='text-gray-900 text-base '>
                        {carStatus.customerName || 'Tawuniya Cooperative.'}
                      </div>
                    </div>

                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 mb-2'>
                      <div className='flex items-center mb-1'>
                        <FaMapMarkerAlt className='text-blue-400 mr-2 text-lg' />
                        <span className='font-medium text-blue-700'>
                          Location
                        </span>
                      </div>
                      <div className='text-gray-900 text-base'>
                        {carStatus.customerLocation ||
                          'Riyadh Branch فرع الرياض'}
                      </div>
                    </div>

                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 mb-2'>
                      <div className='flex items-center mb-1'>
                        <FaPhone className='text-blue-400 mr-2 text-lg' />
                        <span className='font-medium text-blue-700'>Phone</span>
                      </div>
                      <div className='text-gray-900 text-base'>
                        {carStatus.customerPhone || '555003398'}
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className='font-semibold text-gray-700 mb-2'>
                    Vehicle Details
                  </div>
                  <div className='grid grid-cols-2 gap-2 mb-4'>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaUserCircle className='mr-2' /> Vehicle user
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.vehicleUser || 'MOUDI ALI MOHAMMED HARTHY'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaCarSide className='mr-2' /> Model
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.model || 'LEXUS-NX 300'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaCalendarAlt className='mr-2' /> Make Year
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.makeYear || '2020'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaPalette className='mr-2' /> Color
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.color || 'BLACK'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaHashtag className='mr-2' /> Chasis
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.chasis || 'JTJBARBZ5L2224053'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaListOl className='mr-2' /> Parts
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.parts || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaClipboardCheck className='mr-2' /> Claim
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.claim || '19111842/12/5463295'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegClock className='mr-2' /> ODOmeter
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.odometer || '130705'}
                      </span>
                    </div>
                  </div>

                  {/* Other Details */}
                  <div className='font-semibold text-slate-700 mb-2'>
                    Other Details
                  </div>
                  <div className='grid grid-cols-2 gap-2 mb-4'>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaClipboardList className='mr-2' /> Approval Status
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.approvalStatus || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegCalendarAlt className='mr-2' /> Approved Date
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.approvedDate || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegIdCard className='mr-2' /> Quotes Number
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.quotesNumber || 'QT-007259'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaUser className='mr-2' /> Client Source
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.clientSource || 'Tawuniya تأمين تعاونية'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegDotCircle className='mr-2' /> Days
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.days || '12'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaListOl className='mr-2' /> Job Ref
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.jobRef || 'ZAH-2327'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default CarStatusForm
