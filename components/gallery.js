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
// const storage = getStorage();


// const Gallery = ({ images }) => {
  const Gallery = () => {

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

  useEffect(() => {
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
    };

    fetchImages();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('/server'); // This will hit the /api/proxy route
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);



  return (
        // <div className="gallery pt-12 p-8">
          // <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 p-8">

{/* <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> */}

          {images.map((image, index) => (
            <div className="image-container" key={index}>
              {/* <Image src={image} alt={image.alt} width={300} height={200} /> */}
              {/* <img  src={image} alt={image.alt} /> */}
              <Image src={image.src} alt={image.alt} width={350} height={250}  className='h-auto max-w-full rounded-lg' />
              <button className="zoom-button" onClick={() => handleZoom(index)}>+</button>
            </div>
          ))}
    
          {zoomedIndex !== null && (
            <div className="zoomed-image" onClick={closeZoom}>
              {/* <Image src={images[zoomedIndex].src} alt={images[zoomedIndex].alt} width={600} height={400} /> */}
              {/* <img  src={images[zoomedIndex].src} alt={images[zoomedIndex].alt} /> */}
                        <Image src={images[zoomedIndex].src} alt={images[zoomedIndex].alt} width={600} height={400} />

              <button className="close-zoom" onClick={closeZoom}>X</button>
            </div>
          )}
    
          <style jsx>{`
            .gallery {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }
            .image-container {
              position: relative;
              width: 300px;
              height: 200px;
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
            .zoomed-image img {
              max-width: 90%;
              max-height: 90%;
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
      );
    };
    
    export default Gallery;
    