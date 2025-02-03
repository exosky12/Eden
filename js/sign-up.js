import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
    // add your firebase config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

const signUp = document.querySelector("#btnSignup");
let statusLog = false;

signUp.addEventListener("click", () => {
  const pseudo = document.getElementById("txtName").value;
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const uid = user.uid;
      statusLog = true;
      if (statusLog === true) {
        async function addUserFireStore() {
          await setDoc(doc(db, "Users", uid), {
            name: `${pseudo}`,
            email: `${email}`,
            password: `${password}`,
          });
        }
        addUserFireStore();
      }
      setTimeout(() => {
        window.location.href = "http://localhost:5501/index.html";
      }, 500);
      // Regarder Eden et faire UI design des alerts
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      statusLog = false;
    });
});
