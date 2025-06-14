// import { createContext, useContext, useState } from 'react';

// const FormPopupContext = createContext();

// export const useFormPopup = () => useContext(FormPopupContext);

// export const FormPopupProvider = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openPopup = () => setIsOpen(true);
//   const closePopup = () => setIsOpen(false);

//   return (
//     <FormPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
//       {children}
//     </FormPopupContext.Provider>
//   );
// };

import React, { createContext, useContext, useState } from 'react';

const FormPopUpContext = createContext();

export const useFormPopup = () => useContext(FormPopUpContext);

export const FormPopupProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [iframeSrc, setIframeSrc] = useState('');
console.log("iframeSrc",iframeSrc);
  const openPopup = (src) => {
    setIframeSrc(src);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setIframeSrc('');
  };

  return (
    // <FormPopUpContext.Provider value={{ isOpen, iframeSrc, openPopup, closePopup }}>
    //   {children}
    //   {isOpen && (
    //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    //       <div className="bg-white p-4 rounded shadow-lg max-w-4xl w-full">
    //         <button onClick={closePopup} className="absolute top-2 right-2 text-black">X</button>
    //         <iframe src={iframeSrc} className="w-full h-96" frameBorder="0" title="Service Form"  style={{ zIndex: "10000" }}></iframe>
    //       </div>
    //     </div>
    //   )}
    // </FormPopUpContext.Provider>
    <FormPopUpContext.Provider value={{ isOpen, iframeSrc, openPopup, closePopup }}>
  {children}
  {isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100]">
      <div className="relative bg-white-500 p-4 rounded shadow-lg max-w-4xl w-full">
        {/* Close button */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-4 text-black text-xl"
          aria-label="Close"
        >
          &times;
        </button>
        <iframe
          src={iframeSrc}
          className="w-full h-96"
          frameBorder="0"
          title="Service Form"
          style={{ zIndex: 1000 }}
        ></iframe>
      </div>
    </div>
  )}
</FormPopUpContext.Provider>

  );
};

