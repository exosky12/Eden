import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import {
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  EmailAuthProvider,
  getAuth,
  reauthenticateWithCredential,
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    const displayName = user.displayName;
    const profilePic = user.photoURL;
    const email = user.email;
    const container = document.querySelector(".container");
    container.innerHTML = `
    <h1>Compte</h1>
    <div class="container--infos">
    <div class="avatar--div1">
        <h2>Avatar</h2>
        <div class="avatar--div2">
            <img src="${profilePic}" class="img">
            <label for="uploadFile">Choissisez une photo</label>
            <input id="uploadFile" type="file"/>
        </div>
    </div>
    <hr>
    <div class="id--div">
        <h2>Votre indentifiant personnel</h2>
        <div class="uid">
            <h3>${uid}</h3>
        </div>
    </div>
    <hr>
    <div class="name--div">
        <label>Pseudo</label>
        <input id="accountName" type="text" required />
    </div>
    <hr>
    <div class="email--div">
        <label>Email</label>
        <input id="accountEmail" type="email" required />
    </div>
    <hr>
    <div class="password--div">
        <label>Mot de passe</label>
        <input id="accountPassword" type="password" required />
    </div>
    <hr>
    <div class="delete--div">
    <div class="delete--infos">
        <h2>Supprimer le compte</h2>
        <h3>En supprimant le compte vous allez perdre toutes les données de celui-ci</h3>
    </div>
    <button class="delete" type="button">Supprimer le compte</button>
    </div>
    </div>
    <hr>
    <button class="save" type="button">Enregistrer les changements</button>
    `;
    let nameModif = (document.querySelector("#accountName").value =
      displayName);
    let emailModif = (document.querySelector("#accountEmail").value = email);
    let uploadInput = document.querySelector("#uploadFile");
    let avatarModif = document.querySelector(".img");

    const btnSave = document.querySelector(".save");
    btnSave.addEventListener("click", () => {
        const credential = EmailAuthProvider.credential(
            auth.currentUser.email,
            userProvidedPassword
        )
        const result = reauthenticateWithCredential(
            auth.currentUser, 
            credential
        )

      let nameInput = document.querySelector("#accountName");
      let emailInput = document.querySelector("#accountEmail");
      let passwordInput = document.querySelector("#accountPassword");
      updateProfile(auth.currentUser, {
        displayName: nameInput.value,
      });
      updateEmail(auth.currentUser, emailInput.value);
    });
  } else {
    // User is signed out
    // ...
  }
});
