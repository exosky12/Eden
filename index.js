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
    <a href="${id}_product.html">
      <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
    </a>
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
    console.log(localFav);
  });
});
