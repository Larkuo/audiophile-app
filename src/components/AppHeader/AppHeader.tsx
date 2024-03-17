import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from './AppHeader.styles';
import AppNavLink from '../AppNavLink/AppNavLink';

import AppLogo from '../../assets/shared/desktop/logo.svg';
import CartSvg from '../../assets/shared/desktop/icon-cart.svg';
import BurgerIcon from '../../assets/shared/tablet/icon-hamburger.svg';

import { SCREEN_LIMITS, colors } from '../../theme/Theme';
import SideNav from '../SideNav/SideNav';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { APPNAV_DATA, AppNavDataProps } from '../../navigation/AppNavbarData';
import { CartContext } from '../../context/CartContext';


export function AppHeader({
  bottomBorder = true,
}:{
  bottomBorder?: boolean;
}) {
  const {screenDimensions} = useScreenDimensions();

  const showBurger = screenDimensions.width <= SCREEN_LIMITS.tablet;
  const [showSideNav, setShowSideNav] = useState(false);

  const headerStyle = {
    ...styles(screenDimensions).appHeader,
    borderBottom: bottomBorder? `1px solid ${colors.borderGray}` : 'none',
  }

  function CartIcon(){
    const { cartItems, toggleCartModal } = useContext(CartContext);

    return(
      <div 
        className="logo-link" style={styles(screenDimensions).logoLink}
        onClick={toggleCartModal}
      >
        {cartItems.length > 0 && 
          <div className='cart-count-bubble' style={styles(screenDimensions).countBubble}>
            {cartItems.length}
          </div>
        }
        <img src={CartSvg} style={styles(screenDimensions).cartIcon}/>
      </div>
    );
  }
  
  return showBurger
  ?(
    <>
    {showSideNav && <SideNav closeSidenav={() => setShowSideNav(false)}/>}
    <div style={headerStyle} className='app-header'>
      <div style={styles(screenDimensions).menuLogoGroup}>
        <img src={BurgerIcon} style={styles(screenDimensions).menuIcon} onClick={() => setShowSideNav(true)}/>

        <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
          <img src={AppLogo} alt={'audiophile logo'} style={styles(screenDimensions).appLogo}/>
        </Link>
      </div>

      <CartIcon />
    </div>
    </>
  ):(
    <div style={headerStyle} className='app-header'>
      <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
        <img src={AppLogo} style={styles(screenDimensions).appLogo}/>
      </Link>

      <div style={styles(screenDimensions).navBar} className='nav-bar'>
        {APPNAV_DATA.map((nav: AppNavDataProps, index: number) => 
          <AppNavLink 
            key={index}
            path={nav.path} 
            name={nav.name} 
          />
        )}
      </div>

      <CartIcon />
    </div>
  );
}