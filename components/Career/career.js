// const Career = () => {

//     return (
//       <div className="flex items-center justify-center min-h-screen p-6 ">
//         {/* Container for the iFrame */}
//         <div className="w-full max-w-4xl bg-white lg:p-2 ">
//           <iframe
//             aria-label="Job Request"
//             frameBorder="0"
//             scrolling="no" // Prevent unnecessary scrollbars

//             style={{
//               height: '1050px', // Adjust height as needed
//               width: '100%',
//               border: 'none',
//             }}
//             src='https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Career/formperma/JVqJASnzcBS7IqIDOUdx7AaA4aJRclw1rqLvjUMS-jM'
//           ></iframe>
//         </div>
//       </div>
//     );
//   };
// //   <iframe aria-label='Career' frameborder="0" style="height:500px;width:99%;border:none;" 
// //   src='https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Career/formperma/JVqJASnzcBS7IqIDOUdx7AaA4aJRclw1rqLvjUMS-jM'></iframe>
  
//   export default Career;
  //2
  import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import Loader from '../Loader';

const Career = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true); // State to track loading

  const engSrc = 'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Career/formperma/JVqJASnzcBS7IqIDOUdx7AaA4aJRclw1rqLvjUMS-jM';
  const arabicSrc = 'https://forms.zohopublic.com/zahratalwafaalarabiaco/form/Career/formperma/JVqJASnzcBS7IqIDOUdx7AaA4aJRclw1rqLvjUMS-jM?zf_lang=ar';

  // Determine the src based on the current language
  const iframeSrc = i18n.language === 'ar' ? arabicSrc : engSrc;

  // console.log("Currentttttt55ttlanguage:", i18n.language);

  // Effect to set loading to false when iframe is loaded
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6">
      {loading && <Loader />} {/* Show loader while loading */}
      {/* Container for the iFrame */}
      <div className={`w-full max-w-4xl bg-white-500 lg:p-2 ${loading ? 'hidden' : ''}`}>
        <iframe
          aria-label="Career"
          frameBorder="0"
          scrolling="no" // Prevent unnecessary scrollbars
          style={{
            height: '1050px', // Maintain the height as specified
            width: '99%',
            border: 'none',
          }}
          src={iframeSrc} // Use the dynamically determined src
          onLoad={handleLoad} // Call handleLoad when iframe loads
        ></iframe>
      </div>
    </div>
  );
};

export default Career;
