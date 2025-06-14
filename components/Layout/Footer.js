import React from 'react'
import Facebook from '../../public/assets/Icon/facebook.svg'
import Instagram from '../../public/assets/Icon/instagram.svg'
import Logo from '../../public/assets/zahra/logo.png'
import Snp from '../../public/assets/Icon/snp.svg'
import TikTok from '../../public/assets/Icon/Tik.svg'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { IconContext } from 'react-icons'
import { FaWhatsappSquare } from 'react-icons/fa'
import Link from 'next/link'

//
import FooterCard from './footerCard'
import Footer2 from '../TermsandCond'
//
const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className='bg-black-600 pt-44 pb-10 sm:pb-4'>
        {/* <div id="testimonial"       className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14 mx-2 lg:px-4" */}

        <div className=' w-full mx-auto px-6 sm:px-8 lg:px-16 grid sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4'>
          {/* <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4"> */}
          <div className='row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start '>
            {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
            <Image
              src={Logo}
              width={100}
              height={60}
              alt='Picture of the author'
            />
            <p
              className='
          mb-4  
           text-white-500  text-s font-light tracking-wider 
          '
            >
              <strong className='font-medium'>
                {/* Zahrat Al Wafa */}
                {t('companyName')}
              </strong>
              <br />

              {t('slogan')}
              {/* Your trusted partner to perform any car service or repairs. */}
            </p>
            <div className='flex w-full mt-2 mb-8 -mx-2'>
              {/* <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div> */}

              {/* <div className="flex"> */}
              <a
                href='https://www.facebook.com/ZAWAACO/'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'
              >
                <Facebook className='h-6 w-6' />
              </a>
              <a
                href='https://www.tiktok.com/@zawaaco'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'
              >
                <TikTok className='h-6 w-6' />
              </a>
              <a
                href='https://www.instagram.com/zawaaco/'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'
              >
                <Instagram className='h-6 w-6' />
              </a>
              <a
                href='https://snapchat.com/t/CaoGYsQv'
                target='_blank'
                rel='noopener noreferrer'
                className='mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md'
              >
                <Snp className='h-6 w-6' />
              </a>
              {/* </div> */}
            </div>
            {/* <p className="text-center text-white-500  text-xs font-light tracking-wider uppercase"> */}

            <p
              style={{
                backgroundColor: '#07379a', // Tailwind's blue-500 color
                color: 'white',
                fontSize: '0.75rem', // Tailwind's text-xs
                fontWeight: '300', // Tailwind's font-light
                letterSpacing: '0.05em', // Tailwind's tracking-wider
                textTransform: 'uppercase', // Tailwind's uppercase
                padding: '0.5rem 1rem', // Tailwind's py-2 px-4
                borderRadius: '0.375rem', // Tailwind's rounded
                boxShadow:
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Tailwind's shadow-lg
                display: 'inline-block',
              }}
              className='text-white-500 text-xs font-light tracking-wider uppercase '
            >
              ©{new Date().getFullYear()} - {t('copyright')}
            </p>
          </div>
          <div className=' row-span-2 sm:col-span-2 sm:col-start-6 sm:col-end-8 flex flex-col'>
            <p className='text-white-500 mb-4 font-medium text-xl'>Services</p>
            <ul className='text-white-100 '>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* Periodic Maintainence */}
                {t('servicesf.s1')}{' '}
              </li>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* General Repairs */} {t('servicesf.s2')}
              </li>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* Denting & Painting */}
                {t('servicesf.s3')}{' '}
              </li>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* Wax & Polish */}
                {t('servicesf.s4')}{' '}
              </li>
              {/* <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              Countries{" "}
            </li>
            <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              Blog{" "}
            </li> */}
            </ul>
          </div>
          <div className='row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col'>
            <p className='text-white-500 mb-4 font-medium text-xl'>Address</p>
            <ul className='text-white-100 space-y-4'>
              <div className='flex items-center'>
                <a href='https://maps.app.goo.gl/c1t4awAMPgb2jZNDA'>
                  <li className='pr-4 hover:text-orange-250 cursor-pointer transition-all'>
                    {t('branches.jeddah')}{' '}
                  </li>
                </a>

                <a href='https://wa.me/966560608889?text=Hi%20show%20your%20service%20in%20Website%20I need%20more%20info'>
                  <IconContext.Provider
                    value={{ color: 'green', className: 'global-class-name' }}
                  >
                    {/* <div> */}
                    <div
                    // class="flex items-center justify-center h-full"
                    >
                      <FaWhatsappSquare size={50} />
                    </div>
                  </IconContext.Provider>
                </a>
              </div>

              <div className='flex items-center'>
                <a href='https://maps.app.goo.gl/twBWo8pqbh4sZBBMA'>
                  <li className='pr-4 hover:text-orange-250 cursor-pointer transition-all'>
                    {t('branches.riyadh')}{' '}
                  </li>{' '}
                </a>
                <a href='https://wa.me/966554164045?text=Hi%20show%20your%20service%20in%20Website%20I need%20more%20info'>
                  <IconContext.Provider
                    value={{ color: 'green', className: 'global-class-name' }}
                  >
                    {/* <div> */}
                    <div
                    // class="flex items-center justify-center h-full"
                    >
                      <FaWhatsappSquare size={50} />
                    </div>
                  </IconContext.Provider>
                </a>
              </div>

              {/* <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
            Riyadh branch{" "}
            </li>
            <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              Terms of Service{" "}
            </li> */}
            </ul>
          </div>
          {/* <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col"> */}
          <div className='row-span-2 sm:col-span-2 sm:col-start-13 sm:col-end-13 flex flex-col w-full'>
            <p className='text-white-500 mb-4 font-medium text-xl'>Contact</p>
            <ul className='text-white-100'>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* Zahrat Al Wafa Alarabia Company Jeddah شركة زهرة الوفاء العريبية جده{" "} */}

                {t('contact.companyNameArabic')}
              </li>
              {/* <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
            jeddah@zahrat-wafa.com{" "}
            </li> */}
              {/* <li className="my-2 hover:text-orange-250 cursor-pointer transition-all">
              <a href="mailto:jeddah@zahrat-wafa.com" className="hover:text-orange-250 transition-all" 
              // style={{ whiteSpace: 'nowrap' }}
              >
                jeddah@zahrat-wafa.com
              </a>
            </li> */}
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                <a
                  href='mailto:jeddah@zahrat-wafa.com'
                  className='hover:text-orange-250 transition-all inline-block lg:inline'
                >
                  jeddah@zahrat-wafa.com
                </a>
              </li>

              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                {/* +966 560608889 */}
                <a href='tel:+966560608889' className='block'>
                  {/* +966 560608889 */}
                  {t('contact.jeddahPhone')}
                </a>
              </li>
              <li className='my-2 hover:text-orange-250 cursor-pointer transition-all'>
                UAN NO: 920013239{' '}
              </li>
              <Link href='/feedback'>
                <li className='my-2 hover:text-orange-500 text-blue-600 cursor-pointer transition-all text-lg'>
                  📝 {t('Feedback')}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <FooterCard />
      <Footer2 />
    </>
  )
}

export default Footer
