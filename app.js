const hamburgerIcon = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".navBurger");

hamburgerIcon.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerIcon.classList.toggle("active");
  navigation.classList.toggle("active");
}

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

const productSection = document.querySelector(".allProducts");

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

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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
    const auth = getAuth();
    logOutSvg.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          window.location.href = "http://localhost:9000/";
        })
        .catch((error) => {
          // An error happened.
        });
    });
  }
});
