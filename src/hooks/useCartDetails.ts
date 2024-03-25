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
    cartItems: CartItemInterface[];
    cartCount: number;
    cartTotal: number;
    cartShipping: number;
    cartTax: number;
    cartGrandTotal: number;
    addCartItem: (neeCartItem: CartItemInterface) => void;
    updateCartItem: (itemSlug: string, newCartQuantity: number) => void;
    deleteCartItem: (itemSlug: string) => void;
    emptyCart: () => void;
}{
    const { 
        cartItems, 
        setCartItems, 
    } = useContext(CartContext);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);

    const [cartShipping, setCartShipping] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartGrandTotal, setCartGrandTotal] = useState(0);

    const [refresh, setRefresh] = useState(false);

    function toggleRefresh(){
        setRefresh(!refresh);
    }

    function getCartDetails(){
        const cartList: CartItemInterface[] = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartList) || '[]');
        const cartListCount = Number(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartCount));
        const cartListTotal = Number(localStorage.getItem(LOCAL_STORAGE_CONSTS.cartTotal));
        const cartListTax = 0.1992 * cartListTotal;
        const cartListShipping = 50;
        const cartListGrandTotal = cartListTotal + cartListShipping;

        if(cartList.length > 0){
            setCartItems(cartList);
            setCartCount(cartListCount);
            setCartTotal(cartListTotal);
            setCartShipping(cartListShipping);
            setCartTax(cartListTax);
            setCartGrandTotal(cartListGrandTotal);
        }else{
            setCartItems([]);
            setCartCount(0);
            setCartTotal(0);
            setCartShipping(0);
            setCartTax(0);
            setCartGrandTotal(0);
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

        setCartItems([]);
        toggleRefresh();
    }

    function emptyCart(){
        updateCart([]);
    }

    function formatCartItemName(itemName: string){
        const newName = itemName.toLowerCase()
                            .replace('mark', 'mk')
                            .replace('earphones', '')
                            .replace('headphones', '')
                            .replace('speaker', '')
                            .replace('wireless', '');

        return newName.toUpperCase();
    }

    function updateCartItem(itemSlug: string, newCartQuantity: number){
        if(newCartQuantity > 0){
            const updatedCartList: CartItemInterface[] = cartItems.map((currentCartItem) => 
                currentCartItem.slug === itemSlug 
                    ? {...currentCartItem, quantity: newCartQuantity}
                    : currentCartItem
            );

            updateCart(updatedCartList);
        }else{
            deleteCartItem(itemSlug);
        }
    }

    function addCartItem(newCartItem: CartItemInterface){
        const cartItem = cartItems.find((searchElement) => searchElement.slug === newCartItem.slug);
        if(cartItem){
            updateCartItem(
                newCartItem.slug, 
                newCartItem.quantity + cartItem.quantity
            );
        }else{
            const cartList: CartItemInterface[] = [
                ...cartItems, 
                {...newCartItem, name: formatCartItemName(newCartItem.name)}
            ];
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
    },[refresh]);

    return{
        cartItems,
        cartCount,
        cartTotal,
        cartShipping,
        cartTax,
        cartGrandTotal,
        addCartItem,
        updateCartItem,
        deleteCartItem,
        emptyCart,
    }
}