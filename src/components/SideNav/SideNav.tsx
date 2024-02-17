import React from 'react';
import { styles } from './SideNav.styles';
import AppNavLink from '../AppNavLink/AppNavLink';
import { textStyles } from '../../theme/Theme';

interface SiveNavProps {
    closeSidenav: () => void;
}

export default function SideNav({closeSidenav}:SiveNavProps) {
  return (
    <div className='side-nav' style={styles.sideNav}>
        <div className='nav-list' style={styles.navList}>
            <div className='side-nav-header' style={styles.sidenavHeader}>
                <a style={styles.closeButton} onClick={closeSidenav}>(x)</a>
            </div>
            <AppNavLink 
                path={'/'} 
                name='home' 
                onClick={closeSidenav}
                stylesOverride={styles.navLink}
            />
            <AppNavLink 
                path={'/headphones'} 
                name='headphones'
                onClick={closeSidenav}
                stylesOverride={styles.navLink}
            />
            <AppNavLink 
                path={'/speakers'} 
                name='speakers'
                onClick={closeSidenav}
                stylesOverride={styles.navLink}
            />
            <AppNavLink 
                path={'/earphones'} 
                name='earphones'
                onClick={closeSidenav}
                stylesOverride={styles.navLink}
            />
        </div>
    </div>
  )
}
