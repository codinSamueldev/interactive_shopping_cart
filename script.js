let shop = document.getElementById("cards")

let generateCards = () => {
    return (shop.innerHTML = `
        <div class="card">
            <figure>
                <img width="220" src="./images/img-1.jpg" alt="Green shirt">
            </figure>
            <header class="card-details">
                <h3>Green shirt</h3>
                <p>Some sample text for this card :o</p>
                <div class="price">
                    <b class="price-tag">$ 45</b>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                        <span class="counter">0</span>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </header>
        </div>
    `)
}

generateCards()
