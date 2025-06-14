// import React, { useMemo } from "react";
// import Image from "next/image";
// import Testimoni from "./Testimoni";
// import ButtonPrimary from "./misc/ButtonPrimary";
// import ButtonOutline from "./misc/ButtonOutline.";
// import Maps from "../public/assets/HugeGlobal.svg";
// import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

// const Client = () => {
//   const scrollAnimation = useMemo(() => getScrollAnimation(), []);

//   return (
//     <div
//       className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
//       id="pricing"
//     >
//       <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">

//         <div className="flex flex-col w-full my-16">
//           <ScrollAnimationWrapper>
//             <motion.h3
//               variants={scrollAnimation}
//               className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
//               Our Clients

// {" "}
//             </motion.h3>
//             <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
//             We proudly serve a diverse range of clients with top-notch car service and repair solutions.

//             </motion.p>
//           </ScrollAnimationWrapper>
//           {/* <ScrollAnimationWrapper>
//             <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
//               <Maps className="w-full h-auto" />
//             </motion.div>
//           </ScrollAnimationWrapper> */}
//           <ScrollAnimationWrapper>
//             <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation} whileHover={{
//                   scale : 1.1,
//                   transition: {
//                     duration: .2
//                   }
//                 }}>
//               {/* <Netflix className="h-18 w-auto" /> */}
//               <img
//                 src="/assets/zahra/client/bmw.png"
//                 className="h-14 w-auto mt-4 lg:mt-2"
//                 alt=""
//               />
//               <img
//                 src="/assets/zahra/client/Changan.png"
//                 className="h-14 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/zahra/client/Chevrolet.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/zahra/client/GMC.png"
//                 className="h-14 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/zahra/client/Honda.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//                 <img
//                 src="/assets/zahra/client/Hyundai.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//                 <img
//                 src="/assets/zahra/client/Isuzu.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//                 <img
//                 src="/assets/zahra/client/Land_Rover.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />
//               <img
//                 src="/assets/zahra/client/Lexus.png"
//                 className="h-12 w-auto mt-2 lg:mt-0"
//                 alt=""
//               />

//             </motion.div>
//           </ScrollAnimationWrapper>
//         </div>
//         {/* <div className="flex flex-col w-full my-16" id="testimoni">
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
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default Client;

//2
import React, { useMemo } from 'react'
import Image from 'next/image'
import Testimoni from './Testimoni'
import ButtonPrimary from './misc/ButtonPrimary'
import ButtonOutline from './misc/ButtonOutline.'
import Maps from '../public/assets/HugeGlobal.svg'
import { motion } from 'framer-motion'
import getScrollAnimation from '../utils/getScrollAnimation'
import ScrollAnimationWrapper from './Layout/ScrollAnimationWrapper'
import { useTranslation } from 'next-i18next'

const logos = [
  '/assets/servicep/njm.png',
  '/assets/servicep/al-sagar.png',
  '/assets/servicep/shift.jpg',
  '/assets/servicep/takatul.png',
  '/assets/servicep/Tawuniya.png',
  '/assets/servicep/umc.png',
  // "/assets/servicep/Isuzu.png",
  // "/assets/zahra/client/Land_Rover.png",
  // "/assets/zahra/client/Lexus.png",
  // "/assets/zahra/client/ford.png"
]

const ServicePartner = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])
  const { t } = useTranslation()

  return (
    <div
      // className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      className='bg-gradient-to-b from-white-300 to-white-500 w-full py-14 md:p-8'
      id='servicepartner'
    >
      <div className='max-w-screen-xl px-2 sm:px-6 lg:px-20 mx-auto flex flex-col w-full text-center justify-center'>
        <div className='flex flex-col w-full md:my-16 my-2'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              // className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600  w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"

              className='text-2xl sm:text-2xl lg:text-3xl font-medium text-black-600 w-10/12 sm:w-9/12 lg:w-4/12 mx-auto '
            >
              {/* Our Clients */}
              {t('ourServicePartner')}
            </motion.h3>
            <motion.p
              className='leading-normal mx-auto my-4 w-10/12 sm:w-7/12 lg:w-10/12'
              variants={scrollAnimation}
            >
              {/* Largest Professional Automotive Service Network in Saudi Arabia

          We proudly serve a diverse range of clients with top-notch car service and repair solutions. */}
              {t('servicePartnerDescription')}
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <motion.div
              className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-12 mt-4'
              variants={scrollAnimation}
            >
              {logos.map((src, index) => (
                <motion.div
                  key={index}
                  className='flex justify-center items-center p-2'
                  variants={scrollAnimation}
                >
                  <img
                    src={src}
                    className='h-14 w-auto'
                    alt={`Client logo ${index}`}
                  />
                </motion.div>
              ))}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default ServicePartner
