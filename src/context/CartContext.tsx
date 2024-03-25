import React, {createContext, useState} from "react";
import { CartItemInterface } from "../hooks/useCartDetails";
import { useLocation } from "react-router-dom";

interface CartContextInterface{
    cartItems: CartItemInterface[];
    setCartItems: React.Dispatch<React.SetStateAction<CartItemInterface[]>>;
    showCartModal: boolean;
    toggleCartModal: () => void;
}

export const CartContext = createContext<CartContextInterface>({} as CartContextInterface);

export function CartContextProvider({children}:{children: React.ReactNode}){
    const { pathname } = useLocation();
    const [cartItems, setCartItems] = useState<CartItemInterface[]>([]);
    const [showCartModal, setShowCartModal] = useState(false);

    function toggleCartModal(){
        pathname !== '/checkout' && setShowCartModal(!showCartModal);
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