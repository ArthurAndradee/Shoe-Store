import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { ProductInfo } from "../Components/ProductPage/ProductMenu/product.menu";
import { toast } from "react-hot-toast";

type ContextType = {
    cartProducts: ProductInfo[] | null
    wishlistProducts: ProductInfo[] | null
    handleAddProductToCart: (product: ProductInfo) => void
    handleRemoveProductFromCart: (product: ProductInfo) => void
    handleAddProductToWishlist: (product: ProductInfo) => void
    handleRemoveProductFromWishlist: (product: ProductInfo) => void
}

interface Props {
    [propName: string]: any
}

export const AppContext = createContext<ContextType | null> (null)

export const ContextProvider = (props: Props) => {
    const [cartProducts,setCartProducts] = useState<ProductInfo[] | null>(null)
    const [wishlistProducts,setWishlistProducts] = useState<ProductInfo[] | null>(null)

    useEffect(() => {
        const cartItems: any = localStorage.getItem('cart')
        const savedCartProducts: ProductInfo[] | null = JSON.parse(cartItems)
        
        const wishlistItems: any = localStorage.getItem('wishlist')
        const savedWishlistItems: ProductInfo[] | null = JSON.parse(wishlistItems)

        setCartProducts(savedCartProducts)
        setWishlistProducts(savedWishlistItems)
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
            localStorage.setItem('cart', JSON.stringify(updatedCart))
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
            localStorage.setItem('cart', JSON.stringify(filteredProducts))
        }
    },[cartProducts])

    //-------------------------WISHLIST METHODS-------------------------
    
    const handleAddProductToWishlist = useCallback((product: ProductInfo) => {
        setWishlistProducts((prev) => {
            let updatedCart;
 
            if(prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
 
            toast.success('Produto adicionado à lista de desejos!')
            localStorage.setItem('wishlist', JSON.stringify(updatedCart))
            return updatedCart
        })
    }, [])

    const handleRemoveProductFromWishlist = useCallback((product: ProductInfo) => {
        if(wishlistProducts) {
            const filteredProducts = wishlistProducts.filter((item) => {
                return item.id !== product.id
            })

            setWishlistProducts(filteredProducts)

            toast.success('Produto removido da lista de desejos')
            localStorage.setItem('wishlist', JSON.stringify(filteredProducts))
        }
    },[wishlistProducts])

    const value = {
        cartProducts,
        wishlistProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleAddProductToWishlist,
        handleRemoveProductFromWishlist
    }

    return <AppContext.Provider value={value} {...props}/>
}

export const useLocalStorage = () => {
    const context = useContext(AppContext)
    
    if(context === null) {
        throw new Error("UseCart must be used within a ContextProvider")
    }

    return context
}