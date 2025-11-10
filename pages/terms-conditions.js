import React from "react";
import Layout from "../components/Layout/Layout";
import { useTranslation } from 'next-i18next'

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto px-4 pt-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            {/* <h1
              className="text-3xl font-bold mb-4 text-left inline-block 
                         text-transparent bg-clip-text bg-gradient-to-r 
                         from-[#ff0000] via-[#8000ff] to-[#0000ff] font-[PoppinsItalicBold] 
                         font-extrabold text-4xl leading-tight capitalize"
            >
              Terms & Conditions
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
{t('TermsConditions')}</h1>
          </div>

          <div className="col-span-1 md:col-span-2">
            <article>
              <div className="space-y-6">
                <section className="max-w-4xl mx-auto px-4 py-8">
                  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
                    <p className="text-lg text-gray-800 mb-4">
                      {/* All information and material on this website has been prepared for general informational purposes only and has been verified correct at the time of publication. */}
                      {t('termsp1')}

                    </p>
                  </blockquote>

                  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
                    <p className="text-lg text-gray-800 mb-4">
                      {/* The Company is not responsible or liable for any loss, damage, personal injury, or death howsoever caused and whether or not due to negligence, arising from the use of or reliance on any information and materials published on this website by any person. */}
                      {t('termsp2')}
                    </p>
                  </blockquote>

                  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
                    <p className="text-lg text-gray-800 mb-4">
                      {/* All information and material on this website are owned or licensed by us and may not be copied without prior written permission. */}
                      {t('termsp3')}

                    </p>
                  </blockquote>

                  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
                    <p className="text-lg text-gray-800 mb-4">
                      {/* You may view content on a web browser and print copies for personal or non-commercial use. */}
                      {t('termsp4')}

                    </p>
                  </blockquote>

                  <blockquote className="bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-6 border-l-8 border-blue italic shadow-lg rounded-lg">
                    <p className="text-lg text-gray-800">
                      {/* You may communicate any downloaded content to another person for their personal use only if the provided source of all such information and material remains intact. */}
                      {t('termsp5')}

                    </p>
                  </blockquote>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsConditions;
