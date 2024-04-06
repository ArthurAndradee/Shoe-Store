import { useState } from "react";
import { createContext } from "vm";
import { shoes } from "../Product/Props/shoes";

export const ShopContext = createContext(undefined);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < shoes.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    return (
        <ShopContextProvider>
            {props.children}
        </ShopContextProvider>
    )
}