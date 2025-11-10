import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'

export default function RamadanPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center md:mt-10 top-2 md:top-0 md:m-4 m-6 sm:max-h-screen
    '
      style={{ zIndex: 9999 }}
    >
      <div
        className=' shadow-lg p-2 md:p-8 max-w-3xl w-full relative md:h-auto'
        style={{
          background: 'linear-gradient(135deg, #e0f2fe, #ffffff, #3b82f6)',
          border: '2px solid #3b82f6',
        }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className='absolute top-2 right-4 text-gray-600 hover:text-gray-900'
        >
          <X size={24} />
        </button>
        <div className='flex flex-col md:flex-row items-center'>
          {/* Left Side: Mobile App Image */}
          <div className='md:w-1/3 flex justify-center py-0 my-0'>
            <img
              src='/app-icon/app1.png'
              alt='Mobile App'
              className='rounded-lg md:h-auto md:w-full h-[320px]'
              quality={100}
            />
          </div>
          {/* Right Side: Text and Download Buttons */}
          <div className='md:w-2/3 text-center md:text-left md:mt-0 md:pl-6'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800'></h2>
            <p className='text-gray-700 md:text-lg text-base'>
              Download our app and track your
              <br /> services easily.
            </p>
            <div className='flex justify-center md:justify-start gap-2 md:mt-4'>
              <a
                href='https://apps.apple.com/in/app/zahrat-wafa/id6739617662'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-base md:text-xl gap-2 md:px-4 px-2 md:py-2 py-1 border border-gray-300  shadow-sm hover:bg-gray-100 transition'
              >
                <img
                  src='/app-icon/App_Store_(iOS).svg'
                  alt='Apple Store'
                  className='md:w-10 md:h-10 w-6 h-6'
                />
                <span className='text-sm md:text-lg'>App Store</span>
              </a>
              <a
                href='https://play.google.com/store/apps/details?id=com.app.zahrat_wafa'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 md:px-4 md:py-2 px-2 py-1 border border-gray-300  shadow-sm hover:bg-gray-100 transition'
              >
                <img
                  src='/app-icon/google.svg'
                  alt='Google Play'
                  className='md:w-10 md:h-10 w-6 h-6'
                />
                <span className='text-sm md:text-lg'>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
