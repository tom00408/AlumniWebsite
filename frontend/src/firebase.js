// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSHC_DUxnh-GklIJQuRNRFIv3WRWK3NE4",
  authDomain: "alumniwebsite-8dbf2.firebaseapp.com",
  projectId: "alumniwebsite-8dbf2",
  storageBucket: "alumniwebsite-8dbf2.firebasestorage.app",
  messagingSenderId: "244617164863",
  appId: "1:244617164863:web:e05cbdc041069c2216e08a"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default firebaseApp;
export  {db};
