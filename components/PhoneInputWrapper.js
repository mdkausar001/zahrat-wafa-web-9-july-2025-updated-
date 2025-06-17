// components/PhoneInputWrapper.js
import dynamic from 'next/dynamic'
import 'react-phone-input-2/lib/style.css'

// Dynamically import the PhoneInput only on the client
const PhoneInput = dynamic(() => import('react-phone-input-2'), { ssr: false })

export default PhoneInput
