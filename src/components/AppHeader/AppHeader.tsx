import { useContext } from 'react';
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
import { SideNavContext } from '../../context/SideNavContext';
import { CartModal } from '..';


export function AppHeader({
  bottomBorder = true,
}:{
  bottomBorder?: boolean;
}) {
  const {screenDimensions} = useScreenDimensions();

  const showBurger = screenDimensions.width <= SCREEN_LIMITS.tablet;

  const { cartItems, toggleCartModal, showCartModal } = useContext(CartContext);
  const { showSideNav, toggleSideNav} = useContext(SideNavContext);

  const headerStyle = {
    ...styles(screenDimensions).appHeader,
    borderBottom: bottomBorder? `1px solid ${colors.borderGray}` : 'none',
  }

  function CartIcon(){
    return(
      <button 
        className="logo-link" style={styles(screenDimensions).logoLink}
        onClick={toggleCartModal}
      >
        {!showCartModal && cartItems.length > 0 && 
          <div className='cart-count-bubble' style={styles(screenDimensions).countBubble}>
            {cartItems.length}
          </div>
        }
        <img src={CartSvg} style={styles(screenDimensions).cartIcon}/>
      </button>
    );
  }
  
  return showBurger
  ?(
    <>
      {showCartModal && <CartModal />}
      {showSideNav && <SideNav closeSidenav={toggleSideNav}/>}
      <div style={headerStyle} className='app-header'>
        <div style={styles(screenDimensions).menuLogoGroup}>
          <img src={BurgerIcon} style={styles(screenDimensions).menuIcon} onClick={toggleSideNav}/>

          <Link to={'/'} className="logo-link" style={styles(screenDimensions).logoLink}>
            <img src={AppLogo} alt={'audiophile logo'} style={styles(screenDimensions).appLogo}/>
          </Link>
        </div>

        <CartIcon />
      </div>
    </>
  ):(
    <>
      {showCartModal && <CartModal />}
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
    </>
  );
}