let shop = document.getElementById("cards")  // Get parent tag, so now we can add information into that element.

// If we have local data stored retrieve it, if not then initialize an empty array.
let basket = JSON.parse(localStorage.getItem("data")) || []

let generateCards = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, description, img} = x  // Destructuring declaration.
        let search = basket.find((x) => x.id === id) || []
        return `
        <div id="product-id-${id}" class="card">
            <figure>
                <img width="220" src=${img} alt="Green shirt">
            </figure>
            <header class="card-details">
                <h3>${name}</h3>
                <p>${description}</p>
                <div class="price">
                    <b class="price-tag">$ ${price}</b>
                    <div class="buttons">
                        <i onclick="decrementItem(${id})" class="bi bi-dash-lg"></i>
                        <span id=${id} class="counter">
                        ${search.item === undefined ? 0: search.item}
                        </span>
                        <i onclick="incrementItem(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </header>
        </div>
    `
    }).join(""))  // Avoid unexpected backticks in cards.
}

generateCards()


let incrementItem = (id) => {

    let search = basket.find((x) => x.id === id)  // Search if the product id already has values increased.

    if (search === undefined){
        basket.push({
            id: id,
            item: 1
        })
    } else {
        search.item += 1
    }

    update(id)  // Update product counter.

    // Local storage implementation.
    localStorage.setItem("data", JSON.stringify(basket))
}

let decrementItem = (id) => {

    let search = basket.find((x) => x.id === id)  // Search if the product id already has values increased.

    if (search === undefined) return
    else if (search.item === 0) return  // The return won't allow to keep decreasing items if the item is equals to zero.
    else {
        search.item -= 1
    }    

    update(id)  // Update product counter.

    basket = basket.filter((x) => x.item !== 0) // Prevent local storage stores items with values of zero.

    // Local storage implementation.
    localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {

    /* Based on the product-id update the counter. */

    let search = basket.find((x) => x.id === id)

    document.getElementById(id).innerHTML = search.item

    cartCalculation()  // Update shopping cart counter.
}

let cartCalculation = () => {
    let cartCounter = document.getElementById("cart-amount")

    // console.log(basket, basket.map((x) => x.item).reduce((y,z) => y + z, 0));

    cartCounter.innerHTML = basket.map((x) => x.item).reduce((y,z) => y + z, 0)

}

cartCalculation() // Every time page is reloaded do a quick calculation.
