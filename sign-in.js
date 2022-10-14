import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
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

const signIn = document.querySelector("#signIn");

signIn.addEventListener("click", () => {
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  const displayName = document.getElementById("txtName").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      updateProfile(auth.userCredential, {
        displayName: displayName,
      })
        .then(() => {
          // Profile updated!
          console.log("saved");
        })
        .catch((error) => {
          // An error occurred
          console.log("unsaved");
        });
      const user = userCredential.user;
      const container = document.querySelector("body");
      const alerts = document.querySelector(".success-logIn");
      alerts.classList.remove("hide");
      alerts.classList.add("showAlert");
      setTimeout(() => {
        alerts.classList.remove("showAlert");
        alerts.classList.add("hide");
        window.location.href = "http://127.0.0.1:5500/account.html?";
      }, 3500);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);

      const alerts = document.querySelector(".error-logIn");
      alerts.classList.remove("hide");
      alerts.classList.add("showAlert");
      setTimeout(() => {
        alerts.classList.remove("showAlert");
        alerts.classList.add("hide");
      }, 3500);
    });
});
