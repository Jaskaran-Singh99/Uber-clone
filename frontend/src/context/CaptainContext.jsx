// import React, { createContext, useState, useEffect } from "react";

// export const CaptainDataContext = createContext();

// const CaptainContext = ({ children }) => {
//   const [captain, setCaptain] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   // useEffect(() => {
//   //   const storedCaptain = localStorage.getItem("captain");
//   //   if (storedCaptain) {
//   //     setCaptain(JSON.parse(storedCaptain));
//   //   }
//   //   setLoading(false);
//   // }, []);

//   // // ✅ Whenever captain updates, store in localStorage
//   // useEffect(() => {
//   //   if (captain) {
//   //     localStorage.setItem("captain", JSON.stringify(captain));
//   //   }
//   // }, [captain]);

//   const updateCaptain = (captainData) => {
//     setCaptain(captainData);
//   };

//   const value = {
//     captain,
//     setCaptain,
//     loading,
//     setLoading,
//     error,
//     setError,
//     updateCaptain,
//   };
//   return (
//     <CaptainDataContext.Provider value={value}>
//       {children}
//     </CaptainDataContext.Provider>
//   );
// };

// export default CaptainContext;

import { createContext, useState, useEffect } from 'react'; 

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState(null);

  useEffect(() => {
    const storedCaptain = localStorage.getItem('captain');
    if (storedCaptain) {
      setCaptain(JSON.parse(storedCaptain));
      // console.log("🚀 Captain loaded in context:", captain);

    }
  }, []);

  useEffect(() => {
    if (captain) {
      localStorage.setItem('captain', JSON.stringify(captain));
    } 
    else {
      localStorage.removeItem('captain');
    }
  }, [captain]);

  return (
    <CaptainDataContext.Provider value={{ captain, setCaptain }}>
      {children}
    </CaptainDataContext.Provider>
  );
};

export default CaptainContext;
