import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { colors } from '../../theme/Theme';
import { useHover } from '../../hooks/useHover';
import { useProductDetails } from '../../hooks/useProductDetails';

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
  const { pageCategory, productSlug } = useParams();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if(productSlug){
      const productSlugSplit = productSlug.split('-');
      const productCategory = productSlugSplit[productSlugSplit.length-1];
      
      setIsActive(path !== '/' && path.includes(productCategory));
    }else{
      setIsActive(path.includes(pageCategory || '.'));
    }
  },[pageCategory, productSlug])

  const {
      hover, 
      setHoverTrue, 
      setHoverFalse
  } = useHover();
  
  const styles = {
    navLink: {
        textDecoration: 'none',
        color: isActive || hover? colors.primary : colors.white,
        fontSize: '15px',
        fontWeight: '900',
        textTransform: 'uppercase'  as any,
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