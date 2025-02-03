import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {  getAuth, browserSessionPersistence, signInWithEmailAndPassword, setPersistence, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  // add your firebase config
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth1 = getAuth(app);

const signIn = document.querySelector("#BtnSignIn");

signIn.addEventListener("click", () => {
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  signInWithEmailAndPassword(auth1, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // Regarder Eden et faire UI design des alerts
      const auth = getAuth();
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GoogleAuthProvider();
        // In memory persistence will be applied to the signed in Google user
        // even though the persistence was set to 'none' and a page redirect
        // occurred.
        window.location.href = "http://localhost:5501/account.html?";
        return signInWithRedirect(auth, provider);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
