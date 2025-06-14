import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBeer } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FcServices } from 'react-icons/fc'
import { MdReviews } from 'react-icons/md'
import { IconContext } from 'react-icons'

import { AiOutlineProduct } from 'react-icons/ai'
import { FcGallery } from 'react-icons/fc'

// Import react scroll
import { Link as LinkScroll } from 'react-scroll'
import ButtonOutline from '../misc/ButtonOutline.'
import LogoVPN from '../../public/assets/Logo.svg'
import Logo from '../../public/assets/zahra/logo.png'
//
import { useFormPopup } from '../FormPopUpContext'
import LanguageSwitcher from '../Arabicswitch/arabic'

import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import BottomNavigation from './bottom-navigation/bottom-navigation/BottomNavigation'
import CarStatus from '../CarStatus/CarStatus'

const Header = () => {
  const [activeLink, setActiveLink] = useState(null)
  const [scrollActive, setScrollActive] = useState(false)
  const { openPopup } = useFormPopup()
  //
  const router = useRouter()
  const { pathname } = router
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const { t } = useTranslation()
  const rightImages = [
    {
      src: '/footer-Bar/2030.jpg',
      alt: 'Another Image',
      width: 70,
      height: 70,
    },
    // { src: '/images/yet-another-image.svg', alt: 'Yet Another Image', width: 100, height: 100 },
    // Add more images for the right column
  ]
  console.log('activeLink', activeLink)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <>
      <header
        className={
          'fixed top-0 w-full z-10 bg-white-500 transition-all ' +
          (scrollActive ? ' shadow-md pt-0' : ' pt-2')
        }
      >
        <nav className='max-w-screen px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4 border-b border-orange-100'>
          <div className='col-start-1 col-end-2 flex items-center'>
            {/* <Logo className="h-8 w-auto" /> */}
            <a href='/'>
              <Image
                src={Logo}
                alt='Zahrat'
                width={120}
                height={70}
                className='md:w-[120px] !md:h-[70px]-w-[80px] min-h-[50px] '
              />
            </a>
          </div>
          <ul className='hidden lg:flex col-start-3 col-end-8 text-black-700 font-medium  items-center  text-lg '>
            {/* <Link href={'/home'}   */}
            <a
              href='/'
              onSetActive={() => {
                setActiveLink('about')
              }}
              className={
                'px-1 py-1 mx-2 cursor-pointer animation-hover inline-block relative text-lg ' +
                (activeLink === 'about'
                  ? ' text-orange-250 animation-active '
                  : ' text-black-500 hover:text-orange-250 a')
              }
            >
              {/* <a href="/"> */}

              {/* <LinkScroll
              activeClass="active"
              // to="about"
              // spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 a")
              }
            >
              {/* Home */}

              {/* {t('home')}
            </LinkScroll> */}

              {t('home')}
            </a>
            {/* </Link> */}
            {/* <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-250 animation-active "
                  : " text-black-500 hover:text-orange-250 ")
              }
            >
              
              feature
            </LinkScroll> */}
            {/* <Link href={'/#services'}>

              <LinkScroll
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("pricing");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "pricing"
                    ? " text-orange-250 animation-active "
                    : " text-black-500 hover:text-orange-250 ")
                }
              >
                {t('services')}
              </LinkScroll>
            </Link> */}
            <Link href={'/#services'}>
              <LinkScroll
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink('pricing')
                }}
                className={
                  'px-1 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                  (activeLink === 'pricing'
                    ? ' text-orange-250 animation-active'
                    : ' text-black-500 hover:text-orange-250 ') +
                  '  text-lg' // Added professional font styles
                }
              >
                {t('services')}
              </LinkScroll>
            </Link>

            <Link href={'/#testimonial'}>
              <LinkScroll
                activeClass='active'
                to='testimonial'
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink('testimoni')
                }}
                className={
                  'px-1 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                  (activeLink === 'testimoni'
                    ? ' text-orange-250 animation-active '
                    : ' text-black-500 hover:text-orange-250 ')
                }
              >
                {/* Testimonial */}
                {t('testimonial')}
              </LinkScroll>
            </Link>
            <Link
              href={'/#servicepartner'}
              onSetActive={() => {
                setActiveLink('servicepartner')
              }}
              className={
                'px-1 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                (activeLink === 'servicepartner'
                  ? ' text-orange-250 animation-active'
                  : ' text-black-500 hover:text-orange-250 ')
              }
            >
              <LinkScroll
                activeClass='active'
                to='servicepartner'
                // spy={true}
                smooth={true}
                // duration={1000}
                onSetActive={() => {
                  setActiveLink('servicepartner')
                }}
                className={
                  'px-1 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                  (activeLink === 'servicepartner'
                    ? ' text-orange-250 animation-active '
                    : ' text-black-500 hover:text-orange-250 ')
                }
              >
                {t('ourServicePartner')}
              </LinkScroll>
            </Link>

            {/* href="/gallery */}
            <Link href='/gallery'>
              <LinkScroll
                activeClass='active'
                to='/gallery'
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink('')
                }}
                className={
                  'px-1 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                  (activeLink === 'client'
                    ? ' text-orange-250 animation-active '
                    : ' text-black-500 hover:text-orange-250 ')
                }
              >
                {t('gallery')}
              </LinkScroll>
            </Link>
            {/* <li className="relative group">
    <button className="px-4 py-2 mx-2 cursor-pointer inline-block relative text-lg">
      Forms
    </button>
    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white-500 border border-gray-300 shadow-lg">
      <li><Link href="/complaints"><a className="block px-4 py-2 text-black hover:bg-gray-100">Complaints Form</a></Link></li>
      <li><Link href="/suggestions-form"><a className="block px-4 py-2 text-black hover:bg-gray-100">Suggestions Form</a></Link></li>
      <li><Link href="/job-request-form"><a className="block px-4 py-2 text-black hover:bg-gray-100">Job Request Form</a></Link></li>
      <li><Link href="/job-information-form"><a className="block px-4 py-2 text-black hover:bg-gray-100">Job Information Form</a></Link></li>
      <li><Link href="/classification-form"><a className="block px-4 py-2 text-black hover:bg-gray-100">Classification Form</a></Link></li>
    </ul>
  </li> */}
            {/* <li className="relative group">
  <button
    className="px-4 py-2 mx-2 cursor-pointer inline-block relative text-lg"
    aria-haspopup="true"
    aria-expanded="false"
  >
    Forms
  </button>
  <ul
    className="absolute left-0 mt-2 hidden group-hover:block bg-white border border-gray-300 shadow-lg transition-opacity duration-300 ease-in-out"
    role="menu"
    aria-labelledby="forms-button"
  >
    <li>
      <Link href="/complaints">
        <a
          className="block px-4 py-2 text-black hover:bg-gray-100"
          role="menuitem"
        >
          Complaints Form
        </a>
      </Link>
    </li>
    <li>
      <Link href="/suggestions-form">
        <a
          className="block px-4 py-2 text-black hover:bg-gray-100"
          role="menuitem"
        >
          Suggestions Form
        </a>
      </Link>
    </li>
    <li>
      <Link href="/job-request-form">
        <a
          className="block px-4 py-2 text-black hover:bg-gray-100"
          role="menuitem"
        >
          Job Request Form
        </a>
      </Link>
    </li>
    <li>
      <Link href="/job-information-form">
        <a
          className="block px-4 py-2 text-black hover:bg-gray-100"
          role="menuitem"
        >
          Job Information Form
        </a>
      </Link>
    </li>
    <li>
      <Link href="/classification-form">
        <a
          className="block px-4 py-2 text-black hover:bg-gray-100"
          role="menuitem"
        >
          Classification Form
        </a>
      </Link>
    </li>
  </ul>
// </li> */}
            {/* // <div className="relative inline-block text-left">
//   <div className="group"> */}
            {/* <button
      type="button"
      className="inline-flex justify-center items-center w-full px-4 py-2 text-1xl font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
    >
Resources      {/* Dropdown arrow */}
            {/* <svg
        className="w-4 h-4 ml-2 -mr-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
      </svg>
    </button> */}

            {/* Dropdown menu */}
            {/* <div
      className="absolute left-0 w-60 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300"
    >
      <div className="py-1">
        <Link href="/complaints">
          <a className="block px-4 py-2 text-sm text-black-600 hover:bg-gray-100">Register a Complaint</a>
        </Link>
        <Link href="/suggestion">
          <a className="block px-4 py-2 text-sm text-black-600 hover:bg-gray-100">Suggest Us</a>
        </Link>
        <Link href="/career">
          <a className="block px-4 py-2 text-sm text-black-600 hover:bg-gray-100">Career</a>
        </Link>
        <Link href="/job-information-form">
          <a className="block px-4 py-2 text-sm text-black-600 hover:bg-gray-100">Job Information Form</a>
        </Link>
        <Link href="/classification">
          <a className="block px-4 py-2 text-sm text-black-600 hover:bg-gray-100">Classification Form</a>
        </Link>
      </div>
    </div> */}
            {/* </div>
</div> */}

            <div className='relative inline-block text-left'>
              <div className='group'>
                <button
                  type='button'
                  className='inline-flex justify-center items-center w-full px-4 py-2 text-lg font-semibold  bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                >
                  {/* Select a Service */}
                  {t('mob_head.s7')}
                  <svg
                    className='w-4 h-4 ml-2 -mr-1'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path fillRule='evenodd' d='M10 12l-5-5h10l-5 5z' />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div className='absolute left-0 w-60 mt-2 origin-top-left bg-white-500 divide-y divide-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out'>
                  <div className='py-1'>
                    <Link href='/job-information'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {' '}
                        {t('mob_head.s1')}
                      </a>
                    </Link>
                    <Link href='/classification'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {t('mob_head.s2')}
                      </a>
                    </Link>
                    <Link href='/complaints'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {t('mob_head.s3')}
                      </a>
                    </Link>
                    <Link href='/suggestion'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {t('mob_head.s4')}
                      </a>
                    </Link>

                    <Link href='/jobrequest'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {t('mob_head.s5')}
                      </a>
                    </Link>
                    <Link href='/career'>
                      <a className='block px-4 py-2 text-sm text-gray-700 hover:bg-orange-250 hover:text-white-500'>
                        {t('mob_head.s6')}
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* <div >
          {rightImages.map((img, index) => (
            <div key={index} >
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="rounded-md" />
            </div>
          ))}


        </div> */}
          </ul>

          <div className='col-start-11 col-end-12 font-medium flex justify-end items-center'>
            <div className=' mx-1 md:mx-4 transition-all'>
              {/* <CarStatus /> */}

              <Link href='/car-status'>
                <button className='relative tracking-wide whitespace-nowrap outline-none capitalize bg-orange-250 hover:bg-orange-500 text-base md:text-md text-white-500 md:px-6 px-4 py-2 md:border-2 border border-orange-250  hover:text-white-500 transition-all hover:shadow-orange '>
                  {/* Status Ping - top right corner */}
                  <span className='absolute -top-2 -right-3 flex  h-5 w-5'>
                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75'></span>
                    <span className='relative inline-flex rounded-full bg-green-500'></span>
                  </span>
                  Car Status
                </button>
              </Link>
            </div>
            <a
              className='hidden md:block'
              onClick={() =>
                openPopup(
                  'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Services1/formperma/5XiOnmrh038r-XfsyYmZxfEbrlAw_0uyUeWGuSFwcek'
                )
              }
            >
              <ButtonOutline>{t('bookNow')}</ButtonOutline>{' '}
            </a>
            <div className='mx-1 md:mx-4'>
              <LanguageSwitcher />
            </div>
            <div className='hidden md:block'>
              {rightImages.map((img, index) => (
                <div key={index}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className=''
                  />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* Mobile Navigation */}
      {/* <nav className="fixed lg:hidden left-0 right-0 z-20 px-0 sm:px-12 shadow-t rtl:px-0 rtl:sm:px-12" style={{ bottom: "-1px" }}> */}
      <BottomNavigation />

      {/* End Mobile Navigation */}
    </>
  )
}

export default Header
