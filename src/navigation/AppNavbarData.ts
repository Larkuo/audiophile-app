export interface AppNavDataProps{
    path: string;
    name: string;
}

export const APPNAV_DATA: AppNavDataProps[] = [
    {name: 'home', path: '/'},
    {name: 'headphones', path: '/categories/headphones'},
    {name: 'speakers', path: '/categories/speakers'},
    {name: 'earphones', path: '/categories/earphones'}
];