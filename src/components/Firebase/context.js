import React from 'react';
 
const FirebaseContext = React.createContext(null);

export const FirebaseProvider = FirebaseContext.Provider

export const FirebaseConsumer = FirebaseContext.Consumer

export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
 
export default FirebaseContext;