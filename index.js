// Pause and resume banner animation on hover
const banner = document.querySelector('.banner');
banner.addEventListener('mouseover', () => {
    banner.querySelector('.slides').style.animationPlayState = 'paused';
});
banner.addEventListener('mouseout', () => {
    banner.querySelector('.slides').style.animationPlayState = 'running';
});

// Function to add products to the cart
function addToCart(button) {
    const product = button.parentElement;
    const productName = product.querySelector("h2").textContent;
    const productPrice = parseInt(product.getAttribute("data-price"));
    const cartItems = document.getElementById("cart-items");
    const totalPriceElem = document.getElementById("total-price");

    // Create a new cart item
    const cartItem = document.createElement("li");
    cartItem.innerHTML = `${productName} - ₹${productPrice} <button onclick="removeFromCart(this, ${productPrice})">Remove</button>`;
    cartItems.appendChild(cartItem);

    // Update total price
    const currentTotal = parseInt(totalPriceElem.textContent);
    totalPriceElem.textContent = currentTotal + productPrice;
}

// Function to remove products from the cart
function removeFromCart(button, price) {
    const cartItem = button.parentElement;
    const cartItems = document.getElementById("cart-items");
    const totalPriceElem = document.getElementById("total-price");

    // Remove the item
    cartItems.removeChild(cartItem);

    // Update total price
    const currentTotal = parseInt(totalPriceElem.textContent);
    totalPriceElem.textContent = currentTotal - price;
}

// Function to handle checkout
function checkout() {
    alert("Checkout successful! Thank you for shopping.");
}
