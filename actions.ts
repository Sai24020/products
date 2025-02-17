"use server";

import { Products } from "./interfaces";

const API_ENDPOINT = "https://dummyjson.com/products";

export const fetchProduct = async () => {
  const res = await fetch(API_ENDPOINT);
  if (!res.ok) {
   // throw new Error("Failed to fetch products");
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }
  const data: Products = await res.json();
  console.log(data);
  return data;
};


/*import { Products } from "./interfaces";

const API_ENDPOINT = "https://dummyjson.com/products"
export const fetchRecipe = async () => {
    const res = await fetch(API_ENDPOINT);
    const data: Products = await res.json();
    return data
}*/