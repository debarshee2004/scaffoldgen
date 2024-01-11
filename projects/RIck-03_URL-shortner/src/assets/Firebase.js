import firebase from "firebase/compat/app"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCWSzbMjTAxyOaXyhao6M0_AdGlYfUi_8Y",
    authDomain: "url-shortner-50fa4.firebaseapp.com",
    projectId: "url-shortner-50fa4",
    storageBucket: "url-shortner-50fa4.appspot.com",
    messagingSenderId: "620372395896",
    appId: "1:620372395896:web:74912e27b6cba68e31ea8d",
    measurementId: "G-FY9GYSRXC4"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  const db=app.firestore();

  export default db;