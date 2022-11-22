import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";

import {  getAuth, browserSessionPersistence, signInWithEmailAndPassword, setPersistence, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIeIK2P73AJwoR2Qb2Nac_xJAAn_qUeGA",
  authDomain: "eden-cdee4.firebaseapp.com",
  projectId: "eden-cdee4",
  storageBucket: "eden-cdee4.appspot.com",
  messagingSenderId: "166124310796",
  appId: "1:166124310796:web:74391c4bca9e92c3e53929"
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
        window.location.href = "http://localhost:9000/account.html?";
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