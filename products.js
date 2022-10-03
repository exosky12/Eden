products.forEach((product) => {
  const { id, name, price } = product;

  // console.log(name_pic(name));

  let newCard = document.createElement("div");
  newCard.classList.add("product-card");
  newCard.innerHTML = `
    <a data-id="${id}" class="mainImg" href="/productPages.html?${id}"><img src="./assets/products/${id}_${name_pic(
    name
  )}.jpg" alt=${name}></a>
    <button class="add-to-favorite">
        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37" data-id=${id} data-name=${name_product(
    name
  )} data-price=${price}>
            <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
        </svg>
    </button>  
    <h5>${name}</h5>
    <h6>${price} €</h6>`;
  productSection.appendChild(newCard);
});

const filterIcon = document.querySelector(".filter-toggler");
const filters = document.querySelector(".filter");

filterIcon.addEventListener("click", toggleFilter);

function toggleFilter() {
  filterIcon.classList.toggle("activeFilter");
  filters.classList.toggle("activeFilter");
}

const checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("btnCheckbox");
  });
});

const checkboxColors = document.querySelectorAll(".checkboxColors");

checkboxColors.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("btnCheckboxColors");
  });
});



const searchInput = document.querySelector("#searchinput");

searchInput.addEventListener("input", filterData);

function filterData(e) {
  productSection.textContent = "";

  const searchedString = e.target.value.toLowerCase().replace(name_product);

  const filteredArr = products.filter((name) => searchForOccurences(name));

  function searchForOccurences(products) {
    const searchTypes = {
      name: `${products.name}`.toLowerCase(),
    };
    for (const prop in searchTypes) {
      if (searchTypes[prop].includes(searchedString)) {
        return true;
      }
    }
  }
  filteredArr.forEach((product) => {
    // Ligne 22, c'est du "destructuring", on aurait très bien pu écrire :
    // const id = article.id
    // const name = article.name
    // pour récupérer les infos de chaque objet du tableau des produits, mais c'est plus court comme ceci :

    const { id, name, price } = product;

    // console.log(name_pic(name));

    let newCard = document.createElement("div");
    newCard.classList.add("product-card");
    newCard.innerHTML = `
    <a href="${id}_product.html"><img src="./assets/products/${id}_${name_pic(
      name
    )}.jpg" alt=${name}></a>
    <button class="add-to-favorite" data-product=${id}>
        <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
            <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
        </svg>
    </button>  
    <h5>${name}</h5>
    <h6>${price} €</h6>`;
    productSection.appendChild(newCard);
  });
}

// Création/Affichage des cards, grâce aux données ci-dessus

const addToFavoriteIcon = document.querySelectorAll(".add-to-favorite");

addToFavoriteIcon.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("clicked");
  });
});

addToFavoriteIcon.forEach((heart) => {
  heart.addEventListener("click", ({ target }) => {
    // On récupère l'ID du produit (depuis l'attribut "data-product")
    const productSection = target.dataset.id;

    // On lit la clé "fav" du localStorage
    const currentFav = window.localStorage.getItem("fav");

    // Si celle-ci n'existe pas, on la créé
    if (currentFav === null) {
      window.localStorage.setItem("fav", JSON.stringify([productSection]));
    } else {
      // Si elle existe, on récupère + "parse" la clé "fav" du localStorage ("parse" ~= transforme le localStorage, qui est une chaine JSON, en Javascript)
      const currentCart = JSON.parse(currentFav);

      if (currentCart.includes(productSection)) {
        console.log("Produit déjà en favoris");
      } else {
        // On ajoute l'id du produit au tableau présent en tant que valeur de la clé "fav"
        currentCart.push(productSection);
        window.localStorage.setItem("fav", JSON.stringify(currentCart));
        heart.classList.add("clicked");
      }
    }
  });
});
