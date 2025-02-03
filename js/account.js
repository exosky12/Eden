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
  // add your firebase config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const logSvg = document.querySelector('.logIcon')
    logSvg.setAttribute("href", "account.html")
    const logOutSvg = document.querySelector(".logOutIcon");
    logOutSvg.style.opacity = "1"
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
          window.location.href = "http://localhost:5501/index.html";
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
