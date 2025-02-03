const products = [
  {
    id: 1,
    name: "Nike Air Force 1",
    price: 129.99,
    gender: "women",
    colors: ["red", "white"],
  },
  {
    id: 2,
    name: "Air Jordan 1 Mid",
    price: 129.99,
    gender: "men",
    colors: ["yellow", "white", "red"],
  },
  {
    id: 3,
    name: "Nike Air Max Plus",
    price: 179.99,
    gender: "women",
    colors: ["yellow", "white"],
  },
  {
    id: 4,
    name: "Nike Air Force 1 Low '07",
    price: 119.99,
    gender: "women",
    colors: ["yellow", "white"],
  },
  {
    id: 5,
    name: "Nike Dunk Low",
    price: 109.99,
    gender: "women",
    colors: ["yellow", "white", "purple"],
  },
  {
    id: 6,
    name: "Nike Air Huarache",
    price: 139.99,
    gender: "men",
    colors: ["black"],
  },
  {
    id: 7,
    name: "Nike Dunk High Retro",
    price: 119.99,
    gender: "women",
    colors: ["brown", "white", "green"],
  },
  {
    id: 8,
    name: "Nike Blazer Mid '77 PRM",
    price: 109.99,
    gender: "men",
    colors: ["green", "grey", "white"],
  },
  {
    id: 9,
    name: "PG 6",
    price: 119.99,
    gender: "women",
    colors: ["blue", "green"],
  },
  {
    id: 10,
    name: "Nike Dunk High Retro",
    price: 119.99,
    gender: "men",
    colors: ["white"],
  },
  {
    id: 11,
    name: "Nike Blazer Mid '77 Vintage",
    price: 119.99,
    gender: ["women"],
    colors: ["white", "green"],
  },
  {
    id: 12,
    name: "Nike Air Max Plus",
    price: 189.99,
    gender: "men",
    colors: ["white", "red", "yellow", "blue", "black"],
  },
  {
    id: 13,
    name: "Nike Air Zoom Alphafly NEXT 2",
    price: 299.99,
    gender: ["women"],
    colors: ["white", "green"],
  },
  {
    id: 14,
    name: "Nike Fontanka Waffle",
    price: 99.99,
    gender: "women",
    colors: ["white", "grey", "black"],
  },
  {
    id: 15,
    name: "Nike Retro GTS",
    price: 64.99,
    gender: "men",
    colors: ["white", "black"],
  },
  {
    id: 16,
    name: "Nike Air VaporMax 2021 FK",
    price: 224.99,
    gender: "women",
    colors: ["black"],
  },
  {
    id: 17,
    name: "Nike Revolution 6 Next Nature",
    price: 41.97,
    gender: "men",
    colors: ["blue", "white"],
  },
  {
    id: 18,
    name: "Nike SB Zoom Blazer Mid PRM",
    price: 99.99,
    gender: "women",
    colors: ["grey", "yellow", "white"],
  },
  {
    id: 19,
    name: "Nike Air Max Flyknit Racer",
    price: 159.99,
    gender: "men",
    colors: ["black", "purple", "white"],
  },
  {
    id: 20,
    name: "KD Trey 5 Xr",
    price: 59.97,
    gender: "men",
    colors: ["black", "grey", "white"],
  },
  {
    id: 21,
    name: "Nike Air Max Bella TR 5 Premium",
    price: 89.99,
    gender: "women",
    colors: ["white", "purple", "black"],
  },
  {
    id: 22,
    name: "Nike Court Vision Mid",
    price: 59.97,
    gender: "men",
    colors: ["white", "green", "black"],
  },
  {
    id: 23,
    name: "NikeCourt Zoom Lite 3",
    price: 59.99,
    gender: "men",
    colors: ["white", "blue"],
  },
  {
    id: 24,
    name: "Nike SB Ishod Wair",
    price: 65.97,
    gender: "men",
    colors: ["white", "black", "brown"],
  },
  {
    id: 25,
    name: "Nike Air Huarache Crater Premium",
    price: 76.97,
    gender: "men",
    colors: ["black", "black", "white"],
  },
  {
    id: 26,
    name: "NikeCourt Vision Mid",
    price: 63.97,
    gender: "women",
    colors: ["white"],
  },
  {
    id: 27,
    name: "Nike Air Max Terrascape Plus",
    price: 179.99,
    gender: "men",
    colors: ["black", "green", "purple", "white"],
  },
  {
    id: 28,
    name: "Nike Air VaporMax Plus",
    price: 214.99,
    gender: "men",
    colors: ["grey", "black"],
  },
  {
    id: 29,
    name: "LeBron 19",
    price: 199.99,
    gender: "women",
    colors: ["grey", "yellow", "blue"],
  },
  {
    id: 30,
    name: "Nike Air Zoom Victory Tour 2",
    price: 219.99,
    gender: "women",
    colors: ["black", "white"],
  },
  {
    id: 31,
    name: "Nike Air Zoom G.T. Run Jump",
    price: 194.99,
    gender: "women",
    colors: ["grey", "white"],
  },
  {
    id: 32,
    name: "Jordan Play",
    price: 30.47,
    gender: "men",
    colors: ["red", "black"],
  },
  {
    id: 33,
    name: "Nike SB Chron 2 Canvas",
    price: 42.47,
    gender: "men",
    colors: ["brown", "black"],
  },
  {
    id: 34,
    name: "Nike Tanjun",
    price: 45.47,
    gender: "women",
    colors: ["white", "black"],
  },
  {
    id: 35,
    name: "Nike SB BLZR Court",
    price: 42.47,
    gender: "women",
    colors: ["white", "black"],
  },
  {
    id: 36,
    name: "Nike Tiempo Legend 9 Club TF",
    price: 45.47,
    gender: "women",
    colors: ["white", "blue"],
  },
  {
    id: 37,
    name: "Nike Revolution 6 FlyEase Next Nature",
    price: 45.99,
    gender: "men",
    colors: ["black", "grey"],
  },
  {
    id: 38,
    name: "Nike Space Hippie 04",
    price: 134.99,
    gender: "men",
    colors: ["black", "grey", "blue", "brown"],
  },
  {
    id: 39,
    name: "Nike Air Max TW",
    price: 150.99,
    gender: "men",
    colors: ["blue", "white"],
  },
];

function name_pic(name) {
  name = name.replace(/[éè]/gi, "e");
  name = name.replace(/[ù]/gi, "u");
  name = name.replace(/[à]/gi, "a");
  name = name.replace(/[\s]/gi, "-");

  return name;
}
function name_product(name2) {
  name2 = name2.replace(/[éè]/gi, "e");
  name2 = name2.replace(/[ù]/gi, "u");
  name2 = name2.replace(/[à]/gi, "a");
  name2 = name2.replace(/[\s]/gi, "-");

  return name2;
}

const cartContainer = document.querySelector(".cartContainer");

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {
  getFirestore,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  deleteField,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

const firebaseConfig = {
  // add your firebase config
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const logSvg = document.querySelector(".logIcon");
    logSvg.setAttribute("href", "account.html");
    const logOutSvg = document.querySelector(".logOutIcon");
    logOutSvg.style.opacity = "1";
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
    const data = async function () {
      const docRef = doc(db, "Users", uid);
      const docSnap = await getDoc(docRef);
      let dataCart = [];
      let objectsCart = [];
      let index = 0;
      for (let el in docSnap.data()) {
        let checkData = products.find((obj) => obj.id == el);
        dataCart.push(checkData);
      }
      for (let el in dataCart) {
        if (typeof dataCart[index] === typeof {}) {
          objectsCart.push(dataCart[index]);
        }
        index = index + 1;
      }

      objectsCart.forEach((cartProduct) => {
        let { id, name, price, size, quantity } = cartProduct;
        quantity = 1;
        if (size === undefined) {
          size = "Vous n'avez pas sélectionné de pointure";
        }

        let newCartProduct = document.createElement("div");
        newCartProduct.classList.add("cartProduct");
        newCartProduct.setAttribute("id", `${id}`);
        newCartProduct.innerHTML = `
        <a data-id="${id}" class="cartProductImage" href="/productPages.html?${id}"><img src="./assets/products/${id}_${name_pic(
          name
        )}.jpg" alt=${name}></a>

        <div class="cartProductInfos">

          <h5 class="productName">${name}</h5>
          <h5 class="productSize">${size}</h5>
          <h6 class="productPrice">${price} €</h6>
          <div class="modifyQuantity">

            <span class="lessQuantity">-</span>
            <span class="totalQuantity">${quantity}</span>  
            <span class="moreQuantity">+</span>

          </div>

          <button data-id="${id}" class="deleteFromCartBtn">Supprimer du panier</button>

        </div>
        `;
        cartContainer.appendChild(newCartProduct);
      });
      const deleteFromCart = document.querySelectorAll(".deleteFromCartBtn");

      deleteFromCart.forEach((cartBTN) => {
        cartBTN.addEventListener("click", async ({ target }) => {
          const cartDataID = target.dataset.id;
          const cartProduct = document.getElementById(`${cartDataID}`);
          const cartREF = doc(db, "Users", uid);

          cartProduct.remove();
          await updateDoc(cartREF, {
            [cartDataID]: deleteField(),
          });
        });
      });
    };
    data();
    // ...
  } else {
    // User is signed out
    // ...
  }
});
