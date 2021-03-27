import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBWAhgj-eQtY68G8Z1QYX5zsv5b8PJqf6I",
    authDomain: "oddam-w-dobre-rece-cl.firebaseapp.com",
    databaseURL: "https://oddam-w-dobre-rece-cl.firebaseio.com",
    projectId: "oddam-w-dobre-rece-cl",
    storageBucket: "oddam-w-dobre-rece-cl.appspot.com",
    messagingSenderId: "917578775849",
    appId: "1:917578775849:web:120597a74c13bef8dbcb38",
    measurementId: "G-LX0WRF4BNZ"
  };


  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.database();
    }

    //Auth API
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // *** User API ***
 
    user = uid => this.db.ref(`users/${uid}`);
    
    users = () => this.db.ref('users');


    fundacje = () => this.db.ref("fundacje");

    organizacje = () => this.db.ref("organizacje");

    lokalne = () => this.db.ref("lokalne");

    
    formularz = () => this.db.ref("formularz");
  }

  
   
  export default Firebase;