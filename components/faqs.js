

import { useState } from 'react';
import { useTranslation } from 'next-i18next'

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const faqs = [
    {
        question:"question1",
        //  "What car services do you offer?",
        answer: "answer1"
        // "We offer oil changes, tire rotations, brake repairs, diagnostics, and more."
      },
      {
        question:"question2",

        // question: "How can insurance coverage assist me?",
        answer: "answer2"

        // answer: "Our partnership with insurance companies allows for seamless claims processing and coverage for repairs."
      },
      {
        question:"question3",
        answer: "answer3"


        // question: "Do I need an appointment for service?",
        // answer: "While appointments are recommended, we accept walk-ins based on availability."
      },
      {
        question:"question4",
        answer: "answer4"

        // question: "Can you help with insurance claims?",
        // answer: "Yes! Our team can assist you with the paperwork and communication with your insurance provider."
      },
      {
        question:"question5",
        answer: "answer5"

        // question: "What payment options do you accept?",
        // answer: "We accept various payment methods including credit cards, debit cards, and insurance payments."
      }
   
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // <div className="max-w-lg mx-auto mt-10 mb-10 " id="faqs" >

    <div   style={{
      backgroundImage: "url('/background/background.svg')",
      backgroundSize: 'cover', // Adjust the background size as needed
      backgroundPosition: 'center'
    }}>
      <div className="mx-auto mt-10 mb-10" 
      // style={{ maxWidth: '51rem' }} 
      id="faqs"
      
      style={{
        maxWidth: '51rem',
        backgroundImage: "url('/background/background.svg')",
        backgroundSize: 'cover', // Adjust the background size as needed
        backgroundPosition: 'center'
      }}
      >

      <h2 className="text-2xl font-bold text-center mb-6">
        {/* Frequently Asked Questions */}
        {t('faqs')}

        </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 mb-4">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex items-center justify-between w-full text-left py-4 px-6 bg-white-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="font-semibold">
            {t(faq.question)}

                {/* {faq.question} */}
                </span>
            <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="py-2 px-6 text-gray-600">{t(faq.answer)}</div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default FAQs;

// 20th aug new below


// import { useState } from 'react';
// import { useTranslation } from 'next-i18next';

// const FAQs = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const { t } = useTranslation();

//   const faqs = [
//     { question: "question1", answer: "answer1" },
//     { question: "question2", answer: "answer2" },
//     { question: "question3", answer: "answer3" },
//     { question: "question4", answer: "answer4" },
//     { question: "question5", answer: "answer5" }
//   ];

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="container mx-auto mt-10 mb-10 px-6">
//       <div className="flex flex-col lg:flex-row">
//         {/* Left column for FAQs */}
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
//           <h2 className="text-2xl font-bold text-center mb-6">{t('faqs')}</h2>
//           {faqs.map((faq, index) => (
//             <div key={index} className="border-b border-gray-300 mb-4">
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="flex items-center justify-between w-full text-left py-4 px-6 bg-white-500 hover:bg-gray-100 focus:outline-none"
//               >
//                 <span className="font-semibold">{t(faq.question)}</span>
//                 <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
//               </button>
//               {openIndex === index && (
//                 <div className="py-2 px-6 text-gray-600">{t(faq.answer)}</div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right column for iframe */}
//         <div className="w-full lg:w-1/2 px-4">
//           <iframe
//             src="https://survey.zohopublic.com/zs/YsDHEe"
//             frameBorder="0"
//             style={{ height: '700px', width: '100%' }}
//             marginWidth="0"
//             marginHeight="0"
//             scrolling="auto"
//             allow="geolocation"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQs;

