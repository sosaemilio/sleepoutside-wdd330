const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export function getProductsByCategory(category = "tents") {
  return fetch(baseURL + `products/search/${category}`)
    .then(convertToJson)
    .then((data) => data.Result);
}

export async function findProductById(id) {
  return fetch(baseURL + `product/${id}`)
    .then(convertToJson)
    .then((data) => data.Result);
}