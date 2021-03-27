import React from 'react';
 
import  { FirebaseContext } from '../components/Firebase';

 
const TestFirebase = () => (
  <FirebaseContext.Consumer>
    {firebase => {
      return <div>I've access to Firebase and render something.</div>;
    }}
  </FirebaseContext.Consumer>
);
 
export default TestFirebase;