import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart");
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Attaching event listener after rendering the cart items
  document.querySelectorAll(".remove-item").forEach((item) => {
    item.addEventListener("Click", removeItemFromCart);
  });
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
  <span data-id="${item.id}" class="remove-item">X</span>
</li>`;

  return newItem;
}

function removeItemFromCart(event) {
  const itemId = event.target.getAttribute("data-id");

  let cartItems = getLocalStorage("so-cart");
  cartItems = cartItems.filter((item) => item.id !== itemId); // Removing the clicked item

  // Updating the cart items in local storage
  setLocalStorage("so-cart", cartItems);

  // Re-rendering the cart items
  renderCartContents();
}

renderCartContents();
