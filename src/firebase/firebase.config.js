// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYKRAU4HndPXV9dRJHqHUK8sjCt6jqYlg",
  authDomain: "dragon-news-42e84.firebaseapp.com",
  projectId: "dragon-news-42e84",
  storageBucket: "dragon-news-42e84.appspot.com",
  messagingSenderId: "497134433178",
  appId: "1:497134433178:web:0d8eafd5d7b25f56f80023"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
