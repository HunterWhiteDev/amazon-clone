import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      apiKey: "AIzaSyDpe_HVv9caS9S3O5iyiREAWTvPGR0XQFI",
      authDomain: "clone-2c980.firebaseapp.com",
      databaseURL: "https://clone-2c980.firebaseio.com",
      projectId: "clone-2c980",
      storageBucket: "clone-2c980.appspot.com",
      messagingSenderId: "902545237654",
      appId: "1:902545237654:web:1ae8b38912829846f304b7",
      measurementId: "G-RYFMYL600D"
    })
    
  const auth = firebase.auth(); 


export {auth};