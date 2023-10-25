import React from 'react'
 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

   
 const firebaseConfig = {
  apiKey: "AIzaSyBpxnn6D0Cw4YRLrnIQJmMQ_PksKkvEECw",
  authDomain: "masai-clone.firebaseapp.com",
  projectId: "masai-clone",
  storageBucket: "masai-clone.appspot.com",
  messagingSenderId: "760219628148",
  appId: "1:760219628148:web:19a34bb7c2d85170c09721"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth() ;

export {app,auth}