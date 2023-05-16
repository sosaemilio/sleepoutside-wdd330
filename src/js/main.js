import productList from "./productList.mjs";

productList("tents", "ul.product-list");


// main.js

// Attach click event listeners to the remove-product elements
const removeProductButtons = document.querySelectorAll('.remove-product');
removeProductButtons.forEach(button => {
  button.addEventListener('click', handleRemoveProduct);
});

// Event handler for removing a product
function handleRemoveProduct(event) {
  const productId = event.target.dataset.id; // Get the product ID from the clicked X icon
  const cart = JSON.parse(localStorage.getItem('cart')); // Retrieve cart data from localStorage

  // Find the index of the product to remove in the cart array
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    // Remove the product from the cart array
    cart.splice(productIndex, 1);

    // Update the cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Re-render the cart list
    renderCart();
  }
}

// Function to render the cart list
function renderCart() {
  const cartList = document.querySelector('.cart-list');
  const cart = JSON.parse(localStorage.getItem('cart')); // Retrieve cart data from localStorage

  // Clear the existing cart list
  cartList.innerHTML = '';

  // Iterate over the cart items and create HTML for each item
  cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = item.name;

    cartList.appendChild(cartItem);
  });
}

// Initial rendering of the cart list
renderCart();
