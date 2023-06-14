// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyB896pvCZwGVU5RUIWBIVzUAtTllNAu0n8",
//   authDomain: "fir-auth-1132.firebaseapp.com",
//   projectId: "fir-auth-1132",
//   storageBucket: "fir-auth-1132.appspot.com",
//   messagingSenderId: "1029021654707",
//   appId: "1:1029021654707:web:14aa4dee98449061701ac6",
//   measurementId: "G-MFP6M081T7",
// };AIzaSyDROYKamHzyv32oByHI6bSFZw2eDjoYR7k

// const app = initializeApp(firebaseConfig);






// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA78Mn28He1PnkhYrpXVl7MC6gNpt3jNFE",
//   authDomain: "react-http-f47f8.firebaseapp.com",
//   databaseURL: "https://react-http-f47f8-default-rtdb.firebaseio.com",
//   projectId: "react-http-f47f8",
//   storageBucket: "react-http-f47f8.appspot.com",
//   messagingSenderId: "884813550840",
//   appId: "1:884813550840:web:d43e02e2dcc805229f170d"
// };

// // Initialize Firebase


import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ-WCvZzvRIG2DuRzZZ5Be3GSUQ7EBAGA",
  authDomain: "mail-box-c80c2.firebaseapp.com",
  projectId: "mail-box-c80c2",
  storageBucket: "mail-box-c80c2.appspot.com",
  messagingSenderId: "9658312157",
  appId: "1:9658312157:web:63f013c5c9526767a08234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();




export { app, auth };

