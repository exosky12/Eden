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

const getCurrentURL = () => {
  return window.location.href;
};

let productUrl = new URL(getCurrentURL());
productUrl = productUrl.toString();
productUrl = productUrl.replace("http://localhost:5500/productPages.html?", "");
let productId = productUrl;

let productInPage = products.find((obj) => obj.id == productId);

const productInPageContainer = document.querySelector(".main");

let id = productInPage.id;
let name = productInPage.name;
let price = productInPage.price;

// console.log(name_pic(name));

let newCard = document.createElement("div");
newCard.classList.add("productPageContainer");
newCard.innerHTML = `
    <h2 class="main--name">${name}</h2>
    <div class="images">
        <img src="/assets/productsPages/img${id}-1.jpg">
        <img src="/assets/productsPages/img${id}-2.jpg">
        <img src="/assets/productsPages/img${id}-3.jpg">
        <img src="/assets/productsPages/img${id}-4.jpg">
        <img src="/assets/productsPages/img${id}-5.jpg">
        <img src="/assets/productsPages/img${id}-6.jpg">
    </div>
    <div class="right--div">    

            <h2 class="secondary--name">${name}</h2>
            <h3 class="price">${price} €</h3>

            <select name="pointure" id="pointure--select">
                <option value="">Selectionnez votre pointure</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
            </select>

            <h2 class="avis">Avis (47)</h2>
            <span>5/5 ⭐️⭐️⭐️⭐️⭐️</span>

            <div class="buttons">
                <button data-id=${id} data-name=${name_product(name)} data-price=${price} class="add-to-cart">Ajouter au panier</button>
                <button data-id=${id} class="add-to-favorite">Ajouter aux favoris</button>
            </div>

        </div>
  `;
productInPageContainer.appendChild(newCard);

const addToFavoriteIcon = document.querySelectorAll(".add-to-favorite");

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

const addTocart = document.querySelectorAll(".add-to-cart");

addTocart.forEach((cart) => {
  cart.addEventListener("click", ({ target }) => {
    // On récupère l'ID du produit (depuis l'attribut "data-product")
    const productSection = target.dataset.id;

    // On lit la clé "fav" du localStorage
    const cart = window.localStorage.getItem("cart");

    // Si celle-ci n'existe pas, on la créé
    if (cart === null) {
      window.localStorage.setItem("cart", JSON.stringify([productSection]));
    } else {
      // Si elle existe, on récupère + "parse" la clé "fav" du localStorage ("parse" ~= transforme le localStorage, qui est une chaine JSON, en Javascript)
      const currentCart = JSON.parse(cart);

      if (currentCart.includes(productSection)) {
        console.log("Produit déjà dans le panier");
      } else {
        // On ajoute l'id du produit au tableau présent en tant que valeur de la clé "fav"
        currentCart.push(productSection);
        window.localStorage.setItem("cart", JSON.stringify(currentCart));
      }
    }
  });
});

