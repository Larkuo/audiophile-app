import React, {createContext, useState} from "react";

interface SideNavContextInterface{
    showSideNav: boolean;
    toggleSideNav: () => void;
}

export const SideNavContext = createContext<SideNavContextInterface>({} as SideNavContextInterface);

export function SideNavContextProvider({children}:{children: React.ReactNode}){
    const [showSideNav, setShowSideNav] = useState(false);

    function toggleSideNav(){
        setShowSideNav(!showSideNav);
    }

    return(
        <SideNavContext.Provider value={{
            showSideNav,
            toggleSideNav,
        }}>
            {children}
        </SideNavContext.Provider>
    );
}