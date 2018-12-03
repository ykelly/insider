import firebase from 'firebase';
import Rebase from 're-base';

var config = {
  apiKey: "AIzaSyA8HgkSJZ1wXB2dOP2NFQ95ERFX0klUHTs",
  authDomain: "airbnb-insider-81935.firebaseapp.com",
  databaseURL: "https://airbnb-insider-81935.firebaseio.com",
  projectId: "airbnb-insider-81935",
  storageBucket: "airbnb-insider-81935.appspot.com",
  messagingSenderId: "890878786128"
};

const app = firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export { base }
