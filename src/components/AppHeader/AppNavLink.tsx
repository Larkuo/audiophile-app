import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/Theme';
import { useHover } from '../../hooks/useHover';

interface AppNavLinkProps{
    path: string;
    name: string;
    
}

function AppNavLink({
    path,
    name,
}: AppNavLinkProps) {
  const {
      hover, 
      setHoverTrue, 
      setHoverFalse
  } = useHover();
  
  const styles = {
    navLink: {
        textDecoration: 'none',
        color: hover? colors.primary : colors.white,
        fontSize: '15px',
        fontWeight: '900',
        textTransform: 'uppercase',
    },
  };

  return (
    <Link 
        to={path}
        className='nav-link' 
        style={styles.navLink}
        onMouseEnter={setHoverTrue}
        onMouseLeave={setHoverFalse}
    >{name}</Link>
  )
}

export default AppNavLink;