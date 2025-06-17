import { useEffect, useState } from 'react'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'

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
  const [countryCode, setCountryCode] = useState('+91')

  const handleNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '') // Remove non-digits
    if (input.length <= 12) {
      setMobile(input)
    }
  }

  const countryDialMap = {
    SA: '+966',
    IN: '+91',
    AE: '+971',
    US: '+1',
    // Add more as needed
  }

  useEffect(() => {
    const detectCountryCode = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/')
        const data = await res.json()
        const dial = countryDialMap[data.country_code]
        if (dial) {
          setCountryCode(dial)
        }
      } catch (err) {
        console.warn('Could not detect location. Defaulting to +91')
      }
    }

    detectCountryCode()
  }, [])

  const handleSendOtp = (e) => {
    e.preventDefault()
    const cleanNumber = mobile.replace(/\D/g, '')
    if (!/^\d{10,15}$/.test(cleanNumber)) {
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
      <main className='flex-grow flex items-center justify-center md:px-4 px-2 py-4 pb-4'>
        <div className='w-full max-w-md relative'>
          <div className='backdrop-blur-xl bg-white-500 rounded-2xl shadow-2xl md:p-8 flex flex-col items-center'>
            {(step === 1 || step === 2) && (
              <>
                <div className='w-full flex justify-center mb-2'>
                  <img
                    src='/car-animation.gif'
                    alt='Car'
                    className='w-full object-contain md:mt-6 mt-10'
                  />
                </div>
                <h1 className='text-3xl font-extrabold text-slate-700 text-center tracking-tight drop-shadow'>
                  Check Your Car Status
                </h1>
                <p className='text-slate-600 text-center mb-4 text-sm md:text-lg'>
                  Enter your mobile number, verify OTP, <br></br>and see your
                  car status instantly.
                </p>
                <form
                  onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
                  className='w-full space-y-4 px-1'
                >
                  <label className='block text-slate-700 font-semibold mb-2'>
                    Mobile Number
                  </label>
                  <div className='flex flex-wrap sm:flex-nowrap items-center gap-2 border border-orange-250 md:py-1 px-2 w-full'>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className='p-2 bg-white text-slate-800 outline-none rounded-md min-w-[60px]'
                    >
                      <option value='+966'>🇸🇦 +966</option>
                      <option value='+91'>🇮🇳 +91</option>
                      <option value='+971'>🇦🇪 +971</option>
                      {/* Add more if needed */}
                    </select>

                    <input
                      type='tel'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      value={mobile}
                      onChange={handleNumberChange}
                      placeholder='Enter Mobile Number'
                      className='flex-1 min-w-[120px] w-full px-4 py-2 text-base text-slate-800 outline-none rounded-md'
                      minLength={9}
                      maxLength={12}
                      required
                    />
                  </div>

                  {step === 2 && (
                    <div>
                      <label className='block text-slate-700 font-semibold mb-1'>
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
                          className='w-full px-4 py-2 focus:ring-1 outline-none focus:ring-orange-250 border border-orange-250 text-slate-800 transition'
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
                      className='text-slate-700 text-sm mt-2 cursor-pointer hover:underline'
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

            {/* Car status step (step === 3) remains unchanged */}
            {step === 3 && carStatus && (
              <div className='w-full min-h-screen bg-white-500 pb-20'>
                <div className='pb-4 relative'>
                  <div className='flex justify-center'>
                    <img
                      src='/car-animation.gif'
                      alt='Car'
                      className='w-full object-contain mt-14'
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
