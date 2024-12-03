// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore"; // Import getFirestore here
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDONFEBkYaMT5_-5i8vlexM9QxCO1W4X3w",
//   authDomain: "uwcindia-5ccd6.firebaseapp.com",
//   projectId: "uwcindia-5ccd6",
//   storageBucket: "uwcindia-5ccd6.firebasestorage.app",
//   messagingSenderId: "252255874249",
//   appId: "1:252255874249:web:03c0188d852e94b3603118",
//   measurementId: "G-FTPEE4FY89",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDJtHUje89cqykaMQ3i6bObO5K2nNigURI",
  authDomain: "uwcindia-d0c68.firebaseapp.com",
  projectId: "uwcindia-d0c68",
  storageBucket: "uwcindia-d0c68.firebasestorage.app",
  messagingSenderId: "925261612065",
  appId: "1:925261612065:web:c40c682bdf352064f68f60",
  measurementId: "G-LPLJG3MJCK",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// // const app = initializeApp(firebaseConfig);

// // Initialize Firestore and export it
// export const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { storage };
export { db, collection, addDoc };
