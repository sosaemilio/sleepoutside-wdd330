import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
    let cartItems = [];
    let cartQty = localStorage.length;
    for (let i = 1; i <= cartQty; i++) {
      const key = `so-cart-${i}`;
      cartItems.push(getLocalStorage(key));
    }
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
}