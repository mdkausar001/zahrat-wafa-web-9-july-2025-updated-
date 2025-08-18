import { auth } from '../../config/firebase.config' // adjust path as needed
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from 'firebase/auth'
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

const CarStatusForm = () => {
  const [step, setStep] = useState(1)
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [sentOtp, setSentOtp] = useState('')
  const [error, setError] = useState('')
  const [carStatus, setCarStatus] = useState(null)
  const [countryCode, setCountryCode] = useState('+966')
  const [loading, setLoading] = useState(false)
  const [confirmationResult, setConfirmationResult] = useState(null)
  const authInstance = getAuth()

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      !window.recaptchaVerifier &&
      document.getElementById('recaptcha-container')
    ) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        authInstance,
        'recaptcha-container',
        {
          size: 'invisible',
          callback: (response) => {
            console.log('reCAPTCHA solved:', response)
          },
        }
      )
    }
  }, [authInstance])

  // Web OTP API auto-read
  useEffect(() => {
    if ('OTPCredential' in window) {
      window.addEventListener('DOMContentLoaded', async () => {
        try {
          const content = await navigator.credentials.get({
            otp: { transport: ['sms'] },
            signal: new AbortController().signal,
          })
          if (content && content.code) {
            setOtp(content.code)
            handleVerifyOtp(null, content.code)
          }
        } catch (err) {
          console.warn('Web OTP not supported or user denied')
        }
      })
    }
  }, [])

  const formatPhoneNumber = (code, number) =>
    `${code}${number.replace(/\D/g, '')}`

  const handleNumberChange = (e) => {
    const input = e.target.value.replace(/\D/g, '') // Remove non-digits
    if (input.length <= 11) {
      setMobile(input)
    }
  }

  const handleSendOtp = async (e) => {
    e.preventDefault()
    const cleanNumber = mobile.replace(/\D/g, '')
    if (!/^\d{9,12}$/.test(cleanNumber)) {
      setError('Enter a valid mobile number')
      return
    }
    setError('')
    setLoading(true)

    // 1. Check user exists in your API
    try {
      const response = await fetch(`/api/car-status?mobile=${cleanNumber}`)
      const zohoData = await response.json()
      if (!zohoData.projects || zohoData.projects.length === 0) {
        setError('User not found')
        setLoading(false)
        return
      }
      setCarStatus(zohoData.projects[0])

      // 2. Send OTP using Firebase
      const phoneNumber = formatPhoneNumber(countryCode, mobile)
      const appVerifier = window.recaptchaVerifier
      const confirmation = await signInWithPhoneNumber(
        authInstance,
        phoneNumber,
        appVerifier
      )
      setConfirmationResult(confirmation)
      setStep(2)
      setLoading(false)
    } catch (err) {
      setError('Error sending OTP: ' + (err.message || 'Please try again.'))
      setLoading(false)
      // Reset reCAPTCHA if error
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear()
        window.recaptchaVerifier = null
      }
    }
  }

  const handleVerifyOtp = async (e) => {
    if (e) e.preventDefault()
    const otpCode = code || otp
    setError('')
    if (!confirmationResult) {
      setError('Please request OTP first.')
      return
    }
    try {
      await confirmationResult.confirm(otpCode)
      // OTP verified, show car status
      setStep(3)
    } catch (err) {
      setError('Invalid OTP. Please try again.')
    }
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
                <p className='text-slate-600 text-center mb-2 text-sm md:text-lg'>
                  Enter your mobile number, verify OTP, <br></br>and see your
                  car status instantly.
                </p>
                <form
                  onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}
                  className='w-full space-y-4 px-1'
                >
                  <label className='block text-slate-700 font-semibold '>
                    Mobile Number
                  </label>
                  <div className='flex flex-wrap sm:flex-nowrap items-center gap-2 border border-orange-250 md:py-1 px-2 w-full'>
                    <img
                      src={
                        countryCode === '+966'
                          ? '/assets/form/ksa.png'
                          : '/assets/form/default.png'
                      }
                      alt='flag'
                      style={{ width: 28, height: 18, borderRadius: 1 }}
                    />
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className=' bg-white text-slate-700 outline-none rounded-md min-w-[60px]'
                    >
                      <option value='+966'>+966</option>
                      <option value='+91'>+91</option>
                      <option value='+971'>+971</option>
                      <option value='+44'>+44</option>
                      {/* Add more if needed */}
                    </select>

                    <input
                      type='tel'
                      inputMode='numeric'
                      pattern='[0-9]*'
                      value={mobile}
                      onChange={handleNumberChange}
                      placeholder='5590 34101'
                      className='flex-1 min-w-[120px] w-full px-1 py-2 text-base text-slate-700 outline-none rounded-md'
                      minLength={9}
                      maxLength={9}
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
                            setOtp(e.target.value.replace(/\D/g, ''))
                          }
                          autoComplete='one-time-code'
                          placeholder='Enter OTP'
                          className='w-full px-4 py-2 focus:ring-1 outline-none focus:ring-orange-250 border border-orange-250 text-slate-800 transition'
                          maxLength={6}
                          required
                        />
                      </div>
                    </div>
                  )}

                  {/* Edit Mobile number */}
                  {step === 2 && (
                    <div
                      className='text-slate-700 text-sm cursor-pointer hover:underline'
                      onClick={() => setStep(1)}
                    >
                      Edit Mobile Number
                    </div>
                  )}

                  {/* Error message */}
                  {error && <div className='text-red-500 text-sm'>{error}</div>}
                  <button
                    type='submit'
                    disabled={loading}
                    className={`w-full flex justify-center items-center bg-orange-250 text-white-500 font-bold py-2 shadow-lg transition-all duration-200 transform hover:bg-orange-250 ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      // You can use a spinner here if you want
                      <span className='flex'>
                        <svg
                          className='animate-spin h-5 w-5 mr-2 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8v8z'
                          ></path>
                        </svg>
                        Loading...
                      </span>
                    ) : step === 1 ? (
                      'Send OTP'
                    ) : (
                      'Verify'
                    )}
                  </button>
                </form>
              </>
            )}

            {/* Car status step (step === 3) remains unchanged */}
            {step === 3 && carStatus && (
              <div className='w-full min-h-screen bg-white-500 pb-4'>
                <div className='relative'>
                  <div className='flex justify-center'>
                    <img
                      src='/car-animation.gif'
                      alt='Car'
                      className='w-full object-contain mt-14'
                    />
                  </div>
                  <div className='text-center mt-2'>
                    <div className='text-xl font-bold text-white tracking-wide'>
                      {carStatus.project_name
                        ? carStatus.project_name
                            .substring(0, carStatus.project_name.indexOf('QT-'))
                            .trim()
                        : 'Qt-007259'}
                      <span className='ml-2 px-4 py-1.5 bg-green-500 text-white-500 text-base rounded-full font-semibold align-middle'>
                        {carStatus.status || 'Not Updated'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className='px-2 pb-14'>
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
                        {carStatus.customer_name || 'Dummy Name.'}
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
                        {carStatus.cf_branch || 'Dummy Branch فرع الرياض'}
                      </div>
                    </div>

                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 mb-2'>
                      <div className='flex items-center mb-1'>
                        <FaPhone className='text-blue-400 mr-2 text-lg' />
                        <span className='font-medium text-blue-700'>Phone</span>
                      </div>
                      <div className='text-gray-900 text-base'>
                        +966 {carStatus.cf_user_number || '123456789'}
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
                        {carStatus.cf_vehicle_user || 'DUMMY CAR'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaCarSide className='mr-2' /> Model
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_model || 'DUMMY-XY 300'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaCalendarAlt className='mr-2' /> Make Year
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_make_year || '2025'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaPalette className='mr-2' /> Color
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_color || 'BLACK'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaHashtag className='mr-2' /> Chasis
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_chasis || 'DUMMY-JTJBA4053'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaListOl className='mr-2' /> Parts
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_parts || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaClipboardCheck className='mr-2' /> Claim
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_claim || '1911/12'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegClock className='mr-2' /> ODOmeter
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_odometer || '130705'}
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
                        {carStatus.cf_approval_status || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegCalendarAlt className='mr-2' /> Approved Date
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_date || 'None'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegIdCard className='mr-2' /> Quotes Number
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_quotes_number || 'QT-007259'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaUser className='mr-2' /> Client Source
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_client_source || 'Tawuniya تأمين تعاونية'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaRegDotCircle className='mr-2' /> Days
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_days || '12'}
                      </span>
                    </div>
                    <div className='bg-orange-250 text-white-500 rounded-xl p-3 flex flex-col min-h-[70px]'>
                      <span className='flex items-center text-blue-700 font-medium mb-1 text-sm'>
                        <FaListOl className='mr-2' /> Job Ref
                      </span>
                      <span className='text-gray-900 text-sm'>
                        {carStatus.cf_job_ref || 'ZAH-2327'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <div id='recaptcha-container'></div>
      {/* <Footer /> */}
    </div>
  )
}

export default CarStatusForm
