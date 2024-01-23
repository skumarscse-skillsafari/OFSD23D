// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu_fU9yzCOWtKHoT6wl40ITsRd66X1wyM",
  authDomain: "auth-ofsd23d.firebaseapp.com",
  projectId: "auth-ofsd23d",
  storageBucket: "auth-ofsd23d.appspot.com",
  messagingSenderId: "986868382128",
  appId: "1:986868382128:web:d9229ce4ed9f308a21fe75",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
