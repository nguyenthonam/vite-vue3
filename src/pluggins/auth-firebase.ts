// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAratiHL3BcohpPD-HOge9UNbPhQ8q8lks",
  authDomain: "auth-social-2023.firebaseapp.com",
  projectId: "auth-social-2023",
  storageBucket: "auth-social-2023.appspot.com",
  messagingSenderId: "584161306507",
  appId: "1:584161306507:web:9b10f7c71e2159b985318e",
  measurementId: "G-C1F9QHTEY0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
