import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from './AppHeader.styles';
import AppNavLink from './AppNavLink';

import AppLogo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import BurgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

import { SCREEN_LIMITS, SCREEN_WIDTH } from '../../theme/Theme';


export function AppHeader() {
  const showBurger = SCREEN_WIDTH <= SCREEN_LIMITS.tablet;
  
  return showBurger
  ?(
    <div style={styles.appHeader} className='app-header'>
      <div style={styles.menuLogoGroup}>
        <img src={BurgerIcon} style={styles.menuIcon}/>

        <Link to={'/'} className="logo-link" style={styles.logoLink}>
          <img src={AppLogo} style={styles.appLogo}/>
        </Link>
      </div>

        <Link to={'/'} className="logo-link" style={styles.logoLink}>
          <img src={CartIcon} style={styles.cartIcon}/>
        </Link>
    </div>
  ):(
    <div style={styles.appHeader} className='app-header'>
      <Link to={'/'} className="logo-link" style={styles.logoLink}>
        <img src={AppLogo} style={styles.appLogo}/>
      </Link>

      <div style={styles.navBar} className='nav-bar'>
        <AppNavLink path={'/'} name='home'/>
        <AppNavLink path={'/headphones'} name='headphones'/>
        <AppNavLink path={'/speakers'} name='speakers'/>
        <AppNavLink path={'/earphones'} name='earphones'/>
      </div>

      <Link to={'/'} className="logo-link" style={styles.logoLink}>
        <img src={CartIcon} style={styles.cartIcon}/>
      </Link>
    </div>
  );
}