const getCurrentURL = () => {
  return window.location.href;
};

let productUrl = new URL(getCurrentURL());
productUrl = productUrl.toString();
productUrl = productUrl.replace("http://127.0.0.1:5500/productPages.html?", "");
let productId = productUrl;

let productInPage = products.find((obj) => obj.id == productId);
console.log(productInPage);

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
            <h3 class="price">${price}</h3>

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
                <button data-cart-id="${id}" class="add-to-cart">Ajouter au panier</button>
                <button data-id=${id} class="add-to-favorite">Ajouter aux favoris</button>
            </div>

        </div>
  `;
productInPageContainer.appendChild(newCard);
