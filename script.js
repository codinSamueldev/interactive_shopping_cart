let shop = document.getElementById("cards")  // Get parent tag, so now we can add information into that element.

let shopItemsData = [  // Save required information into an object, then with map function access it.
    {
        id : 0,
        name : "Green shirt",
        price : 45,
        description : "Some sample text for this card :o",
        img : "./images/img-1.jpg"
    }, 
    {
        id : 1,
        name : "Executive shirts",
        price : 110,
        description : "Some sample text for this card :o",
        img : "./images/img-2.jpg"
    }, 
    {
        id : 2,
        name : "White shirt",
        price : 30,
        description : "Some sample text for this card :o",
        img : "./images/img-3.jpg"
    }, 
    {
        id : 3,
        name : "Suit",
        price : 145,
        description : "Some sample text for this card :o",
        img : "./images/img-4.jpg"
    }
]

let basket = []  // Store how many items were added or removed.

let generateCards = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, description, img} = x  // Destructuring declaration.
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
                        <span id=${id} class="counter">0</span>
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
}

let decrementItem = (id) => {

    let search = basket.find((x) => x.id === id)  // Search if the product id already has values increased.

    if (search.item === 0) return  // The return won't allow to keep decreasing items if the item is equals to zero.
    else {
        search.item -= 1
    }

    update(id)  // Update product counter.
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
