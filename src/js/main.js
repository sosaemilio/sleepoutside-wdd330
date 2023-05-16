import productList from "./productList.mjs";

productList("tents", "ul.product-list");


const cartItems = document.querySelectorAll(".cart-item");

for (const cartItem of cartItems) {
  const x = document.createElement("span");
  x.textContent = "X";
  x.addEventListener("click", () => {
    const id = cartItem.dataset.id;
    const cart = localStorage.getItem("cart");
    const newCart = JSON.parse(cart) || [];
    newCart = newCart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    cartItem.remove();
  });
  cartItem.appendChild(x);
}
