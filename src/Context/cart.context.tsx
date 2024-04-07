import { createContext, useCallback, useContext, useState } from "react";
import { ProductInfo } from "../Components/Product UI/ProductMenu/product.menu";

type CartContextType = {
    cartTotalQty: number
    cartProducts: ProductInfo[] | null
    handleAddProductToCart: (product: ProductInfo) => void
}

interface Props {
    [propName: string]: any
}

export const CartContext = createContext<CartContextType | null> (null)

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [cartProducts,setCartProducts] = useState<ProductInfo[] | null>(null)

    const handleAddProductToCart = useCallback((product: ProductInfo) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }

            return updatedCart
        })
    }, [])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart
    }

    return <CartContext.Provider value={value} {...props}/>
}

export const useCart = () => {
    const context = useContext(CartContext)
    
    if(context === null) {
        throw new Error("UseCart must be used within a CartContextProvider")
    }

    return context
}