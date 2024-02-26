import { ReactNode } from "react";
import { 
    CategoryPage,
    HomePage, 
    ProductDetailsPage, 
} from "../pages";

export interface AppRoutesInterface{
    key: number;
    path: string;
    element: ReactNode;
}

export const APP_ROUTES: AppRoutesInterface[] = [
    {
        key: 0,
        path: "/*",
        element: <HomePage />
    },
    {
        key: 1,
        path: "/",
        element: <HomePage />
    },
    {
        key: 2,
        path: "/categories/:pageCategory",
        element: <CategoryPage />
    },
    {
        key: 3,
        path: "/products/:productSlug",
        element: <ProductDetailsPage />
    },
];