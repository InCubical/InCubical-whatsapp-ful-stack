import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBAF4hTaaooTdD8dIntPw1bG3hEn9ePrao",
    authDomain: "whatsapp-full-stack.firebaseapp.com",
    projectId: "whatsapp-full-stack",
    storageBucket: "whatsapp-full-stack.appspot.com",
    messagingSenderId: "809784597336",
    appId: "1:809784597336:web:f8b1cb36a2f728d047632d",
    measurementId: "G-L6EL0PXRYL",
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;