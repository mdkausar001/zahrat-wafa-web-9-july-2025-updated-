// import React from "react";

// const Loader = () => {
//     return (
//     //   <div className="flex h-screen items-center justify-center bg-white-300 ">
//     //     <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-orange-250 border-t-transparent"></div>
//     //   </div>
//     <div className="flex items-center justify-center h-screen">
//     <div className="w-16 h-16 border-4 border-t-4 border-orange-500 border-solid rounded-full animate-spin"></div>
//   </div>

// //     <div className="flex h-screen items-center justify-center bg-white-300">
// //   <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-orange-250 border-t-transparent"></div>
// // </div>


//     );
//   };
  
//   export default Loader;
  
//olde up

import React from 'react';

const Loader = () => {
  // Inline styles for the spinner
  const spinnerStyle = {
    border: '8px solid #f3f3f3', /* Light grey */
    borderTop: '8px solid #ff4800', /* Blue */
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1s linear infinite',
    margin: 'auto',
    display: 'block',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  // Keyframes for the spin animation
  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div>
      <style>{keyframes}</style>
      <div style={containerStyle}>
        <div style={spinnerStyle}></div>
      </div>
    </div>
  );
};

export default Loader;
