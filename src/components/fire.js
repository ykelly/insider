import firebase from "firebase"

var config = {
  apiKey: "AIzaSyA8HgkSJZ1wXB2dOP2NFQ95ERFX0klUHTs",
  authDomain: "airbnb-insider-81935.firebaseapp.com",
  databaseURL: "https://airbnb-insider-81935.firebaseio.com",
  projectId: "airbnb-insider-81935",
  storageBucket: "airbnb-insider-81935.appspot.com",
  messagingSenderId: "890878786128"
};

var fire = firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = new firebase.auth();
export default fire;
