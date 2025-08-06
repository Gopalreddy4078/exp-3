const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 59.99,
    image: "https://media.istockphoto.com/id/1412240771/photo/headphones-on-white-background.jpg?s=612x612&w=0&k=20&c=DwpnlOcMzclX8zJDKOMSqcXdc1E7gyGYgfX5Xr753aQ="
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 129.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzIHTWCb95JaWktrlEjV3p-cY7DEojHKI5g&s"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 39.99,
    image: "https://m.media-amazon.com/images/I/61QTzJ4ZyJL._UF350,350_QL80_.jpg"
  },
  {
    id: 4,
    name: "Wireless Mouse",
    price: 19.99,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJc6_Q3RHwXkGbleeuOnj0c7RH-plrpgSmA&s"
  }
];

let cartCount = 0;

function updateCart() {
  document.getElementById("cart-count").innerText = cartCount;
}

function addToCart(productId) {
  cartCount++;
  updateCart();
  alert("Item added to cart!");
}

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach(product => {
    const productHTML = `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productList.innerHTML += productHTML;
  });
}

document.addEventListener("DOMContentLoaded", renderProducts);