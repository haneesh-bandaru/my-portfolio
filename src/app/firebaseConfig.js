import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {Firestore, getFireStore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAdaA-2um7_cRvQNHItrjdUUEU7zd-XKG0",
  authDomain: "haneesh-portfolio.firebaseapp.com",
  projectId: "haneesh-portfolio",
  storageBucket: "haneesh-portfolio.appspot.com",
  messagingSenderId: "307445660930",
  appId: "1:307445660930:web:340a3dd21c3f343f04d61b",
  measurementId: "G-1TSYTY2F64",
};

const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
const analytics = getAnalytics(app);

export {db};
