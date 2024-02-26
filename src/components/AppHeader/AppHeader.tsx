import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from './AppHeader.styles';
import AppNavLink from '../AppNavLink/AppNavLink';

import AppLogo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import BurgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

import { SCREEN_LIMITS } from '../../theme/Theme';
import SideNav from '../SideNav/SideNav';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';


export function AppHeader() {
  const {screenDimensions} = useScreenDimensions();

  const showBurger = screenDimensions.width <= SCREEN_LIMITS.tablet;
  const [showSideNav, setShowSideNav] = useState(false);
  
  return showBurger
  ?(
    <>
    {showSideNav && <SideNav closeSidenav={() => setShowSideNav(false)}/>}
    <div style={styles(screenDimensions).appHeader} className='app-header'>
      <div style={styles(screenDimensions).menuLogoGroup}>
        <img src={BurgerIcon} style={styles(screenDimensions).menuIcon} onClick={() => setShowSideNav(true)}/>

        <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
          <img src={AppLogo} alt={'audiophile logo'} style={styles(screenDimensions).appLogo}/>
        </Link>
      </div>

        <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
          <img src={CartIcon} style={styles(screenDimensions).cartIcon}/>
        </Link>
    </div>
    </>
  ):(
    <div style={styles(screenDimensions).appHeader} className='app-header'>
      <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
        <img src={AppLogo} style={styles(screenDimensions).appLogo}/>
      </Link>

      <div style={styles(screenDimensions).navBar} className='nav-bar'>
        <AppNavLink path={'/'} name='home'/>
        <AppNavLink path={'/headphones'} name='headphones'/>
        <AppNavLink path={'/speakers'} name='speakers'/>
        <AppNavLink path={'/earphones'} name='earphones'/>
      </div>

      <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
        <img src={CartIcon} style={styles(screenDimensions).cartIcon}/>
      </Link>
    </div>
  );
}