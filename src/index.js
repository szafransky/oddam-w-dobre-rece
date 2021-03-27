import React from 'react';
import ReactDOM from 'react-dom';
// import 'reset-css';
import './scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, { FirebaseContext } from './components/Firebase';
// import { FirebaseContext } from './components/Firebase/context';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
