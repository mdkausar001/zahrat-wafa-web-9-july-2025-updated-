// import Gallery from "../components/gallery";
// import Layout from "../components/Layout/Layout";
// // // import generateOAuthToken from "../utils/generateOAuthToken";
// // import { useEffect, useState } from 'react';
// // import axios from 'axios';


// const images = [
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 2' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 3' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },
//   { src: '/assets/zahra/4services-img/regular.jpg', alt: 'Image 1' },

//   // Add more images as needed
// ];




// // const GalleryPage = () => {

// //   const [data, setData] = useState(null);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get('/api');
// //         setData(response.data);
// //       } catch (error) {
// //         setError(error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   if (error) return <div>Error: {error.message}</div>;
// //   if (!data) return <div>Loading...</div>;
// //   return (
// //     <Layout>
// //       <div>
// //         <h1>Image Gallery</h1>
// //         <h1>Zoho API Data</h1>
// //       <pre>{JSON.stringify(data, null, 2)}</pre>
// //         <Gallery images={images} />
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default GalleryPage;


// const GalleryPage = () => (

  
//     <Layout>
//   <div>
//     <h1>Image Gallery</h1>
//     <Gallery images={images} />
//   </div>
//   </Layout>
// );

// export default GalleryPage;
import { useState ,useEffect} from 'react';
import Image from 'next/image';
// gs://zahrat-jedah.appspot.com
// import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
// import { initializeApp } from "firebase/app";

//
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
// import { storage } from './firebaseConfig'; // Import the storage from firebaseConfig
// import { getStorage } from "firebase/storage";

import {storage} from '../config/firebase.config';
import Layout from '../components/Layout/Layout';
// const storage = getStorage();
import Loader from '../components/Loader';
import { useTranslation } from 'next-i18next'

// const Gallery = ({ images }) => {
  const Gallery = () => {
    const { t } = useTranslation();

  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleZoom = (index) => {
    setZoomedIndex(index);
  };

  const closeZoom = () => {
    setZoomedIndex(null);
  };


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [images, setImageUrls] = useState([]);
  console.log("imageUrlsFirebase",images);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // fect(() => {
      // setTimeout(() => setLoading(false), 2000);
      window.scrollTo(0, 0);


    // }, []);
    const fetchImages = async () => {
      try {
        const listRef = ref(storage, 'gs://zahrat-jedah.appspot.com');

        const res = await listAll(listRef);

        const urls = await Promise.all(
          res.items.map(itemRef => getDownloadURL(itemRef))
        );

        

        // setImageUrls(urls); // Set the state with the image URLs




         // Transform URLs into the desired format
         const transformedImages = urls.map((url, index) => ({
          src: url,
          alt: `Image ${index + 1}`
          
        }));
        
        // Update state with transformed images
        setImageUrls(transformedImages);

      } catch (error) {
        console.error("Error fetching images:", error);
      }
      finally {
        // Set loading to false after fetching images or in case of an error
        setLoading(false);
      }
    };

    fetchImages();

  }, []);

  



  return (
        // <div className="gallery pt-12 p-8">
          // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 p-8">
          <Layout>

{loading ? <Loader /> :

          <div className="container mx-auto p-4 mt-28">
          <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">
        
      {t('GalH1')}
        </h1>
      {/* <p className="text-lg mb-8">
        Welcome to our gallery! At [Workshop Name], we take pride in providing top-notch car care and exceptional service. Our team of professionals and highly trained technicians are passionate about all things automotive. Here, you can explore some of our finest work and see the quality and dedication we bring to every vehicle that comes through our doors. Whether it's routine maintenance or a custom modification, we ensure your car gets the best treatment in the city.
      </p> */}
    </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12">
              {images.map((image, index) => (
                <div className="image-container" key={index}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={350}
                    height={250}
                    className="h-auto max-w-full rounded-lg"
                  />
                  <button className="zoom-button" onClick={() => handleZoom(index)}>+</button>
                </div>
              ))}
        
              {zoomedIndex !== null && (
                <div className="zoomed-image" onClick={closeZoom}>
                  <Image
                    src={images[zoomedIndex].src}
                    alt={images[zoomedIndex].alt}
                    width={600}
                    height={400}
                  />
                  <button className="close-zoom" onClick={closeZoom}>X</button>
                </div>
              )}
            </div>
        
            <style jsx>{`
              .image-container {
                position: relative;
              }
              .zoom-button {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 16px;
                cursor: pointer;
              }
              .zoomed-image {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                background-color: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
              }
              .close-zoom {
                position: absolute;
                top: 20px;
                right: 20px;
                background-color: rgba(0, 0, 0, 0.5);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 16px;
                cursor: pointer;
              }
            `}</style>
          </div>
  }
        </Layout>
        
      );
    };
    
    export default Gallery;
    