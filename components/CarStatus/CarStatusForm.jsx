import React, { useState } from 'react'
import { FaCar, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const mockCarStatus = {
  model: 'Toyota Camry',
  plate: 'XYZ 1234',
  status: 'Ready for Pickup',
  serviceDate: 'October 20, 2023',
  location: 'Dubai, UAE',
}

const Header = () => (
  <header className='w-full bg-white shadow-sm sticky'>
    <div className='max-w-2xl mx-auto flex items-center justify-between px-4 py-3 gap-2'>
      <div className='flex gap-2'>
        <FaCar className='text-orange-250 text-2xl' />
        <span className='font-bold text-orange-250 text-lg'>Zahrat Wafa</span>
      </div>
      <span className='ml-2 text-gray-700 font-semibold'>Car Status</span>
    </div>
  </header>
)

const Footer = () => (
  <footer className='w-full bg-white-500 shadow-t mt-8'>
    <div className='max-w-2xl mx-auto px-4 py-6 flex flex-col items-center'>
      <div className='text-gray-700 font-medium mb-1'>Contact Support</div>
      <div className='text-lg font-bold text-gray-900 mb-1'>+1 234 567 890</div>

      <div className='flex space-x-4 mt-2'>
        <a href='#' className='text-gray-400 hover:text-yellow-600 transition'>
          <FaTwitter />
        </a>
        <a href='#' className='text-gray-400 hover:text-yellow-600 transition'>
          <FaFacebook />
        </a>
        <a href='#' className='text-gray-400 hover:text-yellow-600 transition'>
          <FaInstagram />
        </a>
      </div>
      <div className='text-xs text-gray-400 mt-4'>
        &copy; 2025 Zahrat Wafa Car Status. All rights reserved.
      </div>
    </div>
  </footer>
)

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
      <Header />

      <main className='flex-grow flex items-center justify-center px-2'>
        <div className='w-full max-w-md md:max-w-lg lg:max-w-xl bg-white p-4 sm:p-6 md:p-8'>
          {(step === 1 || step === 2) && (
            <form onSubmit={step === 1 ? handleSendOtp : handleVerifyOtp}>
              <label className='block text-gray-700 font-medium my-4'>
                Enter Mobile Number
              </label>
              <input
                type='tel'
                value={mobile}
                onChange={(e) => setMobile(e.target.value.replace(/\D/, ''))}
                placeholder='Mobile Number'
                className='w-full px-4 py-2 border border-orange-250  bg-gray-50 text-gray-900 transition mb-4'
                maxLength={15}
                required
                disabled={step === 2}
              />

              {step === 2 && (
                <>
                  <label className='block text-gray-700 font-medium mb-1'>
                    OTP Verification
                  </label>
                  <input
                    type='text'
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/, ''))}
                    placeholder='Enter OTP'
                    className='w-full px-4 py-2 border border-orange-250  text-gray-900 transition mb-4'
                    maxLength={4}
                    required
                  />
                </>
              )}

              <button
                type='submit'
                className='w-full flex justify-center my-1 items-center bg-orange-250 text-white-500 mt-4 hover:bg-red-250  font-semibold py-2  transition duration-100 shadow'
              >
                {step === 1 ? 'Send OTP' : 'Verify'}
              </button>
              {step === 2 && (
                <div
                  className='text-orange-600 text-sm mt-2 cursor-pointer hover:underline'
                  onClick={() => setStep(1)}
                >
                  Edit Mobile Number
                </div>
              )}
              {error && (
                <div className='text-red-500 mt-2 text-sm'>{error}</div>
              )}
            </form>
          )}

          {step === 3 && carStatus && (
            <div>
              <div className='flex flex-col items-center mb-4'>
                <img
                  src='https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278_1280.jpg'
                  alt='Car'
                  className='w-28 h-20 object-cover mb-2'
                />
                <div className='text-lg font-semibold text-gray-800 mb-1'>
                  Car Status:{' '}
                  <span className='text-green-600'>{carStatus.status}</span>
                </div>
              </div>
              <div className='bg-gray-100  p-4 text-gray-700 mb-3'>
                <div>
                  <span className='font-medium'>Model:</span> {carStatus.model}
                </div>
                <div>
                  <span className='font-medium'>Plate Number:</span>{' '}
                  {carStatus.plate}
                </div>
                <div>
                  <span className='font-medium'>Service Date:</span>{' '}
                  {carStatus.serviceDate}
                </div>
                <div>
                  <span className='font-medium'>Location:</span>{' '}
                  {carStatus.location}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <div className='flex items-center justify-center'>
        <a href='#' className='text-yellow-600 hover:underline mb-2'>
          Go to Homepage
        </a>
      </div>
      <Footer />
    </div>
  )
}

export default CarStatusForm
