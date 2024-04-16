'use client'

import { ContextProvider } from "../Context/cart.context"

interface ProviderProps {
    children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({children}) => {
    return (
        <ContextProvider>{children}</ContextProvider>    
    )
}

export default Provider