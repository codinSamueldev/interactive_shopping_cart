
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
        return (selectedProducts.innerHTML = basket.map((y) => {
            let {id, item} = y
            let search = shopItemsData.find((z) => z.id == id)
            return `
            <figure>
                <img width="120" src=${search.img}>
            </figure>
            <div class="cart-items">
                <header class="details">
                    <div class="title-price-cross">
                        <h3>${search.name}</h3>
                        <b>$ ${search.price}</b>
                        <i class="bi bi-x-lg"></i>
                    </div>
                    <div class="cart-buttons"></div>
                </header>
            </div>
            `
        }).join(""))
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
