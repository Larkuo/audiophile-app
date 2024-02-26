import { useEffect, useState } from "react";
import { CategoryItemProps } from "./useCategoryDetails";
import PAGE_DATA from '../resources/data.json';

export function useProductDetails(pageSlug: string):{
    productDetails: CategoryItemProps
}{

    const [productDetails, setProductDetails] = useState<CategoryItemProps>({} as CategoryItemProps);

    function getProductDetails(){
        const filteredData = PAGE_DATA.filter((item: CategoryItemProps) => item.slug === pageSlug);
        if(filteredData.length > 0){
            setProductDetails(filteredData[0]);
        }
    }

    useEffect(() => {
        getProductDetails();
    },[pageSlug]);

    return{
        productDetails
    }
}