// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPkCwYhKzWhqCCbZyEhhC7J4NdIYsBZKw",
  authDomain: "photo-galleria-dbdb0.firebaseapp.com",
  projectId: "photo-galleria-dbdb0",
  storageBucket: "photo-galleria-dbdb0.appspot.com",
  messagingSenderId: "479220941389",
  appId: "1:479220941389:web:646ced9b80fc294f7f9204"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;