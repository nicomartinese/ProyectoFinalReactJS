import { productos } from "../productos"

export const productsDelayed = new Promise((resolve) => {
    resolve(productos);
})