import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import { DestinationInfo } from "../Components/Checkout/ShippingPage/shipping.page";
import { Product } from "..";

type ContextType = {
    //Export Local Storage
    cartProducts: Product[] | null
    wishlistProducts: Product[] | null
    destinations: DestinationInfo[] | null

    //Export Cart methods
    handleAddProductToCart: (product: Product) => void
    handleRemoveProductFromCart: (product: Product) => void
    handleCartQuantityIncrease: (product: Product) => void
    handleCartQuantityDecrease: (product: Product) => void

    //Export Wishlist methods
    handleAddProductToWishlist: (product: Product) => void
    handleRemoveProductFromWishlist: (product: Product) => void

    //Export Shipping methods
    handleAddDestination: (destination: DestinationInfo) => void
    handleRemoveDestination: (destination: DestinationInfo) => void
}

interface Props {
    [propName: string]: any
}

export const AppContext = createContext<ContextType | null> (null)

export const ContextProvider = (props: Props) => {
    const [cartProducts,setCartProducts] = useState<Product[] | null>(null)
    const [wishlistProducts,setWishlistProducts] = useState<Product[] | null>(null)
    const [destinations,setDestinations] = useState<DestinationInfo[] | null>(null)

    //-------------------------RETRIEVE INFO FROM LOCAL STORAGE-------------------------

    useEffect(() => {
        const cartItems: any = localStorage.getItem('cart')
        const savedCartProducts: Product[] | null = JSON.parse(cartItems)
        
        const wishlistItems: any = localStorage.getItem('wishlist')
        const savedWishlistItems: Product[] | null = JSON.parse(wishlistItems)
        
        const destinations: any = localStorage.getItem('shippingDestinations')
        const savedDestinations: DestinationInfo[] | null = JSON.parse(destinations)

        setCartProducts(savedCartProducts)
        setWishlistProducts(savedWishlistItems)
        setDestinations(savedDestinations)
    }, [])

    //-------------------------CART METHODS-------------------------

    const handleAddProductToCart = useCallback((product: Product) => {
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
    
    const handleRemoveProductFromCart = useCallback((product: Product) => {
        if(cartProducts) {
            const filteredProducts = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filteredProducts)
            
            toast.success('Produto removido do carrinho')
            localStorage.setItem('cart', JSON.stringify(filteredProducts))
        }
    },[cartProducts])

    const handleCartQuantityIncrease = useCallback((product: Product) => {
        let updatedCart;
        console.log(product.availableQuantity)

        if(product.quantity > product.availableQuantity) {
            return toast.error("Quantidade máxima atingida!")
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    },[cartProducts])

    const handleCartQuantityDecrease = useCallback((product: Product) => {
        let updatedCart;

        if(product.quantity <= 1) {
            return toast.error("Quantidade mínima atingida!")
        }

        if(cartProducts) {
            updatedCart = [...cartProducts]

            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)

            if(existingIndex > -1) {
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity
            }

            setCartProducts(updatedCart)
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        }
    },[cartProducts])

    //-------------------------WISHLIST METHODS-------------------------
    
    const handleAddProductToWishlist = useCallback((product: Product) => {
        setWishlistProducts((prev) => {
            if (!prev) {
                const updatedCart = [product];
                toast.success('Produto adicionado à lista de desejos!');
                localStorage.setItem('wishlist', JSON.stringify(updatedCart));
                return updatedCart;
            }
    
            const isProductInWishlist = prev.some((wishlistProduct) => wishlistProduct.name === product.name);
    
            if (isProductInWishlist) {
                toast.error('Produto já está na lista de desejos!');
                return prev;
            }
    
            const updatedCart = [...prev, product];
            toast.success('Produto adicionado à lista de desejos!');
            localStorage.setItem('wishlist', JSON.stringify(updatedCart));
            return updatedCart;
        })
    }, [])

    const handleRemoveProductFromWishlist = useCallback((product: Product) => {
        if(wishlistProducts) {
            const filteredProducts = wishlistProducts.filter((item) => {
                return item.name !== product.name
            })

            setWishlistProducts(filteredProducts)

            toast.success('Produto removido da lista de desejos')
            localStorage.setItem('wishlist', JSON.stringify(filteredProducts))
        }
    },[wishlistProducts])

    //-------------------------SHIPPING DESTINATIONS METHODS-------------------------

    const handleAddDestination = useCallback((destinations: DestinationInfo) => {
        setDestinations((prev) => {
            let updatedDestinations;
 
            if(prev) {
                updatedDestinations = [...prev, destinations]
            } else {
                updatedDestinations = [destinations]
            }
 
            toast.success('Ponto de entrega adicionado!')
            localStorage.setItem('shippingDestinations', JSON.stringify(updatedDestinations))
            return updatedDestinations
        })
    }, [])

    const handleRemoveDestination = useCallback((shippingDestination: DestinationInfo) => {
        if(destinations) {
            const filteredShippingDestinations = destinations.filter((destination) => {
                return shippingDestination.destinationId !== destination.destinationId
            })

            setDestinations(filteredShippingDestinations)

            toast.success('Ponto de entrega removido!')
            localStorage.setItem('shippingDestinations', JSON.stringify(filteredShippingDestinations))
        }
    },[destinations])

    //-------------------------SAVE FUNCTION VALUES-------------------------

    const value = {
        cartProducts,
        wishlistProducts,
        destinations,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQuantityIncrease,
        handleCartQuantityDecrease,
        handleAddProductToWishlist,
        handleRemoveProductFromWishlist,
        handleAddDestination,
        handleRemoveDestination,
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