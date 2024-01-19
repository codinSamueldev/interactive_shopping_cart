
let basket = JSON.parse(localStorage.getItem("data")) || []


console.log(basket)

let cartCalculation = () => {
    let cartCounter = document.getElementById("cart-amount")

    // console.log(basket, basket.map((x) => x.item).reduce((y,z) => y + z, 0));

    cartCounter.innerHTML = basket.map((x) => x.item).reduce((y,z) => y + z, 0)

}

cartCalculation()

