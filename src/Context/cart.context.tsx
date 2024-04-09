import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ProductInfo } from "../Components/ProductPage/ProductMenu/product.menu";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartProducts: ProductInfo[] | null
    handleAddProductToCart: (product: ProductInfo) => void
    handleRemoveProductFromCart: (product: ProductInfo) => void
}

interface Props {
    [propName: string]: any
}

export const CartContext = createContext<CartContextType | null> (null)

export const CartContextProvider = (props: Props) => {
    const [cartProducts,setCartProducts] = useState<ProductInfo[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('shoeShopProducts')
        const savedCartProducts: ProductInfo[] | null = JSON.parse(cartItems)

        setCartProducts(savedCartProducts)
    }, [])

    const handleAddProductToCart = useCallback((product: ProductInfo) => {
        setCartProducts((prev) => {
            let updatedCart;

            if(prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
 
            toast.success('Produto adicionado ao carrinho')
            localStorage.setItem('shoeShopProducts', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])

    const handleRemoveProductFromCart = useCallback((product: ProductInfo) => {
        if(cartProducts) {
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)

            toast.success('Produto removido do carrinho')
            localStorage.setItem('shoeShopProducts', JSON.stringify(filteredProducts))
        }
    },[cartProducts])

    const value = {
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart
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