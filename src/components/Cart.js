import { cartContext } from "../context/cartContext";
import { useContext } from "react";

export const Cart = ()=>{
    const cart = useContext(cartContext);
    return(
        <h1>
            {cart}
        </h1>
    )
}