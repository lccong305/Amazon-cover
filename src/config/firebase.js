// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAN8TWnD3pE6ovz12RLlxkWpABjX_OaF3o",
  authDomain: "cover-e78c0.firebaseapp.com",
  projectId: "cover-e78c0",
  storageBucket: "cover-e78c0.appspot.com",
  messagingSenderId: "398549599648",
  appId: "1:398549599648:web:c208df59c0699b988e10c5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);
export default firebaseConfig;

export { auth };
