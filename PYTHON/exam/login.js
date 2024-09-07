// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

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



//For easy exam login:-

const submit1 = document.getElementById('submit1');
submit1.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email1 = document.getElementById('email1').value;
  const password1 = document.getElementById('password1').value;

  signInWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Trying to Log in...");
      window.location.href = "new_easy.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});




//For medium exam login:-

const submit2 = document.getElementById('submit2');
submit2.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;

  signInWithEmailAndPassword(auth, email2, password2)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Trying to Log in...");
      window.location.href = "new_medium.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});



//For hard exam login:-

const submit3 = document.getElementById('submit3');
submit.addEventListener("click", function(event) {
  event.preventDefault();
  
  const email3 = document.getElementById('email3').value;
  const password3 = document.getElementById('password3').value;

  signInWithEmailAndPassword(auth, email3, password3)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Trying to Log in...");
      window.location.href ="hard_question.html"
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});

