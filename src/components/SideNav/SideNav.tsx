import React from 'react';
import { styles } from './SideNav.styles';
import AppNavLink from '../AppNavLink/AppNavLink';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

interface SiveNavProps {
    closeSidenav: () => void;
}

export default function SideNav({closeSidenav}:SiveNavProps) {
    const { screenDimensions } = useScreenDimensions();

    return (
        <div className='side-nav' style={styles(screenDimensions).sideNav}>
            <div className='nav-list' style={styles(screenDimensions).navList}>
                <div className='side-nav-header' style={styles(screenDimensions).sidenavHeader}>
                    <a style={styles(screenDimensions).closeButton} onClick={closeSidenav}>(x)</a>
                </div>
                <AppNavLink 
                    path={'/'} 
                    name='home' 
                    onClick={closeSidenav}
                    stylesOverride={styles(screenDimensions).navLink}
                />
                <AppNavLink 
                    path={'/headphones'} 
                    name='headphones'
                    onClick={closeSidenav}
                    stylesOverride={styles(screenDimensions).navLink}
                />
                <AppNavLink 
                    path={'/speakers'} 
                    name='speakers'
                    onClick={closeSidenav}
                    stylesOverride={styles(screenDimensions).navLink}
                />
                <AppNavLink 
                    path={'/earphones'} 
                    name='earphones'
                    onClick={closeSidenav}
                    stylesOverride={styles(screenDimensions).navLink}
                />
            </div>
        </div>
    );
}
