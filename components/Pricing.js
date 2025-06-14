// import React, { useMemo } from "react";
// import Image from "next/image";
// import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
// // import Maps from "../public/assets/HugeGlobal.svg";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// const Pricing = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div
//       className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
//       id="pricing"
//     >
//       <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
//         <div className="flex flex-col w-full">
//           <ScrollAnimationWrapper>
//             <motion.h3
//               variants={scrollAnimation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
//             >
//               Choose Your Plan
//             </motion.h3>
//             <motion.p
//               variants={scrollAnimation}
//               className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
//             >
//               Let's choose the package that is best for you and explore it happily
//               and cheerfully.
//             </motion.p>
//           </ScrollAnimationWrapper>
//           <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
//             <ScrollAnimationWrapper className="flex justify-center">
//               <motion.div
//                 variants={scrollAnimation}
//                 className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//                 whileHover={{
//                   scale : 1.1,
//                   transition: {
//                     duration: .2
//                   }
//                 }}
//               >
//                 <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                   <Image
//                     src="/assets/Free.png"
//                     width={145}
//                     height={165}
//                     alt="Free Plan"
//                   />
//                 </div>
//                 <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                   Free Plan
//                 </p>
//                 <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                   <li className="relative check custom-list my-2">
//                     Unlimited Bandwitch
//                   </li>
//                   <li className="relative check custom-list my-2">
//                     Encrypted Connection
//                   </li>
//                   <li className="relative check custom-list my-2">
//                     No Traffic Logs
//                   </li>
//                   <li className="relative check custom-list my-2">
//                     Works on All Devices
//                   </li>
//                 </ul>
//                 <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                   <p className="text-2xl text-black-600 text-center mb-4 ">
//                     Free
//                   </p>
//                   <ButtonOutline>Select</ButtonOutline>
//                 </div>
//               </motion.div>
//             </ScrollAnimationWrapper>
//             <ScrollAnimationWrapper className="flex justify-center">
//               <motion.div
//                 variants={scrollAnimation}
//                 className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//                 whileHover={{
//                   scale : 1.1,
//                   transition: {
//                     duration: .2
//                   }
//                 }}
//               >
//               <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                 <Image
//                   src="/assets/Standard.png"
//                   width={145}
//                   height={165}
//                   alt="Standard Plan"
//                 />
//               </div>
//               <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                 Standard Plan{" "}
//               </p>
//               <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                 <li className="relative check custom-list my-2">
//                   Unlimited Bandwitch
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Encrypted Connection
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   No Traffic Logs
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Works on All Devices
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Connect Anyware{" "}
//                 </li>
//               </ul>
//               <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                 <p className="text-2xl text-black-600 text-center mb-4 ">
//                   $9 <span className="text-black-500">/ mo</span>
//                 </p>
//                 <ButtonOutline>Select</ButtonOutline>
//               </div>
//               </motion.div>
//             </ScrollAnimationWrapper>
//             <ScrollAnimationWrapper className="flex justify-center">
//               <motion.div
//                 variants={scrollAnimation}
//                 className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//                 whileHover={{
//                   scale : 1.1,
//                   transition: {
//                     duration: .2
//                   }
//                 }}
//               >
//               <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                 <Image
//                   src="/assets/Premium.png"
//                   width={145}
//                   height={165}
//                   alt="Premium Plan"
//                 />
//               </div>
//               <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                 Premium Plan{" "}
//               </p>
//               <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
//                 <li className="relative check custom-list my-2">
//                   Unlimited Bandwitch
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Encrypted Connection
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   No Traffic Logs
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Works on All Devices
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Connect Anyware{" "}
//                 </li>
//                 <li className="relative check custom-list my-2">
//                   Get New Features{" "}
//                 </li>
//               </ul>
//               <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                 <p className="text-2xl text-black-600 text-center mb-4 ">
//                   $12 <span className="text-black-500">/ mo</span>
//                 </p>

//                 <ButtonOutline>Select</ButtonOutline>
//               </div>
//               </motion.div>
//             </ScrollAnimationWrapper>
//           </div>
//         </div>
//         <div className="flex flex-col w-full my-16">
//           <ScrollAnimationWrapper>
//             <motion.h3
//               variants={scrollAnimation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
//               Huge Global Network of Fast VPN{" "}
//             </motion.h3>
//             <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
//               See LaslesVPN everywhere to make it easier for you when you move
//               locations.
//             </motion.p>
//           </ScrollAnimationWrapper>
//           {/* <ScrollAnimationWrapper>
//             <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
//               <Maps className="w-full h-auto" />
//             </motion.div>
//           </ScrollAnimationWrapper> */}
//           <ScrollAnimationWrapper>
//             <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
//               {/* <Netflix className="h-18 w-auto" /> */}
//               <img
//                 src="/assets/Icon/amazon.png"
//                 className="h-14 w-auto mt-4 lg:mt-2"
//                 alt=""
//               />
//               <img
//                 src="/assets/Icon/netflix.png"
//                 className="h-14 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/Icon/reddit.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/Icon/discord.png"
//                 className="h-14 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/Icon/spotify.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//             </motion.div>
//           </ScrollAnimationWrapper>
//         </div>
//         <div className="flex flex-col w-full my-16" id="testimoni">
//           <ScrollAnimationWrapper>
//             <motion.h3
//               variants={scrollAnimation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
//               Trusted by Thousands of Happy Customer{" "}
//             </motion.h3>
//             <motion.p
//               variants={scrollAnimation}
//               className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
//             >
//               These are the stories of our customers who have joined us with great
//               pleasure when using this crazy feature.
//             </motion.p>
//           </ScrollAnimationWrapper>
//           <ScrollAnimationWrapper className="w-full flex flex-col py-12">
//             <motion.div variants={scrollAnimation}>
//               <Testimoni />
//             </motion.div>
//           </ScrollAnimationWrapper>
//           <ScrollAnimationWrapper className="relative w-full mt-16">
//             <motion.div variants={scrollAnimation} custom={{duration: 3}}>
//               <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
//                 <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
//                   <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
//                     Subscribe Now for <br /> Get Special Features!
//                   </h5>
//                   <p>Let's subscribe with us and find the fun.</p>
//                 </div>
//                 <ButtonPrimary>Get Started</ButtonPrimary>
//               </div>
//               <div
//                 className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
//                 style={{ filter: "blur(114px)" }}
//                 ></div>
//             </motion.div>
//           </ScrollAnimationWrapper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

// import React, { useMemo } from "react";
// import Image from "next/image";
// import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// const services = [
//   {
//     name: "Regular Service",
//     image: "/assets/RegularService.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     price: "$10",
//   },
//   {
//     name: "BodyWorks",
//     image: "/assets/BodyWorks.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     price: "$20",
//   },
//   {
//     name: "Cleaning & Care",
//     image: "/assets/CleaningCare.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     price: "$15",
//   },
//   {
//     name: "Repair & Fixes",
//     image: "/assets/RepairFixes.png",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     price: "$25",
//   },
// ];

// const Pricing = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
//       <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
//         <div className="flex flex-col w-full">
//           <ScrollAnimationWrapper>
//             <motion.h3 variants={scrollAnimation} className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
//               Choose Your Plan
//             </motion.h3>
//             <motion.p variants={scrollAnimation} className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
//               Let's choose the package that is best for you and explore it happily and cheerfully.
//             </motion.p>
//           </ScrollAnimationWrapper>
//           <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-4 gap-3 lg:gap-10 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
//             {services.map((service, index) => (
//               <ScrollAnimationWrapper key={index} className="flex justify-center">
//                 <motion.div
//                   variants={scrollAnimation}
//                   className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
//                   whileHover={{
//                     scale: 1.1,
//                     transition: {
//                       duration: 0.2
//                     }
//                   }}
//                 >
//                   <div className="p-4 lg:p-0 mt-6 lg:mt-16">
//                     <Image
//                       src={service.image}
//                       width={145}
//                       height={165}
//                       alt={service.name}
//                     />
//                   </div>
//                   <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
//                     {service.name}
//                   </p>
//                   <p className="text-black-500 text-sm mb-4">{service.description}</p>
//                   <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
//                     <p className="text-2xl text-black-600 text-center mb-1">{service.price} <span className="text-black-500">/ mo</span></p>
//                     <ButtonOutline>Select</ButtonOutline>
//                   </div>
//                 </motion.div>
//               </ScrollAnimationWrapper>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import React, { useMemo } from 'react'
import Image from 'next/image'
import Testimoni from './Testimoni'
import ButtonPrimary from './misc/ButtonPrimary'
import ButtonOutline from './misc/ButtonOutline.'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import { useFormPopup } from './FormPopUpContext'
import { useTranslation } from 'next-i18next'

{
  /* <button
onClick={openPopup}
className="bg-blue-500 text-white py-2 px-4 rounded"
>
Submit
</button> */
}

// {t(services.name)}
const services = [
  {
    name: 'regularService',
    // image: "/assets/zahra/services-img1.png",
    image: '/assets/zahra/4services-img/regular.jpg',

    description: 'regularServiceDescription',
    price: '$10',
    iframeSrc:
      'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/RegularService/formperma/exn-QnpIx9KjCzbFBhqJC97VhVQEgh_1U4FGAitRC6s',
  },
  {
    name: 'bodyWorks',
    // image: "/assets/zahra/services-img2.png",
    image: '/assets/zahra/4services-img/Body Works.jpg',

    description: 'bodyWorksDescription',
    price: '$20',
    iframeSrc:
      'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/BodyWorks/formperma/PU7WLejI7qNgIqBjcP47aXZa9Uj_q95usggpjHMI6SY',
  },
  {
    name: 'cleaningCare',
    // image: "/assets/zahra/services-img3.png",
    image: '/assets/zahra/4services-img/Cleanng and Care.jpg',

    description: 'cleaningCareDescription',
    price: '$15',
    iframeSrc:
      'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/CleaningCare/formperma/y4EhGqPa62CdsgS8_E1Q5joxtNYnwo7oz4_YNi2MTgo    ',
  },
  {
    name: 'repairFixes',
    // image: "/assets/zahra/services-img4.png",
    image: '/assets/zahra/4services-img/Repairs and fixes.jpg',

    description: 'repairFixesDescription',
    price: '$25',
    iframeSrc:
      'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/RepairFixes/formperma/l8nmBd50qHMhTpr4LkmSD8kaY88w9hWtoktTH-1uWIQ    ',
  },
]

const Pricing = () => {
  const { openPopup } = useFormPopup()

  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  const { t } = useTranslation()

  return (
    // <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14" id="pricing">
    <div
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14'
      id='services'
    >
      <div className='max-w-screen-xl px-4 sm:px-4 lg:px-16 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed'
            >
              {/* OUR SERVICES */}
              {t('ourServices')}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto md:my-6 my-2 text-center'
            >
              {/* Let's choose the package that is best for you and explore it happily and cheerfully. */}
              {t('choosePackage')}
            </motion.p>
          </ScrollAnimationWrapper>

          {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {services.map((service, index) => (
              <div
                key={index}
                className='flex flex-col bg-white border border-orange-250  shadow hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700'
              >
                <img
                  className=' w-full h-60 object-cover'
                  src={service.image}
                  alt={service.name}
                />
                <div className='p-5 flex flex-col flex-1'>
                  <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {t(service.name)}
                  </h5>
                  <p className='mb-4 font-normal text-gray-700 dark:text-gray-400 flex-1'>
                    {t(service.description)}
                  </p>
                  <button
                    onClick={() => openPopup(service.iframeSrc)}
                    className='mt-auto text-white-500 inline-flex justify-between items-center px-4 py-2 text-sm font-medium text-white bg-orange-250 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition'
                  >
                    {t('bookNow')}
                    <svg
                      className='rtl:rotate-180 w-4 h-4 ml-2'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 10'
                    >
                      <path
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M1 5h12m0 0L9 1m4 4L9 9'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
