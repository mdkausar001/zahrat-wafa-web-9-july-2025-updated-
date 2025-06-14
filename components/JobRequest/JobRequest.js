// import { useTranslation } from 'next-i18next'

// const JobRequest = () => {
//   const { i18n } = useTranslation();

//   const { t } = useTranslation();
//   console.log("Currentttttt55ttlanguage:", i18n.language);

// console.log("ttttt1626",t);
//     return (
//       <div className="flex items-center justify-center min-h-screen p-6 ">
//         {/* Container for the iFrame */}
//         <div className="w-full max-w-4xl bg-white lg:p-2 ">
//           <iframe
//             aria-label="Job Request"
//             frameBorder="0"
//             scrolling="no" // Prevent unnecessary scrollbars

//             style={{
//               height: '1350px', // Adjust height as needed
//               width: '100%',
//               border: 'none',
//             }}
//             src="https://forms.zohopublic.com/zahratalwafaalarabiaco/form/JobRequest/formperma/KFWuQolgg9Yi-TkLl3bs5Df_vrSL6B3574Pf6ytkX-Q?zf_lang=ar"
//             // src="https://forms.zohopublic.com/zahratalwafaalarabiaco/form/JobRequest/formperma/KFWuQolgg9Yi-TkLl3bs5Df_vrSL6B3574Pf6ytkX-Q"
//           ></iframe>
//         </div>
//       </div>
//     );
//   };

//   export default JobRequest;

import { useTranslation } from 'next-i18next'
import { useState, useEffect } from 'react'
import Loader from '../Loader'

const JobRequest = () => {
  const { i18n } = useTranslation()
  const [loading, setLoading] = useState(true) // State to track loading

  const engSrc =
    'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/JobRequest/formperma/KFWuQolgg9Yi-TkLl3bs5Df_vrSL6B3574Pf6ytkX-Q'
  const arabicSrc =
    'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/JobRequest/formperma/KFWuQolgg9Yi-TkLl3bs5Df_vrSL6B3574Pf6ytkX-Q?zf_lang=ar'

  // Determine the src based on the current language
  const iframeSrc = i18n.language === 'ar' ? arabicSrc : engSrc

  // console.log("Currentttttt55ttlanguage:", i18n.language);

  // Effect to set loading to false when iframe is loaded
  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div className='flex items-center justify-center min-h-screen p-1'>
      {loading && <Loader />} {/* Show loader while loading */}
      {/* Container for the iFrame */}
      <div
        className={`w-full max-w-4xl bg-white-500 lg:p-2 ${
          loading ? 'hidden' : ''
        }`}
      >
        <iframe
          aria-label='Job Request'
          frameBorder='0'
          scrolling='no' // Prevent unnecessary scrollbars
          style={{
            height: '2700px', // Adjust height as needed
            width: '99%',
            border: 'none',
          }}
          src={iframeSrc} // Use the dynamically determined src
          onLoad={handleLoad} // Call handleLoad when iframe loads
        ></iframe>
      </div>
    </div>
  )
}

export default JobRequest
