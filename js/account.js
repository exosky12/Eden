import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  deleteUser,
  updateEmail,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCIeIK2P73AJwoR2Qb2Nac_xJAAn_qUeGA",
  authDomain: "eden-cdee4.firebaseapp.com",
  projectId: "eden-cdee4",
  storageBucket: "eden-cdee4.appspot.com",
  messagingSenderId: "166124310796",
  appId: "1:166124310796:web:74391c4bca9e92c3e53929",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const logOutSvg = document.querySelector(".account--icon");
    logOutSvg.innerHTML = `
          <svg
            width="55"
            height="55"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 32.5V27.5H17.5V20L5 30L17.5 40V32.5H40Z" fill="black" />
            <path
              d="M50 7.5H27.5C24.7425 7.5 22.5 9.7425 22.5 12.5V22.5H27.5V12.5H50V47.5H27.5V37.5H22.5V47.5C22.5 50.2575 24.7425 52.5 27.5 52.5H50C52.7575 52.5 55 50.2575 55 47.5V12.5C55 9.7425 52.7575 7.5 50 7.5Z"
              fill="#333"
            />
          </svg>
          `;
    logOutSvg.style.top = "-7px";
    logOutSvg.style.left = "-67px";
    logOutSvg.style.cursor = "pointer";
    const auth = getAuth();
    logOutSvg.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          window.location.href = "http://localhost:5501/";
        })
        .catch((error) => {
          // An error happened.
        });
    });
    const uid = user.uid;
    const db = getFirestore(app);
    async function getUser() {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      let UserName = docSnap.data().name;
      if (UserName === "") {
        UserName = "Anonyme";
      }
      const UserEmail = docSnap.data().email;
      const UserPsw = docSnap.data().password;
      const container = document.querySelector(".container");
      container.innerHTML = `
      <h2>Bienvenue ${UserName} !</h2>
      <h1>Compte</h1>
      <div class="container--infos">
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
          <input id="accountPassword" type="password" required disabled="disabled"/>
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
      let name = document.querySelector("#accountName");
      name.value = UserName;
      let email = document.querySelector("#accountEmail");
      email.value = UserEmail;
      let psw = document.querySelector("#accountPassword");
      psw.value = UserPsw;
      const deleteBtn = document.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        let SureToDelete = document.createElement("div");
        SureToDelete.innerHTML = `
        <div class="verificationDelete">
          <h2>Êtes-vous sur de vouloir supprimer votre compte ?</h2>
          <button class="YesImSure">Oui</button>
          <button class="NoImNotSure">Non</button>
        </div>
        `;
        container.appendChild(SureToDelete);
        const NoImNotSure = document.querySelector(".NoImNotSure");
        NoImNotSure.addEventListener("click", () => {
          SureToDelete.innerHTML = "";
        });
        const YesImSure = document.querySelector(".YesImSure");
        YesImSure.addEventListener("click", async () => {
          deleteUser(user)
            .then(() => {
              // User deleted.
            })
            .catch((error) => {
              // An error ocurred
              // ...
            });
          await deleteDoc(doc(db, "Users", uid));
          window.location.href = "http://localhost:5500/index.html";
        });
      });
      const saveModifs = document.querySelector(".save");
      saveModifs.addEventListener("click", () => {
        const auth = getAuth();
        let NewMail = email.value;
        updateEmail(auth.currentUser, `${NewMail}`)
          .then(async () => {
            // Email updated!
            // ...
            const UserEmail = doc(db, "Users", uid);
            await updateDoc(UserEmail, {
              email: user.email,
            });
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        let NewName = name.value;
        async function UpdateName() {
          const NewUserName = doc(db, "Users", uid);
          await updateDoc(NewUserName, {
            name: `${NewName}`,
          });
        }
        UpdateName();
      });
    }

    getUser();
    // ...
  } else {
    // User is signed out
    // ...
  }
});
