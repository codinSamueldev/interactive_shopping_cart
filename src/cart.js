
let cartTotal = document.getElementById("cart-total")
let selectedProducts = document.getElementById("selected-products")

let basket = JSON.parse(localStorage.getItem("data")) || []

let cartCalculation = () => {
    let cartCounter = document.getElementById("cart-amount")

    // console.log(basket, basket.map((x) => x.item).reduce((y,z) => y + z, 0));

    cartCounter.innerHTML = basket.map((x) => x.item).reduce((y,z) => y + z, 0)

}

cartCalculation()

let generateCartItems = () => {
    if (basket.length !== 0){
        console.log("Products si hay...");
    }
    else{
        cartTotal.innerHTML = `
        <h2>Cart is empty :c</h2>
        <a href="./index.html">
            <button class="home-btn" type="button">Back to home-page</button>
        </a>
        `
    }
}

generateCartItems()
