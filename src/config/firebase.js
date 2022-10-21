// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCr-_ekA72YnAhfrEOo-cQKgYztZ7xfDQ",
  authDomain: "dts-news.firebaseapp.com",
  projectId: "dts-news",
  storageBucket: "dts-news.appspot.com",
  messagingSenderId: "238882066743",
  appId: "1:238882066743:web:0ae669069b87180c9d0ab2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };