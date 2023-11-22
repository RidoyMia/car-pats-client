// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmvnLGzZMT33nxm0dmnO20cVdhUtriDBc",
  authDomain: "car-repairing-a8e2f.firebaseapp.com",
  projectId: "car-repairing-a8e2f",
  storageBucket: "car-repairing-a8e2f.appspot.com",
  messagingSenderId: "819275588705",
  appId: "1:819275588705:web:4dbc4799614c64e6803620",
  measurementId: "G-QKS5DFRYRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;