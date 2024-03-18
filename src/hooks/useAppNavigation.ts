import { useContext } from "react";
import { NavigateFunction } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function useAppNavigation(navigate: NavigateFunction):{
    goBack: () => void;
    gotoCategory: (category: string) => void;
    gotoProductDetails: (slug: string) => void;
    gotoCheckout: () => void;
}{
    const {cartItems} = useContext(CartContext);

    function goBack(){
        navigate(-1);
    }

    function gotoCategory(category: string){
        navigate(`/categories/${category}`);
        window.scrollTo(0, 0);
    }

    function gotoProductDetails(slug: string){
        navigate(`/products/${slug}`);
        window.scrollTo(0, 0);
    }

    function gotoCheckout(){
        cartItems.length > 0 && navigate('/checkout');
    }

    return {
        goBack,
        gotoCategory,
        gotoProductDetails,
        gotoCheckout,
    }
}