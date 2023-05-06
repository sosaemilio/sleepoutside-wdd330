import { getLocalStorage, setLocalStorage, getParam } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

let productID = getParam("product");
findProductById(productID);


function addProductToCart(product) {
  let products = getLocalStorage("so-cart");
  if (!Array.isArray(products)) { 
    products = [products];
    products.shift();
  }
  products.push(product);
  setLocalStorage("so-cart", products);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

