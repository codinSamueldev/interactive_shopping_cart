
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
            <div id=${search.id} class="cart-items">
                <img width="130" src=${search.img} alt="${search.alt}">
                <header class="details">
                    <div class="title-price-cross">
                        <h3 class="title-price">
                            <p>${search.name}</p>
                            <p>$ ${search.price}</p>
                        </h3>
                        <i onclick="removeProduct(${id})" class="bi bi-x-lg"></i>
                    </div>
                
                    <div class="total-items">
                        <span id=${id} class="counter">
                            <p>Items: ${item}</p>
                        </span>
                    </div>
                    <h3>$ ${item * search.price}</h3>
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

let removeProduct = (id) => {

    basket = basket.filter((x) => x.id !== id)
    generateCartItems()
    localStorage.setItem("data", JSON.stringify(basket))
    cartCalculation()

    // Convert the id to a string
    const idToRemove = id.toString()

    // Check if the element exists before trying to remove it
    const productToRemove = document.getElementById(idToRemove)
    if (productToRemove) {
        productToRemove.remove()
    }
    totalAmount()
}

let clearAll = () => {
    basket = []
    cartCalculation()
    localStorage.setItem("data", JSON.stringify(basket))
    generateCartItems()
}

let totalAmount = () => {
    if (basket.length !== 0){
        let amount = basket.map((x) => {
            let {item, id} = x
            let search = shopItemsData.find((y) => y.id === id) || []

            return item * search.price
        }).reduce((a, b) => a+b, 0)

        cartTotal.innerHTML = `
        <h2>Total bill: $${amount}<h2>
        <button class="checkout" type="button">Pay</button>
        <button onclick="clearAll()" class="remove-all" type="button">Remove all</button>
        `
    }
    else{return}
}

totalAmount()
