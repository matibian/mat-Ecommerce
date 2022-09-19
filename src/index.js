import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBucFJzkUB-S3aH435uMw6sVgcEx8A8RKo",
  authDomain: "aliarg-c6eec.firebaseapp.com",
  projectId: "aliarg-c6eec",
  storageBucket: "aliarg-c6eec.appspot.com",
  messagingSenderId: "118354038114",
  appId: "1:118354038114:web:2b51154956ed42b67f703b"
};


initializeApp(firebaseConfig);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/* // <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
