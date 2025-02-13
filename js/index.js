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

const sliderSneakersHomepage = Array.from(
  document.querySelectorAll(".sneakers-homepage")
);
const nbSlideSneakersHomePage = sliderSneakersHomepage.length;
const sliderTrackerHomepage = Array.from(
  document.querySelectorAll(".tracker-homepage")
);
const nbTrackerHomePage = sliderTrackerHomepage.length;
const suivantSneakersHomePage = document.querySelector(".next");
const precedentSneakersHomePage = document.querySelector(".back");
let count = 0;
let count2 = 0;

function slideSuivante() {
  sliderSneakersHomepage[count].classList.remove("active-sneakers-homepage");
  sliderTrackerHomepage[count2].classList.remove("active-tracker-homepage");

  if (count < nbSlideSneakersHomePage - 1) {
    count++;
  } else {
    count = 0;
  }

  if (count2 < nbTrackerHomePage - 1) {
    count2++;
  } else {
    count2 = 0;
  }
  sliderSneakersHomepage[count].classList.add("active-sneakers-homepage");
  sliderTrackerHomepage[count2].classList.add("active-tracker-homepage");
}
suivantSneakersHomePage.addEventListener("click", slideSuivante);

function slidePrecedente() {
  sliderSneakersHomepage[count].classList.remove("active-sneakers-homepage");
  sliderTrackerHomepage[count2].classList.remove("active-tracker-homepage");

  if (count > 0) {
    count--;
  } else {
    count = nbSlideSneakersHomePage - 1;
  }
  if (count2 > 0) {
    count2--;
  } else {
    count2 = nbTrackerHomePage - 1;
  }

  sliderSneakersHomepage[count].classList.add("active-sneakers-homepage");
  sliderTrackerHomepage[count2].classList.add("active-tracker-homepage");
}
precedentSneakersHomePage.addEventListener("click", slidePrecedente);

function keyPress(e) {
  if (e.keyCode === 37) {
    slidePrecedente();
  } else if (e.keyCode === 39) {
    slideSuivante();
  }
}
document.addEventListener("keydown", keyPress);

const favorisContainer = document.querySelector(".favContainer");

const currentFavIds = JSON.parse(window.localStorage.getItem("fav")) ?? [];
currentFavIds.forEach((id) => {
  const product = findProductById(id);
  createElementFavori(product);
});

function findProductById(id) {
  return products.find((p) => p.id == id);
}

function createElementFavori({ id, name, price }) {
  let newCard = document.createElement("div");
  newCard.classList.add("favorisDiv");
  newCard.innerHTML = `
  <a data-id="${id}" class="mainImg" href="/productPages.html?${id}"><img src="./assets/products/${id}_${name_pic(
    name
  )}.jpg" alt=${name}></a>
    <button class="remove-to-favorite" data-id=${id}>
      <svg class="heart-icon clicked" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
        <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
      </svg>
    </button>  
    <div>
      <h5>${name}</h5>
      <h6>${price} €</h6>
    </div>`;

  favorisContainer.appendChild(newCard);
}

const removeFavIcon = document.querySelectorAll(".remove-to-favorite");

removeFavIcon.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const deleteFromDOM = e.target.parentElement.parentElement.parentElement;
    deleteFromDOM.remove();
    const getLocal = window.localStorage.getItem("fav");
    const localFav = JSON.parse(localStorage.getItem("fav")) ?? [];
    const itemIndex = localFav.findIndex(
      (item) => item.id === e.target.dataset.id
    );
    localFav.splice(itemIndex, 1);
    localStorage.setItem("fav", JSON.stringify(localFav));
  });
});
