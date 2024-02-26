import { useEffect, useState } from "react";
import PAGE_DATA from '../resources/data.json';

interface AppImageProps{
    mobile: string;
    tablet: string;
    desktop: string;
}

export interface CategoryItemProps{
    id: number;
    slug: string;
    name: string;
    image: AppImageProps;
    category: string;
    categoryImage: AppImageProps;
    new: boolean;
    price: number;
    description: string;
    includes: {
        quantity: number
        item: string
    }[];
    gallery: {
        first: AppImageProps
        second: AppImageProps
        third: AppImageProps
    };
    others: {
        slug: string
        name: string
        image: AppImageProps
    }[];
}

export function useCategoryDetails(pageCategory: string):{
    categoryItems: CategoryItemProps[]
}{
    const [categoryItems, setCategoryItems] = useState<CategoryItemProps[]>([]);

    function getCategoryItems(){
        const data = PAGE_DATA.filter((item: CategoryItemProps) => item.category === pageCategory);
        console.log({data});
        setCategoryItems(data);
    }

    useEffect(() => { 
        getCategoryItems();

        console.log({pageCategory}); 
        console.log({categoryItems}, categoryItems.length);

        return () => {
            setCategoryItems([]);
        }
    }, [pageCategory]);

    return {
        categoryItems
    }
}