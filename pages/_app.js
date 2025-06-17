import 'react-phone-input-2/lib/style.css'; // Add this line at the top

import '../styles/tailwind.css'
import '../styles/slick.css'
import '../styles/global.css'
import React from 'react'

import { FormPopupProvider } from '../components/FormPopUpContext'
// import { appWithTranslation } from '../next-i18next.config';

// import { appWithTranslation } from 'next-i18next'
// import { useTranslation } from 'react-i18next';
// import { I18nextProvider } from 'react-i18next';
import { appWithTranslation } from 'next-i18next'
//
import '../styles/global.css'
import Career from '../components/Career/career.js'
import RamadanPopup from '../components/Popup/RamadanPopup.js'
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

if (typeof Intl === 'undefined') {
  require('intl')
}

function MyApp({ Component, pageProps }) {
  // i18n.js

  // export default i18n;
  //   if (typeof window !== "undefined") {
  //   require('react-phone-input-2/lib/style.css');
  // }

  return (
    <FormPopupProvider>
      {/* <RamadanPopup/> */}

      <Component {...pageProps} />
      {/* Zoho SalesIQ Chat Script */}

      <RamadanPopup />
    </FormPopupProvider>
  )
}

// export default MyApp;
export default appWithTranslation(MyApp)

// export default appWithTranslation(MyApp)

// function MyApp({ Component, pageProps }) {
//   return (
//     <FormPopupProvider>
//       <Component {...pageProps} />
//     </FormPopupProvider>
//   );
// }
