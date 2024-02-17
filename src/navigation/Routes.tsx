import { ReactNode } from "react";
import { 
    EarphonesPage, 
    HeadphonesPage, 
    HomePage, 
    SpeakersPage 
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
        path: "/headphones",
        element: <HeadphonesPage />
    },
    {
        key: 3,
        path: "/speakers",
        element: <SpeakersPage />
    },
    {
        key: 4,
        path: "/earphones",
        element: <EarphonesPage />
    },
];