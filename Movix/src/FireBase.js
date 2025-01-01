import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/*apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
authDomain: import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: import.meta.env.REACT_APP_FIREBASE_PROJECT_ID,
storageBucket: import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.REACT_APP_FIREBASE_SENDER,
appId: import.meta.env.REACT_APP_FIREBASE_ID,*/
