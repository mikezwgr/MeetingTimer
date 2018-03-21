import firebase from "firebase";

const fbConfig = {
  apiKey: "AIzaSyAWzV06Xy5jnQsAYcoID_q5kiHhAltX9lg",
  authDomain: "meetingtimer-1551a.firebaseapp.com",
  databaseURL: "https://meetingtimer-1551a.firebaseio.com",
  projectId: "meetingtimer-1551a",
  storageBucket: "meetingtimer-1551a.appspot.com",
  messagingSenderId: "199949364265"
};

var fire = null;
try {
  if (!firebase.apps.length) {
    fire = firebase.initializeApp(fbConfig);
  }
} catch (err) {
  console.log("Err Init" + err);
}

export default fire;
