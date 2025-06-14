import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const CarStatusForm = () => {
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Mobile number submitted: ${mobileNumber}`)
    setMobileNumber('')
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 py-2 px-4'>
      <div className='bg-white-500 rounded w-full max-w-2xl flex flex-col md:flex-row overflow-hidden'>
        {/* Left: Image */}
        <div className='md:w-1/2 w-full flex items-center justify-center bg-gray-100 p-4'>
          <img
            src='./app-icon/app1.png'
            alt='Car Status'
            className='object-cover rounded-lg w-full h-48 md:h-64'
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
              inputClass='w-full px-4 py-4 border border-gray-100 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-250'
              inputStyle={{ width: '100%' }}
              enableSearch={true}
              placeholder='Enter mobile number'
            />
            <div className='flex justify-end space-x-6 mt-4'>
              <button
                type='submit'
                className='px-8 py-2 bg-orange-250 text-white-500 hover:bg-orange-500 '
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CarStatusForm
