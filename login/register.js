// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { createUserWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM4E-FtHan_1tGxHwK6AN9JE_bAcX8oEs",
    authDomain: "coding-tutorial2.firebaseapp.com",
    projectId: "coding-tutorial2",
    storageBucket: "coding-tutorial2.appspot.com",
    messagingSenderId: "573120403196",
    appId: "1:573120403196:web:dd23046bba5a5f62abe979"
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

// Resend verification email
sendEmailVerification(auth.currentUser)
    .then(() => {
        console.log("Verification email resent.");
    })
    .catch((error) => {
        console.error("Error resending verification email:", error);
    });

