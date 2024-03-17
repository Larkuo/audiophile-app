import { useContext, useEffect, useState } from "react";
import { LOCAL_STORAGE_CONSTS } from "../resources/LocalStorageConstants";
import { CartContext } from "../context/CartContext";

export interface CartItemInterface{
    slug: string;
    name: string;
    price: number;
    quantity: number;
}

export function useCartDetails():{
    cartCount: number;
    cartTotal: number;
    cartItems: CartItemInterface[];
    addCartItem: (neeCartItem: CartItemInterface) => void;
    updateCartItem: (itemSlug: string, newCartQuantity: number) => void;
    deleteCartItem: (itemSlug: string) => void;
    emptyCart: () => void;
}{
    const { cartItems, setCartItems } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [refresh, setRefresh] = useState(false);

    function toggleRefresh(){
        setRefresh(!refresh);
    }

    function getCartDetails(){
        const cartList: CartItemInterface[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartList) || '[]');
        const cartListCount = Number(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartCount));
        const cartListTotal = Number(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartTotal));

        if(cartList.length > 0){
            setCartItems(cartList);
            setCartCount(cartListCount);
            setCartTotal(cartListTotal);
        }else{
            setCartItems([]);
            setCartCount(0);
            setCartTotal(0);
        }
    }

    function updateCart(cartList: CartItemInterface[]){
        const cartListCount = cartList.length;

        let cartListTotal = 0;
        cartList.forEach((listItem) => {
            cartListTotal += (listItem.price * listItem.quantity);
        });

        localStorage.setItem(LOCAL_STORAGE_CONSTS.cartList, JSON.stringify(cartList));
        localStorage.setItem(LOCAL_STORAGE_CONSTS.cartCount, JSON.stringify(cartListCount));
        localStorage.setItem(LOCAL_STORAGE_CONSTS.cartTotal, JSON.stringify(cartListTotal));

        toggleRefresh();
    }

    function emptyCart(){
        updateCart([]);
    }

    function updateCartItem(itemSlug: string, newCartQuantity: number){
        const updatedCartList: CartItemInterface[] = cartItems.map((currentCartItem) => 
            currentCartItem.slug === itemSlug 
                ? {...currentCartItem, quantity: newCartQuantity}
                : currentCartItem
        );

        updateCart(updatedCartList);
    }

    function addCartItem(newCartItem: CartItemInterface){
        const cartItem = cartItems.find((searchElement) => searchElement.slug === newCartItem.slug);
        if(cartItem){
            updateCartItem(
                newCartItem.slug, 
                newCartItem.quantity + cartItem.quantity
            );
        }else{
            const cartList: CartItemInterface[] = [...cartItems, newCartItem];
            updateCart(cartList);
        }
    }

    function deleteCartItem(itemSlug: string){
        const updatedCartList: CartItemInterface[] = cartItems.filter((currentCartItem) => 
            currentCartItem.slug !== itemSlug
        );

        updateCart(updatedCartList);
    }

    useEffect(() => {
        getCartDetails();
    },[refresh, cartCount, cartTotal]);

    return{
        cartCount,
        cartTotal,
        cartItems,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        emptyCart,
    }
}