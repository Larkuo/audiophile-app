import { NavigateFunction } from "react-router-dom";

export function useAppNavigation(navigate: NavigateFunction):{
    goBack: () => void;
    gotoCategory: (category: string) => void;
    gotoProductDetails: (slug: string) => void;
}{
    function goBack(){
        navigate(-1);
    }

    function gotoCategory(category: string){
        navigate(`/categories/${category}`);
    }

    function gotoProductDetails(slug: string){
        navigate(`/products/${slug}`)
    }

    return {
        goBack,
        gotoCategory,
        gotoProductDetails,
    }
}