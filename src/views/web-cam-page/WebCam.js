// import React, { useState, useEffect } from "react";

// const WebCam = () => {
//   useEffect(() => {
//     async function fetchData() {
//       await fetch(
//         `https://api/webcams/v2/list/nearby=46.54,7.98,5?show=webcams:location,image${process.env.REACT_APP_WINDY_API_KEY}`
//       )
//         .then((response) => response.json())
//         .then((payload) => setWeatherData(payload))
//         .catch((err) => console.error(err));
//     }
//     fetchData();
//   }, []);
//   return <div></div>;
// };

// export default WebCam;

// /api/webcams/v2/list/nearby=46.54,7.98,5?show=webcams:location,image
// /api/webcams/v2/list/webcam={webcamid}[,{webcamid}...]
