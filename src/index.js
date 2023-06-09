import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJrjHJjj1of3AwykAUXpKRMuG8UcyHrAw",
  authDomain: "coderhouse-final-quiroga.firebaseapp.com",
  projectId: "coderhouse-final-quiroga",
  storageBucket: "coderhouse-final-quiroga.appspot.com",
  messagingSenderId: "212273507545",
  appId: "1:212273507545:web:225432b93b0324f18722c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);