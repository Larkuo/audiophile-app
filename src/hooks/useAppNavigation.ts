import { useContext } from "react";
import { NavigateFunction } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function useAppNavigation(navigate: NavigateFunction):{
    goBack: () => void;
    gotoCategory: (category: string) => void;
    gotoProductDetails: (slug: string) => void;
    gotoCheckout: () => void;
}{
    const {cartItems, toggleCartModal} = useContext(CartContext);

    function goBack(){
        navigate(-1);
    }

    function gotoCategory(category: string){
        navigate(`/categories/${category}`);
    }

    function gotoProductDetails(slug: string){
        navigate(`/products/${slug}`);
    }

    function gotoCheckout(){
        toggleCartModal();
        cartItems.length > 0 && navigate('/checkout');
    }

    return {
        goBack,
        gotoCategory,
        gotoProductDetails,
        gotoCheckout,
    }
}