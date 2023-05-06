import { setLocalStorage, getLocalStorage } from "./utils.mjs";
import {findProductById} from "./productData.mjs"
let product = {};

export async function productDetails(productID) {
    // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    product = await findProductById(productID);
    // once we have the product details we can render out the HTML
    renderProductDetails();

    // add listener to Add to Cart button
    document.getElementById("addToCart").addEventListener("click", addToCart);
}


function addToCart() {
    let products = getLocalStorage("so-cart");
    if (!Array.isArray(products)) { 
        products = [products];
        products.shift();
    }
    products.push(product);
    setLocalStorage("so-cart", products);
    console.log(product);
}

function renderProductDetails() {
    document.getElementById("productName").textContent = product.Name;
    document.getElementById("productNameWithoutBrand").textContent = product.NameWithoutBrand;
    document.getElementById("productImage").setAttribute("src") = product.Image;
    document.getElementById("productFinalPrice").textContent = product.FinalPrice;
    document.getElementById("productColorName").textContent = product.ColorName;
    document.getElementById("productDescriptionHtmlSimple").textContent = product.DescriptionHtmlSimple;
    document.getElementById("addToCart").setAttribute("data-id") = product.Id;
}

  