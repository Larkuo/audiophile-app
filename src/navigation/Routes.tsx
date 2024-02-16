import { ReactNode } from "react";
import { HomePage, TestPage } from "../pages";

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
        path: "/test",
        element: <TestPage />
    },
];