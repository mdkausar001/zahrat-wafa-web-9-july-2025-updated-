import React, { useState, useMemo } from 'react'

// import react slick
import Slider from 'react-slick'
import Image from 'next/image'
import Stars from '../public/assets/Icon/stars.svg'
import ArrowBack from '../public/assets/Icon/eva_arrow-back-fill.svg'
import ArrowNext from '../public/assets/Icon/eva_arrow-next-fill.svg'
//
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import { useTranslation } from 'next-i18next'

const Testimoni = ({
  listTestimoni = [
    {
      name: 'name1',
      image: '/assets/pf1.jpg',
      city: 'city1',
      country: 'country1',
      rating: '4',
      testimoni: 'testimoni1',
      // "This shop is amazing, it makes my car brand new again, and they fix my minor dent for free. Thanks to the engineer in charge. it was tawuniya accredited workshop actually. I rate 4 Star because of great workmanship and service, above expectation"
    },
    {
      name: 'name2',
      image: '/assets/pf1.jpg',
      city: 'city2',
      country: 'country1',
      rating: '4.3',
      testimoni: 'testimoni2',
      // "Great, professional and high-quality service. Only workshop I can find in the area where I can leave my car and trust the people and the quality of their work. I was expecting to pay more for my parts and problems but Mr. Abdullah helped me get the price down, lowered it and made sure the car was back to health. In short, the best service for the least amount of money, you still can't find anything more satisfying in town. Keep it up, guys! good job!        ",
    },
    {
      name: 'name3',
      image: '/assets/pf1.jpg',
      city: 'city3',
      country: 'country1',
      rating: '4.5',
      testimoni: 'testimoni3',
      // "Frankly, the facility is far away, but the reception is very good, and the appointment is tomorrow with them, I had experienced their services before and would like to tell everyone they are excellent, knowing that I am a subscriber to Dox        ",
    },
    {
      name: 'name4',
      image: '/assets/pf1.jpg',
      city: 'city4',
      country: 'country1',
      rating: '4.7',
      testimoni: 'testimoni4',
      // "I highly recommend it. Classy treatment from Brother Hamza and the rest of the technical staff. Adopt it and you will not regret it        ",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className=''>
          <span className='mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all '></span>
        </a>
      )
    },
    dotsClass: 'slick-dots w-max absolute mt-20  ',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [sliderRef, setSliderRef] = useState(null)
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const { t } = useTranslation()

  return (
    <>
      <div
        id='testimonial'
        className='bg-gradient-to-b mx-auto w-11/12 from-white-300 to-white-500 rounded-lg py-6 lg:px-6'
      >
        <ScrollAnimationWrapper>
          {/* <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed text-center"> */}
          {/* TESTIMONIALS */}
          {/* {t('testimonials')} */}

          {/* </motion.h3> */}
          {/* <motion.p variants={scrollAnimation} className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"> */}
          {/* We have a great review from our clients */}
          {/* {t('testimonialsDescription')} */}

          {/* </motion.p> */}

          <div class='md:mb-20 mb-4'>
            <span class='text-sm text-black-600 font-medium text-center block mb-2'>
              {t('testimonials')}
            </span>
            <h2 class='text-4xl text-center  text-gray-900 '>
              {t('customerSays')}
            </h2>
          </div>
        </ScrollAnimationWrapper>
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          // className="flex items-stretch justify-items-stretchn px-10 mx-2"
          className='flex items-stretch justify-items-stretch px-2 md:px-10  md:mx-2'
        >
          {listTestimoni.map((listTestimonis, index) => (
            <div className='md:px-3 px-1 flex items-stretch' key={index}>
              <div className='border-2 border-orange-250  hover:border-orange-250  transition-all rounded-lg md:p-8 p-2 flex flex-col'>
                <div className='flex flex-col xl:flex-row w-full items-stretch xl:items-center'>
                  <div className='flex order-2 xl:order-1'>
                    <Image
                      src={listTestimonis.image}
                      height={50}
                      width={50}
                      alt='Icon People'
                    />
                    <div className='flex flex-col ml-2 text-left'>
                      <p className='text-lg text-black-600 capitalize'>
                        {/* {listTestimonis.name} */}
                        {t(listTestimonis.name)}
                      </p>
                      <p className='text-sm text-black-500 capitalize'>
                        {/* {listTestimonis.city} */}
                        {t(listTestimonis.city)},
                        {/* {listTestimonis.country} */}
                        {t(listTestimonis.country)}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-none items-center ml-auto order-1 xl:order-2'>
                    <p className='text-sm'>{listTestimonis.rating}</p>
                    <span className='flex ml-4'>
                      <Stars className='h-4 w-4' />
                    </span>
                  </div>
                </div>
                <p className='mt-5 text-left italic'>
                  “{t(listTestimonis.testimoni)}
                  ”.
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <div className='flex w-full items-center justify-end px-4 md:px-10 mx-2 md:mx-1'>
          <div className='flex flex-none justify-between w-auto mt-14'>
            <div
              className='mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white-500 border-orange-250  border hover:bg-orange-250  hover:text-white-500 transition-all text-orange-250  cursor-pointer'
              onClick={sliderRef?.slickPrev}
            >
              <ArrowBack className='h-6 w-6 ' />
            </div>
            <div
              className='flex items-center justify-center h-14 w-14 rounded-full bg-white-500 border-orange-250  border hover:bg-orange-250  hover:text-white-500 transition-all text-orange-250  cursor-pointer'
              onClick={sliderRef?.slickNext}
            >
              <ArrowNext className='h-6 w-6' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimoni

// 26 august new testimonila

// components/Testimonials.js

// components/Testimonials.js

// import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// // import 'swiper/swiper-bundle.min.css';

// // Array of testimonial data
// const testimonials = [
//   {
//     name: 'Jane D',
//     position: 'CEO',
//     image: 'https://pagedone.io/asset/uploads/1696229969.png',
//     rating: 5, // Assuming full 5 stars rating
//     text: 'The user interface of this pagedone is so intuitive, I was able to start using it without any guidance.',
//   },
//   {
//     name: 'John S',
//     position: 'CTO',
//     image: 'https://pagedone.io/asset/uploads/1696229969.png',
//     rating: 4, // Assuming 4 stars rating
//     text: 'Pagedone has been a game-changer for our company’s productivity. Highly recommend!',
//   },
//   // Add more testimonials as needed
// ];

// const Testimonials = () => {
//   useEffect(() => {
//     // Initialize Swiper
//     new Swiper('.mySwiper', {
//       loop: true,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   }, []);

//   return (
//     <section className="py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
//           <div className="w-full lg:w-2/5">
//             <span className="text-sm text-gray-500 font-medium mb-4 block">Testimonial</span>
//             <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
//               23k+ Customers gave their{' '}
//               <span className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-violet-600">
//                 Feedback
//               </span>
//             </h2>
//             {/* Slider controls */}
//             <div className="flex items-center justify-center lg:justify-start gap-10">
//               <button
//                 id="slider-button-left"
//                 className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
//                 data-carousel-prev
//               >
//                 <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//               <button
//                 id="slider-button-right"
//                 className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-indigo-600"
//                 data-carousel-next
//               >
//                 <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           <div className="w-full lg:w-3/5">
//             {/* Slider wrapper */}
//             <div className="swiper mySwiper">
//               <div className="swiper-wrapper">
//                 {testimonials.map((testimonial, index) => (
//                   <div key={index} className="swiper-slide group bg-white-500 border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
//                     <div className="flex items-center gap-5 mb-5 sm:mb-9">
//                       <img className="rounded-full" src={testimonial.image} alt={`${testimonial.name}'s avatar`} />
//                       <div className="grid gap-1">
//                         <h5 className="text-gray-900 font-medium transition-all duration-500">{testimonial.name}</h5>
//                         <span className="text-sm leading-6 text-gray-500">{testimonial.position}</span>
//                       </div>
//                     </div>
//                     <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
//                       {[...Array(testimonial.rating)].map((_, starIndex) => (
//                         <svg key={starIndex} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path
//                             d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
//                             fill="currentColor"
//                           ></path>
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
//                       {testimonial.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
