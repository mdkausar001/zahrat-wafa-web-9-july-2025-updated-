// import saImage from '../../public/laguagecountyFlag/sa.png'
// import enImage from '../../public/laguagecountyFlag/en.png';

// import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import Image from 'next/image';
// import i18n from "i18next";

// // import i18n  from "../../i18.js";

// const LanguageSwitcher = () => {
//   const [isChecked, setIsChecked] = useState(false);
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   const handleSwitchChange = () => {
//     setIsChecked(prevChecked => !prevChecked);
//     changeLanguage(isChecked ? 'ar' : 'en');
//   };

//   const getFlagIcon = () => {
//     if (i18n.language === 'en') {
//       return (
//         <div className="relative">
//           <div id="tooltip-top" role="Arabic" title="Arabic">
//             <div className="flex items-center gap-2 cursor-pointer shadow-lg rounded-lg p-5">
//               <Image
//                 className="rounded-md p-3"
//                 src={saImage}
//                 alt="ksa-image"
//                 width={19}
//                 height={19}
//               />
//               <p className="text-lg font-bold">Ar</p>
//             </div>
//           </div>
//         </div>
//       );
//     } else if (i18n.language === 'ar') {
//       return (
//         <div className="relative">
//           <div id="tooltip-top" role="English" title="English">
//             <div className="flex items-center cursor-pointer gap-2 shadow-lg rounded-lg p-5">
//               <Image
//                 src={enImage}
//                 alt="eng-image"
//                 width={19}
//                 height={19}
//               />
//               <p className="text-lg font-medium">Eng</p>
//             </div>
//           </div>
//         </div>
//       );
//     }
//     return null;
//   };

//   const translateOnClick = () => {
//     if (i18n.language === 'en') {
//       i18n.changeLanguage('ar');
//     } else if (i18n.language === 'ar') {
//       i18n.changeLanguage('en');
//     }
//   };

//   return <div onClick={translateOnClick}>{getFlagIcon()}</div>;
// };

// export default LanguageSwitcher;

// //2.0
// // import React from 'react';
// // import { useTranslation } from 'react-i18next';
// // import Image from 'next/image';
// // import saImage from '../../public/laguagecountyFlag/sa.png';
// // import enImage from '../../public/laguagecountyFlag/en.png';

// // const LanguageSwitcher = () => {
// //   const { i18n } = useTranslation();

// //   const translateOnClick = () => {
// //     const newLanguage = i18n.language === 'en' ? 'ar' : 'en';
// //     i18n.changeLanguage(newLanguage);
// //   };

// //   const getFlagIcon = () => {
// //     if (i18n.language === 'en') {
// //       return (
// //         <div className="relative" onClick={translateOnClick}>
// //           <div id="tooltip-top" role="Arabic" title="Arabic">
// //             <div className="flex items-center gap-2 cursor-pointer shadow-lg rounded-lg p-5">
// //               <Image
// //                 className="rounded-md p-3"
// //                 src={saImage}
// //                 alt="ksa-image"
// //                 width={19}
// //                 height={19}
// //               />
// //               <p className="text-lg font-bold">Ar</p>
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     } else if (i18n.language === 'ar') {
// //       return (
// //         <div className="relative" onClick={translateOnClick}>
// //           <div id="tooltip-top" role="English" title="English">
// //             <div className="flex items-center cursor-pointer gap-2 shadow-lg rounded-lg p-5">
// //               <Image
// //                 src={enImage}
// //                 alt="eng-image"
// //                 width={19}
// //                 height={19}
// //               />
// //               <p className="text-lg font-medium">Eng</p>
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     }
// //     return null;
// //   };

// //   return getFlagIcon();
// // };

// // export default LanguageSwitcher;

//2
// import saImage from '../../public/laguagecountyFlag/sa.webp';
// import saImage from '../../public/laguagecountyFlag/KSA.png';

import saImage from '../../public/laguagecountyFlag/sa.webp'

import enImage from '../../public/laguagecountyFlag/eng.webp'

import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'

// import i18n from "i18next";

import i18n from '../../i18.js'

const LanguageSwitcher = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const handleSwitchChange = () => {
    setIsChecked((prevChecked) => !prevChecked)
    changeLanguage(isChecked ? 'ar' : 'en')
  }

  const getFlagIcon = () => {
    if (i18n.language === 'en') {
      return (
        // <div className="relative">
        //   <div id="tooltip-top" role="Arabic" title="Arabic">
        //     <div className="flex items-center gap-2 cursor-pointer shadow-sm rounded-lg p-1">
        //       <Image
        //         // className="rounded-md p-3"
        //         src={saImage}
        //         alt="ksa-image"
        //         width={25}
        //         height={25}
        //       />
        //       <p className="text-lg font-bold">العربية</p>
        //     </div>
        //   </div>
        // </div>
        <div className='flex items-center gap-2 cursor-pointer md:px-4 px-2 py-2 border border-gray-100'>
          <Image
            src={saImage}
            alt='ksa-image'
            width={30} // Increase width
            height={20} // Increase height
            className='' // Optional: add class for additional styling
          />
          <p className='text-md font-medium'>العربية</p>
        </div>
      )
    } else if (i18n.language === 'ar') {
      return (
        <div className='relative'>
          <div id='tooltip-top' role='English' title='English'>
            <div className='flex items-center cursor-pointer gap-2 md:px-4 px-2 py-2 border border-gray-100 rounded-sm p-1'>
              <Image src={enImage} alt='eng-image' width={30} height={20} />
              <p className='text-lg font-medium'>Eng</p>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  const translateOnClick = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('ar')
    } else if (i18n.language === 'ar') {
      i18n.changeLanguage('en')
    }
  }

  return <div onClick={translateOnClick}>{getFlagIcon()}</div>
}

export default LanguageSwitcher
