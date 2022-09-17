const filterIcon = document.querySelector('.filter-toggler');
const filters = document.querySelector('.filter');

filterIcon.addEventListener("click", toggleFilter);

function toggleFilter(){
    filterIcon.classList.toggle('activeFilter');
    filters.classList.toggle('activeFilter');
}

const checkbox = document.querySelectorAll('.checkbox')

checkbox.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("btnCheckbox");
    });
});

const checkboxColors = document.querySelectorAll('.checkboxColors')

checkboxColors.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.toggle("btnCheckboxColors");
    });
});


const genderMale = document.querySelector('.maleBtn')

genderMale.addEventListener('click', () => {
    const maleProducts = products.filter(obj => obj.gender === "men")
    productSection.innerHTML = '';
    maleProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const genderWomen = document.querySelector('.femaleBtn')

genderWomen.addEventListener('click', () => {
    const womenProducts = products.filter(obj => obj.gender === "women")
    productSection.innerHTML = '';
    womenProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const down50Btn = document.querySelector('.down50Btn')

down50Btn.addEventListener('click', () => {
    const down50Products = products.filter(obj => obj.price < 50)
    productSection.innerHTML = '';
    down50Products.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const down100Btn = document.querySelector('.down100Btn')

down100Btn.addEventListener('click', () => {
    const down100Products = products.filter(obj => obj.price < 100)
    productSection.innerHTML = '';
    down100Products.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const down150Btn = document.querySelector('.down150Btn')

down150Btn.addEventListener('click', () => {
    const down150Products = products.filter(obj => obj.price < 150)
    productSection.innerHTML = '';
    down150Products.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const up150Btn = document.querySelector('.up150Btn')

up150Btn.addEventListener('click', () => {
    const up150Products = products.filter(obj => obj.price > 150)
    productSection.innerHTML = '';
    up150Products.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const croissantBtn = document.querySelector('.croissantBtn')

croissantBtn.addEventListener('click', () => {
    const croissantProducts = products.sort((a, b) => {
        return a.price - b.price
    });
    productSection.innerHTML = '';
    croissantProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const decroissantBtn = document.querySelector('.decroissantBtn')

decroissantBtn.addEventListener('click', () => {
    const decroissantProducts = products.sort((a, b) => {
        return b.price - a.price
    });
    productSection.innerHTML = '';
    decroissantProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const white = document.querySelector('.whiteBtn')

white.addEventListener('click', () => {
    const whiteProducts = products.filter(obj => obj.colors.includes("white"))
    productSection.innerHTML = '';
    whiteProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const black = document.querySelector('.blackBtn')

black.addEventListener('click', () => {
    const blackProducts = products.filter(obj => obj.colors.includes("black"))
    productSection.innerHTML = '';
    blackProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const brown = document.querySelector('.brownBtn')

brown.addEventListener('click', () => {
    const brownProducts = products.filter(obj => obj.colors.includes("brown"))
    productSection.innerHTML = '';
    brownProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})



const green = document.querySelector('.greenBtn')

green.addEventListener('click', () => {
    const greenProducts = products.filter(obj => obj.colors.includes("green"))
    productSection.innerHTML = '';
    greenProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const blue = document.querySelector('.blueBtn')

blue.addEventListener('click', () => {
    const blueProducts = products.filter(obj => obj.colors.includes("blue"))
    productSection.innerHTML = '';
    blueProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const grey = document.querySelector('.greyBtn')

grey.addEventListener('click', () => {
    const greyProducts = products.filter(obj => obj.colors.includes("grey"))
    productSection.innerHTML = '';
    greyProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const yellow = document.querySelector('.yellowBtn')

yellow.addEventListener('click', () => {
    const yellowProducts = products.filter(obj => obj.colors.includes("yellow"))
    productSection.innerHTML = '';
    yellowProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})


const purple = document.querySelector('.purpleBtn')

purple.addEventListener('click', () => {
    const purpleProducts = products.filter(obj => obj.colors.includes("purple"))
    productSection.innerHTML = '';
    purpleProducts.forEach((product) => {

        const { id, name , price} = product;
    

        let newCard = document.createElement("div");
        newCard.classList.add("product-card");
        newCard.innerHTML = `
        <img src="./assets/products/${id}_${name_pic(name)}.jpg" alt=${name}>
        <button class="add-to-favorite">
            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 37">
                <path d="M38.8385 4.09425C37.8367 3.11329 36.6472 2.33511 35.3381 1.80419C34.0289 1.27327 32.6257 1 31.2086 1C29.7914 1 28.3882 1.27327 27.079 1.80419C25.7699 2.33511 24.5804 3.11329 23.5786 4.09425L21.4995 6.12916L19.4204 4.09425C17.3968 2.11369 14.6522 1.00103 11.7904 1.00103C8.92861 1.00103 6.18403 2.11369 4.16043 4.09425C2.13684 6.07481 1 8.76103 1 11.562C1 14.3629 2.13684 17.0491 4.16043 19.0297L6.23955 21.0646L21.4995 36L36.7594 21.0646L38.8385 19.0297C39.8408 18.0492 40.6359 16.885 41.1783 15.6037C41.7208 14.3223 42 12.9489 42 11.562C42 10.175 41.7208 8.80161 41.1783 7.52027C40.6359 6.23894 39.8408 5.07476 38.8385 4.09425Z" />
            </svg>
        </button>  
        <h5>${name}</h5>
        <h6>${price} €</h6>`
        productSection.appendChild(newCard);
    
    })

})

