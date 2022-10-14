import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC8CAoFGcY3TF6BypvI7XJwzOZHD4FbDXA",
  authDomain: "eden-ac4ac.firebaseapp.com",
  databaseURL:
    "https://eden-ac4ac-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "eden-ac4ac",
  storageBucket: "eden-ac4ac.appspot.com",
  messagingSenderId: "760106795907",
  appId: "1:760106795907:web:677c5f06447566f66fecb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signUp = document.querySelector("#btnSignup");
signUp.addEventListener("click", () => {
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const container = document.querySelector("body");
      const alerts = document.querySelector(".success-register");
      alerts.classList.remove("hide");
      alerts.classList.add("showAlert");
      setTimeout(() => {
        alerts.classList.remove("showAlert");
        alerts.classList.add("hide");
        window.location.href = "http://127.0.0.1:5500/auth_sign-in.html?";
      }, 3500);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

      const alerts = document.querySelector(".error-register");
      alerts.classList.remove("hide");
      alerts.classList.add("showAlert");
      setTimeout(() => {
        alerts.classList.remove("showAlert");
        alerts.classList.add("hide");
      }, 3500);
    });
});

