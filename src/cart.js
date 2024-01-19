
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
            //let find = basket.find((x) => x.id === id)
            return `
            <div class="cart-items">
                <img width="130" src=${search.img}>
                <header class="details">
                    <div class="title-price-cross">
                        <h3 class="title-price">
                            <p>${search.name}</p>
                            <p>$ ${search.price}</p>
                        </h3>
                        <i class="bi bi-x-lg"></i>
                    </div>
                
                    <div class="total-items">
                        <span id=${id} class="counter">
                            <p>Items: ${item}</p>
                        </span>
                    </div>
                    <h3> $ ${item * search.price}</h3>
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
