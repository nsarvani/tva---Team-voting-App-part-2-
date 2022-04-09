import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyu4Z_GUbii1KjsHdOtDsWovT5z8WRwFE",
    authDomain: "team-voting-app-part-2.firebaseapp.com",
    projectId: "team-voting-app-part-2",
    storageBucket: "team-voting-app-part-2.appspot.com",
    messagingSenderId: "628882784489",
    appId: "1:628882784489:web:cb0e16ded4e8a8a942b078",
    measurementId: "G-9N4Y49TWTE"
  };
var firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();