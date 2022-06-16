// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEoqqFOkyBG39Wo8nrunZsvCP9ItBsTUA",
  authDomain: "power-ranger-706b3.firebaseapp.com",
  projectId: "power-ranger-706b3",
  storageBucket: "power-ranger-706b3.appspot.com",
  messagingSenderId: "625598015592",
  appId: "1:625598015592:web:5251cec74ab53d5aa773dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);
export default auth;