// // import React from 'react';

// // const FooterCard = () => {
// //   return (
// //     <div className="sc-624e6f82-1 sc-624e6f82-18 clSKVa hLzmFQ">
// //       <div data-qa="footer_copyright" className="sc-624e6f82-19 kZGvXR">
// //         <div className="sc-78d503cd-0 bUiedZ">
// //           <div data-qa="link_tooltip" className="sc-78d503cd-1 conwFi">
// //             © 2024 noon. All Rights Reserved
// //           </div>
// //           <div id="toolTipContainer" className="sc-78d503cd-2 ebUejN" data-qa="container_tooltip">
// //             'noon', the 'noon device', 'noon east', 'east' and the 'east device' are trademarks or registered trademarks of Noon AD Holdings LTD. in the UAE and other countries
// //           </div>
// //         </div>
// //       </div>
// //       <div className="sc-624e6f82-20 kyZtIA">
// //         <div className="sc-33b2f22e-0 jpVHWD">
// //           <span style={{ boxSizing: 'border-box', display: 'inline-block', overflow: 'hidden', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, position: 'relative', maxWidth: '100%' }}>
// //             <span style={{ boxSizing: 'border-box', display: 'block', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0, maxWidth: '100%' }}>
// //               <img
// //                 style={{ display: 'block', maxWidth: '100%', width: 'initial', height: 'initial', background: 'none', opacity: 1, border: 0, margin: 0, padding: 0 }}
// //                 alt=""
// //                 aria-hidden="true"
// //                 src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2741%27%20height=%2726%27/%3e"
// //               />
// //             </span>
// //             <img
// //               alt="mada"
// //               src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg"
// //               decoding="async"
// //               data-nimg="intrinsic"
// //               style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
// //               srcSet="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg 1x, https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg 2x"
// //             />
// //             <noscript>
// //               <img
// //                 alt="mada"
// //                 srcSet="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg 1x, https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg 2x"
// //                 src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mada.svg"
// //                 decoding="async"
// //                 data-nimg="intrinsic"
// //                 style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, boxSizing: 'border-box', padding: 0, border: 'none', margin: 'auto', display: 'block', width: 0, height: 0, minWidth: '100%', maxWidth: '100%', minHeight: '100%', maxHeight: '100%' }}
// //                 loading="lazy"
// //               />
// //             </noscript>
// //           </span>
// //           {/* Repeat similar span blocks for mastercard, visa, tabby, amex, etc. */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FooterCard;

// //

// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// const FooterCard = () => {
//   return (
//     // <div className="bg-gray-900 py-6">
//     //   <div className="container mx-auto flex justify-between items-center">
//     //     <div className="flex items-center space-x-4">
//     //       <img
//     //         alt="mastercardLogo"
//     //         className="w-8 h-8"
//     //         src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAzNCAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGlkPSJHcm91cCI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlIiB4PSIxMi43NSIgeT0iMS40MTY2NyIgd2lkdGg9IjguNSIgaGVpZ2h0PSIxMi43NSIgZmlsbD0iI0ZGNUYwMCIvPgogICAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xMy45OTAyIDcuNzkxNjdDMTMuOTg4IDUuNDAwOTIgMTUuMDk3OSAzLjE0MTk5IDE3IDEuNjY1OTVDMTMuNzY5MSAtMC44NDUwMDIgOS4xMjkxMyAtMC40Nzk1NDIgNi4zNDEwNiAyLjUwNTQ4QzMuNTUyOTggNS40OTA1MSAzLjU1Mjk4IDEwLjA5MjggNi4zNDEwNiAxMy4wNzc4QzkuMTI5MTMgMTYuMDYyOSAxMy43NjkxIDE2LjQyODMgMTcgMTMuOTE3NEMxNS4wOTc5IDEyLjQ0MTMgMTMuOTg4IDEwLjE4MjQgMTMuOTkwMiA3Ljc5MTY3WiIgZmlsbD0iI0VCMDAxQiIvPgogICAgPHBhdGggaWQ9IlBhdGhfMiIgZD0iTTI5Ljc1IDcuNzkxNjdDMjkuNzUwMSAxMC43NzQ3IDI4LjAyNzYgMTMuNDk1OSAyNS4zMTM5IDE0Ljc5OTdDMjIuNjAwMyAxNi4xMDM1IDE5LjM3MiAxNS43NjA5IDE3IDEzLjkxNzRDMTguOTAwNCAxMi40NCAyMC4wMDk5IDEwLjE4MTkgMjAuMDA5OSA3Ljc5MTY3QzIwLjAwOTkgNS40MDE0MSAxOC45MDA0IDMuMTQzMzcgMTcgMS42NjU5MUMxOS4zNzIgLTAuMTc3NTQ4IDIyLjYwMDMgLTAuNTIwMTQxIDI1LjMxMzkgMC43ODM2MjhDMjguMDI3NiAyLjA4NzQgMjkuNzUwMSA0LjgwODY0IDI5Ljc1IDcuNzkxNjdaIiBmaWxsPSIjRjc5RTFCIi8+CiAgICA8L2c+CiAgICA8L3N2Zz4K"
//     //       />
//     //       <img
//     //         alt="visacardLogo"
//     //         className="w-8 h-8"
//     //         src="https://www.namshi.com/_next/static/images/payment-method-cc-mada-b07df69827d3561489d39342ff42b5be.svg"
//     //       />

//     //       <p>© 2024 ZAHRAT AL WAFA ALARABIA. ALL RIGHTS RESERVED
//     //       </p>
//     //     </div>
//     //   </div>
//     // </div>
// //     <div className="bg-white-300 py-6">
// //   <div className="container mx-auto flex justify-between items-center">
// //     <div className="flex items-center space-x-4">
// //       <img
// //         alt="mastercardLogo"
// //         className="w-16 h-10"
// //         src="/footer-Bar/mada.svg"
// //       />
// //       <img
// //         alt="visacardLogo"
// //         className="w-16 h-10"
// //         src="/footer-Bar/PayTabs-Logos_English.png"
// //         // src="https://www.namshi.com/_next/static/images/payment-method-cc-mada-b07df69827d3561489d39342ff42b5be.svg"
// //       />
// //     </div>
// //     <p className="text-white font-medium text-sm"> {/* Added font styling */}
// //       © 2024 ZAHRAT AL WAFA ALARABIA. ALL RIGHTS RESERVED
// //     </p>
// //   </div>
// // </div>

// <div className="bg-gray-900 py-6 border-t border-white-300">
//   <div className="container mx-auto flex flex-col md:flex-row justify-between items-center w-full">
//     <div className="flex items-center space-x-4 mb-4 md:mb-0 w-full md:w-auto justify-center md:justify-start md:ml-16">
//     {/* <a href="https://www.mada.com.sa/en" target="_blank" > */}
//     {/* <Link href="https://www.mada.com.sa/en" passHref> */}
//     <a
//  href="https://www.mada.com.sa/en"
//  target="_blank"
//  rel="noopener noreferrer"
//  className="block w-full max-w-[100px] md:max-w-[100px] h-auto md:w-16 md:h-12 bg-white-300"
//   >

//       <div className="w-full max-w-[100px] h-auto md:w-16 md:h-12 bg-white-300">
//         <Image
//           alt="mastercardLogo"
//           layout="responsive"
//           src="/footer-Bar/mada.svg"

//           width={130}
//           height={110}
//           className="w-full h-auto md:w-16 md:h-12"
//         />
//       </div>
//       </a>

//        {/* </Link> */}
//       <a
//  href="https://site.paytabs.com/en/"
//  target="_blank"
//  rel="noopener noreferrer"
//  className="block w-full max-w-[100px] md:max-w-[100px] h-auto md:w-16 md:h-12 bg-white-300"
//   >
//       <div className="w-full max-w-[100px] h-auto md:w-16 md:h-12  bg-white-300">
//         <Image
//           alt="visacardLogo"
//         //   src="/footer-Bar/PayTabs-Logos_English.png"
//         src="/footer-Bar/PayTabs.svg"

//           layout="responsive"
//           width={130}
//           height={110}
//           className="w-full h-auto md:w-16 md:h-12"
//         />
//       </div>
//       </a>
//     </div>
//     <p className="text-white-300 font-normal text-sm text-center md:text-right w-full md:mr-2 ">
//       © 2024 ZAHRAT AL WAFA ALARABIA. ALL RIGHTS RESERVED
//     </p>
//   </div>
// </div>

//   );
// };

// export default FooterCard;

// components/ImageGallery.js
import Image from 'next/image'

const images = [
  { src: '/footer-Bar/mada.svg', alt: 'Vasa', width: 70, height: 60 },
  { src: '/footer-Bar/PayTabs2.svg', alt: 'Master', width: 70, height: 60 },
  { src: '/footer-Bar/cash.svg', alt: 'Master', width: 70, height: 60 },

  { src: '/footer-Bar/master.svg', alt: 'Master', width: 70, height: 60 },
  { src: '/footer-Bar/tabby.svg', alt: 'Master', width: 70, height: 60 },
  { src: '/footer-Bar/visa.svg', alt: 'Master', width: 70, height: 60 },

  //   { src:'/footer-Bar/2030.jpg', alt: 'Master', width: 100, height: 100 },

  //   { src: '/footer-Bar/PayTabs-Logos_Eng-Vertical.png', alt: 'Master', width: 100, height: 100 },

  // Add more images as needed
]
const rightImages = [
  {
    src: '/footer-Bar/2030.jpg',
    alt: 'Another Image',
    width: 100,
    height: 100,
  },
  // { src: '/images/yet-another-image.svg', alt: 'Yet Another Image', width: 100, height: 100 },
  // Add more images for the right column
]
const FooterCard = () => {
  //   return (
  //     <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-100 bg-black-500">
  //       <div className="flex flex-wrap gap-4 md:w-1/2  rounded-md">
  //         {images.map((img, index) => (
  //           <div key={index} className="flex-shrink-0 rounded-md">
  //             <Image src={img.src} alt={img.alt} width={img.width} height={img.height}  className='rounded-md'/>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="flex flex-wrap gap-4 md:w-1/2 rounded-md bg-white p-4">
  //         {rightImages.map((img, index) => (
  //           <div key={index} className="flex-shrink-0 rounded-md overflow-hidden">
  //             <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className='rounded-md'/>
  //           </div>
  //         ))}
  //         </div>
  //       {/* <div className="md:w-1/2 flex items-center justify-center">
  //         <p className="text-center text-gray-600">
  //           © 2024 ZAHRAT AL WAFA ALARABIA. ALL RIGHTS RESERVED
  //         </p>
  //       </div> */}
  //     </div>
  //   );

  return (
    // <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-400">
    //   {/* Left Column */}
    //   <div className="flex flex-wrap gap-4 md:w-1/2 rounded-md bg-white p-4">
    //     {images.map((img, index) => (
    //       <div key={index} className="flex-shrink-0 rounded-md overflow-hidden">
    //         <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="rounded-md" />
    //       </div>
    //     ))}
    //   </div>

    //   {/* Right Column */}
    //   <div className="md:w-1/2 flex flex-wrap gap-4 rounded-md bg-white p-4 ml-auto">
    //     <div className="w-full flex justify-end flex-wrap gap-4">
    //       {rightImages.map((img, index) => (
    //         <div key={index} className="flex-shrink-0 rounded-md overflow-hidden">
    //           <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="rounded-md" />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className='flex flex-col md:flex-row justify-between p-8 bg-black-600 border-t border-white-300 '>
      {/* Left Column */}
      <div className='flex flex-wrap gap-2 md:w-1/2 rounded-md md:ml-4 bg-white p-4'>
        {images.map((img, index) => (
          <div key={index} className='flex-shrink-0 rounded-md overflow-hidden'>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className='rounded-md'
            />
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className='md:w-1/2 bg-white p-10 rounded-md flex flex-col items-center sm:mb-3'>
        <div className='w-full flex justify-end flex-wrap gap-4'>
          <div className='w-full flex justify-center mt-4'>
            {/* <p className="text-center text-white-500  text-xs font-light tracking-wider uppercase">
    © 2024 ZAHRAT AL WAFA ALARABIA. ALL RIGHTS RESERVED
  </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCard
