// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCP7QoRC3sCbGs5sa6RJq41hRyLWfRPSnA",
  authDomain: "to-do-app-bb28c.firebaseapp.com",
  projectId: "to-do-app-bb28c",
  storageBucket: "to-do-app-bb28c.appspot.com",
  messagingSenderId: "630949392597",
  appId: "1:630949392597:web:d70c3bf9cf37ab59edf25c"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;