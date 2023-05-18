import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";
import { loadHeaderFooter } from "./utils.mjs";
let productID = getParam("product");
productDetails(productID);
