const url = "https://fakestoreapi.com/products";

const container = document.querySelector("#products");

window.addEventListener("DOMContentLoaded", init_query);

const getDatos = async (url) => {
    let data = await fetch(url);
    let products = await data.json();

    console.log(products);
    RenderData(products);
}

function init_query() {
    getDatos(url);
}

function RenderData(data) {
    data.forEach(data => {
            let card = document.createElement("div")
            card.innerHTML = `
                        <div class="card-header">
                        <h2 class="title-product">${data.title}</h2>
                        </div>
                        <div class="card-body">
                        <div class="img-container">
                        <img src="${data.image}" alt="${data.title}" title="${data.category}" class="img-product">
                        </div>
                        <p class="description">${data.description}</p>
                        </div>
                        <div class="container-info">
                        <span class="price">${data.price}</span>
                        <span class="stock">${data.rating.count} stock</span>
                        </div>
                        <button class="btn-card" type="button">buy item</button>
                        `;
            card.className = "card-product";
            container.appendChild(card);
        }
    )
}