import firebase from 'firebase';
require("@firebase/firestore");
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC288v8Y7CUnpSA1p8yR5zGG5wrhHqpTcY",
    authDomain: "willy-fb100.firebaseapp.com",
    projectId: "willy-fb100",
    storageBucket: "willy-fb100.appspot.com",
    messagingSenderId: "621773656274",
    appId: "1:621773656274:web:f3edca9fd0c6c3a6b91d0b"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
  
 export default firebase.firestore();
 