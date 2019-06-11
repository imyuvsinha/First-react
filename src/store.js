import firebase from "firebase";
import "firebase/firestore";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyA1uE1uih9zMIzvwMEC5ZPeixKXqxyMPV8",
  authDomain: "myfarm-97160.firebaseapp.com",
  databaseURL: "https://myfarm-97160.firebaseio.com",
  projectId: "myfarm-97160",
  storageBucket: "myfarm-97160.appspot.com",
  messagingSenderId: "705857920191",
  appId: "1:705857920191:web:ab6ff0427b2fb42b"
});

fire
  .firestore()
  .enablePersistence()
  .then(() => {
    // Initialize Cloud Firestore through firebase
    // alert('Persistence working!');
  })
  .catch(err => {
    if (err.code === "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("Multiple tabs open. So, no offline persistence for you.");
    } else if (err.code === "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("Offline persistence not supported in this browser.");
    }
  });
var db = fire.firestore();
var provider = new firebase.auth.GoogleAuthProvider();

function googleSignIn() {
  firebase
    .auth()
    .signInWithRedirect(provider)
    .then(function(result) {
      console.log("function");
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;

      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
}
function googleSignOut() {
  firebase.auth().signOut();
}

export { db, googleSignIn, googleSignOut, provider, firebase };
