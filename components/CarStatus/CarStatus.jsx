import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CarStatus = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Mobile number submitted: ${mobileNumber}`)
    setIsOpen(false)
    setMobileNumber('')
  }

  return (
    <div>
      <button className='bg-orange-250 text-base md:text-md text-white-500 px-6 py-2 border-2 border-orange-250 hover:bg-white-500 hover:text-black-600 transition-all hover:shadow-orange'>
        Car Status
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]'>
          <div className='bg-white-500 rounded-lg p-0 w-10/12 max-w-2xl shadow-lg flex flex-col md:flex-row overflow-hidden'>
            {/* Left: Image */}
            <div className='md:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4'>
              <img
                src='./app-icon/app1.png'
                alt='Car Status'
                className='object-cover rounded-lg w-full'
              />
            </div>
            {/* Right: Form */}
            <div className='md:w-1/2 w-full p-6 flex flex-col justify-center'>
              <h2 className='text-xl font-semibold mb-4'>
                Enter Your Mobile Number
              </h2>
              <form onSubmit={handleSubmit}>
                <PhoneInput
                  country={'auto'}
                  value={mobileNumber}
                  onChange={setMobileNumber}
                  inputClass='w-full px-4 py-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-250'
                  inputStyle={{ width: '100%' }}
                  enableSearch={true}
                  placeholder='Enter mobile number'
                  // The flag and country code are shown by default
                  // Auto country detection uses ipinfo.io by default
                />
                <div className='flex justify-end space-x-4 mt-4'>
                  <button
                    type='button'
                    onClick={() => setIsOpen(false)}
                    className='px-4 py-2 border-2 border-orange-250 text-orange-250 bg-gray-300 hover:bg-orange-250 hover:text-white-500'
                  >
                    Cancel
                  </button>
                  <button
                    type='submit'
                    className='px-6 py-2 bg-orange-250 text-white-500 hover:bg-orange-500'
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CarStatus
