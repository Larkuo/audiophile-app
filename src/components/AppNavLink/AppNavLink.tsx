import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { colors } from '../../theme/Theme';
import { useHover } from '../../hooks/useHover';

interface AppNavLinkProps{
    path: string;
    name: string;
    onClick?: () => void;
    stylesOverride?: object;
    
}

function AppNavLink({
    path,
    name,
    onClick,
    stylesOverride,
}: AppNavLinkProps) {
  const location = useLocation();
  const { pathname } = location;

  const IS_ACTIVE = path !== '/' && pathname === path;

  const {
      hover, 
      setHoverTrue, 
      setHoverFalse
  } = useHover();
  
  const styles = {
    navLink: {
        textDecoration: 'none',
        color: IS_ACTIVE || hover? colors.primary : colors.white,
        fontSize: '15px',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
  };

  const linkStyle = {
    ...styles.navLink, 
    ...stylesOverride
  }

  return (
    <Link 
        to={path}
        className='nav-link' 
        style={linkStyle}
        onClick={onClick}
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
    >{name}</Link>
  )
}

export default AppNavLink;