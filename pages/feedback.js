// import { useState, useEffect } from 'react';
// import Layout from '../components/Layout/Layout';
// import Loader from '../components/Loader';
// import { useTranslation } from 'next-i18next';

// const Gallery = () => {
//   const { t } = useTranslation();

//   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     // Simulating a loading state for demonstration purposes
// //     setTimeout(() => setLoading(false), 2000);
// //     window.scrollTo(0, 0);
// //   }, []);

//   return (
//     <Layout>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="container mx-auto p-4 mt-28">
//           <div className="text-center">
//             <h1 className="text-3xl font-bold mb-4">  {t('Opinion')}</h1>
//             <iframe
//               src="https://survey.zohopublic.com/zs/YsDHEe"
//               frameBorder="0"
//               style={{ height: '750px', width: '100%' }}
//               marginWidth="0"
//               marginHeight="0"
//               scrolling="auto"
//               allow="geolocation"
//             ></iframe>
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default Gallery;

//26 auguts
import { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import Loader from '../components/Loader';
import { useTranslation } from 'next-i18next';

const Gallery = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating a loading state for demonstration purposes
    setTimeout(() => setLoading(false), 2000);
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <div className="container mx-auto p-4 mt-28 min-h-screen flex items-center justify-center">
          <div className="text-center w-full max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">{t('Opinion')}</h1>
            <iframe
              src="https://survey.zohopublic.com/zs/YsDHEe"
              frameBorder="0"
              style={{ height: '1100px', width: '100%' }}
              marginWidth="0"
              marginHeight="0"
              scrolling="no" // Prevent unnecessary scrollbars
              allow="geolocation"
            ></iframe>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
