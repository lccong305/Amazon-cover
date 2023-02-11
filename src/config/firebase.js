// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
const auth = getAuth(app);
const db = getFirestore(app);
export default firebaseConfig;

export { auth, db };

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAJ6v-b3PHxPD2sUpo_cZ2i2UhKFrBs8I8",
//   authDomain: "evon-firebase.firebaseapp.com",
//   projectId: "evon-firebase",
//   storageBucket: "evon-firebase.appspot.com",
//   messagingSenderId: "337180332469",
//   appId: "1:337180332469:web:9e0e2a973c5e31101cc9fc",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// export { auth, db };
