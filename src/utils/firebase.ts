import firebase from "firebase/app"
import "firebase/auth"

export const app = firebase.initializeApp({
  apiKey: "AIzaSyCSU9glkyvAX5Sa4Q1oH4bD1FPgGfOShn8",
  authDomain: "tutorial-socket-chat.firebaseapp.com",
  projectId: "tutorial-socket-chat",
  storageBucket: "tutorial-socket-chat.appspot.com",
  messagingSenderId: "884420096807",
  appId: "1:884420096807:web:14d20be91dfcbcc0c1af02"
})