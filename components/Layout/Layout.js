import 'react-international-phone/style.css'
import React from 'react'
import Footer from './Footer'
import Header from './Header'
// import Footer from "./Footer";
import { useTranslation } from 'react-i18next'
import { I18nextProvider } from 'react-i18next'

const Layout = ({ children }) => {
  const { i18n } = useTranslation()

  React.useEffect(() => {
    console.log('Current language:', i18n.language)

    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
