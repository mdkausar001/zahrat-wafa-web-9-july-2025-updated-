import 'react-phone-input-2/lib/style.css' // Add this line at the top
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import SeoHead from '../components/SeoHead'
import Client from '../components/client'
import WhatsaApp from '../components/whatsapp'
import Testimoni from '../components/Testimoni'
import FormComponent from '../components/form'
import FAQs from '../components/faqs'
import ServicePartner from '../components/servicepartner'
import Gallery from '../components/gallery'
import Script from 'next/script'
import Testimonial from '../components/newTestimonial'

// import FormComponent from "../components/webform";

// import FormComponent from "../components/phform";

export default function Home() {
  return (
    <>
      <SeoHead title='Zahrat Wafa - Most Trusted Car Service & Repair Workshop' />
      {/* <Script
        id="zsiqchat"
        type="text/javascript"
        strategy="afterInteractive"
      >
        {`
          var $zoho=$zoho || {};
          $zoho.salesiq = $zoho.salesiq || {widgetcode: "siq3a8e52286a754a34f765129810049b61e88cfe5af1e99a1934d5ad4bcccc28b6bc6c8643ccdcc32e156559414025ad17", values:{},ready:function(){}};
          var d=document;
          s=d.createElement("script");
          s.type="text/javascript";
          s.id="zsiqscript";
          s.defer=true;
          s.src="https://salesiq.zohopublic.com/widget";
          t=d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s,t);
        `}
      </Script> */}
      <Layout>
        <WhatsaApp />
        <Hero />
        <ServicePartner />
        <Client />
        {/* <Feature /> */}
        <Pricing />
        {/* <Testimonial/> */}

        <Testimoni />
        <FormComponent />
        <FAQs />
        {/* <Gallery/> */}
      </Layout>
    </>
  )
}
