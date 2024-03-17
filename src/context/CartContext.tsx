import React, {createContext, useState} from "react";
import { CartItemInterface } from "../hooks/useCartDetails";

interface CartContextInterface{
    cartItems: CartItemInterface[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemInterface[]>>;
    showCartModal: boolean;
    toggleCartModal: () => void;
}

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export function CartContextProvider({children}:{children: React.ReactNode}){
    const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);
    const [showCartModal, setShowCartModal] = useState(false);

    function toggleCartModal(){
        setShowCartModal(!showCartModal);
    }

    return(
        <CartContext.Provider value={{
            cartItems, 
            setCartItems,
            showCartModal,
            toggleCartModal,
        }}>
            {children}
        </CartContext.Provider>
    );
}