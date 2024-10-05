// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8lLpF7MoNtskp0xe6JtRUJiRxHsnCt7s",
  authDomain: "coding-tutorial-b86ea.firebaseapp.com",
  projectId: "coding-tutorial-b86ea",
  storageBucket: "coding-tutorial-b86ea.appspot.com",
  messagingSenderId: "69497896410",
  appId: "1:69497896410:web:1fd102d72ebfe86b8f94e3",
  measurementId: "G-PFWLSJX50L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize auth

const submit = document.getElementById('submit');
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Creating Account...");
      window.location.href = "dashboard.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});
