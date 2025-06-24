// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQ2DqRKTOW32LbmaZ42-sljYq-OJnCgs",
  authDomain: "winter-donation-ed562.firebaseapp.com",
  projectId: "winter-donation-ed562",
  storageBucket: "winter-donation-ed562.firebasestorage.app",
  messagingSenderId: "259383470914",
  appId: "1:259383470914:web:87638bad961001b57c76db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
