import React from "react";
import Layout from "../components/Layout/Layout";
import { useTranslation } from 'next-i18next'

const PrivacyPolicy = () => {
    const { t } = useTranslation();
  
  return (
    <Layout>
    <div className="container mx-auto px-4 pt-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-1">
          {/* <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1> */}
          {/* <h1
  className="text-3xl font-bold mb-4 text-left inline-block 
             text-transparent bg-clip-text bg-gradient-to-r 
             from-[#ff0000] via-[#8000ff] to-[#0000ff] font-[PoppinsItalicBold] 
             font-extrabold text-4xl leading-tight capitalize"
>
  Privacy Policy
</h1> */}

{/* <h1
  className="text-3xl font-bold mb-4 text-left inline-block 
             text-black bg-clip-text bg-gradient-to-r 
             from-[#ff0000] via-[#8000ff] to-[#0000ff] font-[PoppinsItalicBold] 
             font-extrabold text-4xl leading-tight capitalize"
>
  Privacy Policy
</h1> */}

<h1
  style={{
    background: "linear-gradient(to right, #ff0000, #8000ff, #0000ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
  className="text-3xl font-bold mb-4 text-left inline-block 
             font-[PoppinsItalicBold] font-extrabold text-4xl leading-tight capitalize"
>

  {t('privacyPolicy')}
</h1>


        </div>
        <div className="col-span-1 md:col-span-2">
          <article>
            <div className="space-y-6">
              {/* <section>
                <blockquote className="bg-gray-100 p-4 border-l-4 border-gray-500 italic">
                  <p>
                    ZAHRAT AL WAFA is committed to protecting our visitors’ and members’
                    privacy. The following Privacy Policy outlines the information
                    we may collect and how we may use that information to better
                    serve visitors and members while using our website
                    <a href="hhttps://www.zahrat-wafa.com/" className="text-blue-500 ml-1">
                      www.zahrat-wafa.com.com
                    </a>.
                  </p>
                  <p>
                    By using our Website and Mobile Application you agree to the
                    terms of this privacy policy. Please review the following
                    carefully so that you understand our privacy policy.
                  </p>
                  <p>
                    If you have questions about this Privacy Policy, please contact
                    us at
                    <a href="mailto:support@zahrat-wafa.com" className="text-blue-500 ml-1">
                    support@zahrat-wafa.com                    </a>
                  </p>
                </blockquote>
              </section> */}
              <section className="max-w-4xl mx-auto px-4 py-8">
  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
    <p className="text-lg text-gray-800 mb-4">
    {t('policyp1')}

      {/* ZAHRAT AL WAFA is committed to protecting our visitors’ and members’ privacy.
      The following Privacy Policy outlines the information we may collect and how we may use that information to better serve visitors and members while using our website */}
      <a href="https://www.zahrat-wafa.com/" className="text-blue-500 ml-1 hover:text-blue-700 transition-colors">
        www.zahrat-wafa.com
      </a>.
    </p>
    <p className="text-lg text-gray-800 mb-4">
    {t('policyp2')}

      {/* By using our Website and Mobile Application, you agree to the terms of this privacy policy. Please review the following carefully so that you understand our privacy policy. */}
    </p>
    <p className="text-lg text-gray-800">
    {t('policyp3')}

      {/* If you have questions about this Privacy Policy, please contact us at */}
      <a href="mailto:support@zahrat-wafa.com" className="text-blue-500 ml-1 hover:text-blue-700 transition-colors">
        support@zahrat-wafa.com
      </a>.
    </p>
  </blockquote>
</section>


<section className="max-w-4xl mx-auto px-6 py-8">
  <div className="space-y-6">
    <section className="bg-white p-6 rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
        Information we collect
      </h2> */}
      {/* <h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">
  Information we collect
  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-600 to-blue-500"></div>
</h2> */}
<h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">
  {/* Information we collect */}
  {t('infoCollect')}
  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>
</h2>


      <p className="text-gray-700">
      {t('policyp4')}

        {/* Users of the website should be aware that non-personal information and data may be automatically collected by virtue of the standard operation of the Company’s computer servers or through the use of “cookies”. Cookies are files that a website can use to recognize repeat users and allow the website to track web usage behavior. */}
      </p>
      <p className="text-gray-700">
      {t('policyp5')}

        {/* The use of third-party cookies is not covered by our Privacy Policy. We do not have access or control over these cookies. */}
      </p>
    </section>

    <section className="bg-white p-6 rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">
        {/* How we use your information */}
        {/* {t('useInfo')}
        

        
      </h2> */} 
      <h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">
  {/* Information we collect */}
  {t('useInfo')}  
  <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>
</h2>
      <p className="text-gray-700">
      {t('policyp6')}

        {/* Our primary goal in collecting information is to provide you with an enhanced experience when using the service. We use this information to monitor which features are used most. */}
      </p>
    </section>

    <section className="bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">
    {/* Our Disclosure of Your Information */}
        {t('disclosureInfo')}
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>


      </h2>
      <p className="text-gray-700">
      {t('policyp7')}

        {/* We do not sell, rent, or trade your personal information. We may share aggregated information that includes non-identifying information and log data with third parties for industry analysis and demographic profiling. */}
      </p>
    </section>

    <section className="bg-white p-6 rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2"> */}
      <h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">

        {/* Security */}
        {t('security')}
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>


      </h2>
      <p className="text-gray-700">
      {t('policyp8')}

        {/* The personally identifiable and geo-location information we collect is securely stored within our database, and we use standard, industry-wide, commercially reasonable security practices such as encryption, firewalls, and SSL for protecting your information. */}
      </p>
    </section>

    <section className="bg-white p-6 rounded-lg shadow-lg">
      {/* <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2"> */}

      <h2 className="text-2xl font-semibold text-gray-800 pb-2 relative">

      {t('changesPrivacyPolicy')}
      <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-red-500 to-blue-500 bg-[length:200%_100%] animate-gradient-move"></div>

      </h2>
      <p className="text-gray-700">
      {t('policyp9')}

        {/* We may update this privacy statement to reflect changes to our information practices. We encourage you to periodically review this page for the latest information on our privacy practices. */}
      </p>
    </section>
  </div>
</section>

              {/* <section>
                <h2 className="text-xl font-semibold">Information we collect</h2>
                <p className="text-gray-700">
                  Users of the website should be aware that non-personal
                  information and data may be automatically collected by virtue of
                  the standard operation of the Company’s computer servers or
                  through the use of “cookies”. Cookies are files that a website
                  can use to recognize repeat users and allow the website to track
                  web usage behavior.
                </p>
                <p className="text-gray-700">
                  The use of third-party cookies is not covered by our Privacy
                  Policy. We do not have access or control over these cookies.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">How we use your information</h2>
                <p className="text-gray-700">
                  Our primary goal in collecting information is to provide you
                  with an enhanced experience when using the service. We use this
                  information to monitor which features are used most, allow you
                  to view your trip history, and store your credit card information
                  with our PCI-certified payment partner.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Our Disclosure of Your Information</h2>
                <p className="text-gray-700">
                  We do not sell, rent, or trade your personal information. We may
                  share aggregated information that includes non-identifying
                  information and log data with third parties for industry analysis
                  and demographic profiling.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Security</h2>
                <p className="text-gray-700">
                  The personally identifiable and geo-location information we
                  collect is securely stored within our database, and we use
                  standard, industry-wide, commercially reasonable security
                  practices such as encryption, firewalls, and SSL for protecting
                  your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold">Changes in this Privacy Policy</h2>
                <p className="text-gray-700">
                  We may update this privacy statement to reflect changes to our
                  information practices. We encourage you to periodically review
                  this page for the latest information on our privacy practices.
                </p>
              </section> */}
            </div>
          </article>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;
