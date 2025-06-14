import React, { useMemo } from 'react'
import Image from 'next/image'
import ButtonPrimary from './misc/ButtonPrimary'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import WhatsAppIcon from './whatsapp'
import { useFormPopup } from '../components/FormPopUpContext'
import { useTranslation } from 'next-i18next'
import CountUp from './CountUp'

const Hero = ({
  listUser = [
    {
      name: 'expertTechnicians',
      number: '45',
      icon: '/assets/Icon/sv3.svg',
    },
    {
      name: 'servicedCars',
      number: '35000      ',
      icon: '/assets/Icon/sv2.svg',
    },
    {
      name: 'satisfiedClients',
      number: '2600',
      icon: '/assets/Icon/sv.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const { openPopup } = useFormPopup()
  const { t } = useTranslation()

  return (
    <div className='max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto  ' id='home'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-10 py-4 sm:py-10'
          variants={scrollAnimation}
        >
          <div className=' flex flex-col justify-center items-start row-start-2 sm:row-start-1'>
            <h1 className='text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal'>
              {/* The Most Trusted */}
              <span className='mr-1'>{t('theMostTrusted')}</span>

              <strong>
                <span className='text-orange-250 mr-1'>
                  {/* Car Service */}
                  {t('carService')}
                </span>
              </strong>

              <span className='mx-1'>&amp;</span>

              <strong>
                <span className='text-orange-250 mr-1'>{t('repair')}</span>
              </strong>
              <br />

              <span className='ml-1'>{t('workshop')}</span>
            </h1>

            <p className='text-black-500 mt-4 mb-6'>
              {/* We are the Best Premium Auto Workshop provides quality car care in your city. We’re a team of professionals and highly trained technicians who are passionate about everything that has to do with cars! */}
              {t('description1')}
            </p>
            {/* <ButtonPrimary>Book Now</ButtonPrimary> */}
            {/* <div className="flex flex-col sm:flex-row w-full">
    <div className="flex-1"> */}
            <a
              onClick={() =>
                openPopup(
                  'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Services1/formperma/5XiOnmrh038r-XfsyYmZxfEbrlAw_0uyUeWGuSFwcek'
                )
              }
            >
              <ButtonPrimary>{t('bookNow')}</ButtonPrimary>
            </a>
            {/* </div> */}
            {/* <div className="flex-1">
    <img src="assets/zahra/wts.svg" alt="Zahrat car service" className="h-6 w-40" style={{width:"80px"}} />
    </div>
  </div> */}
          </div>

          <div className='flex w-full'>
            <motion.div className='h-full w-full ' variants={scrollAnimation}>
              <Image
                // src="/assets/zahra/Firstimage.jpg"
                src='/assets/zahra/4services-img/First image .jpg'
                alt='Zahrat alwafa -car services company in saudi arabia'
                quality={100}
                width={380}
                height={380}
                layout='responsive'
                className='rounded-md'
                // src="/assets/zahra/4services-img/First image.jpg"
                // alt="Zahrat alwafa -car services company in saudi arabia"
                // quality={100}
                // layout="fill"
                // objectFit="cover"
                // className="rounded-md"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className='relative w-full flex'>
        <ScrollAnimationWrapper className='rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-5'>
          {listUser.map((listUsers, index) => (
            <motion.div
              className='flex items-center justify-start my-4 sm:justify-center py-4 sm:py-6 w-10/12 px-4 sm:w-auto mx-auto sm:mx-0 '
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className='flex mx-auto w-60  sm:w-auto '>
                {/* <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src={listUsers.icon} className="h-6 w-6" />
                </div> */}
                <div className='flex items-center justify-center bg-orange-250 w-12 h-12 mr-6 rounded-full transition-transform duration-300 hover:scale-105'>
                  <img src={listUsers.icon} className='w-8 h-8' />
                </div>

                <div className='flex flex-col'>
                  <p className='text-xl text-black-600 font-bold'>
                    <CountUp
                      end={parseInt(listUsers.number.replace(/\D/g, ''))}
                    />
                  </p>
                  <p className='text-lg text-orange-250'>{t(listUsers.name)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className='absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0'
          style={{ filter: 'blur(114px)' }}
        ></div>
      </div>
    </div>
  )
}

export default Hero
