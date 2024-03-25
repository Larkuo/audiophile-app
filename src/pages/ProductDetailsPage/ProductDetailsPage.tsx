import { useNavigate } from 'react-router-dom';
import { styles } from './ProductDetailsPage.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { useAppNavigation } from '../../hooks/useAppNavigation';
import { 
    AdditionalProductImages,
    AppFooter, 
    AppHeader, 
    CategoriesCardGroup, 
    OtherProductsGroup, 
    ProductDetailsInfoCard,
    ProductFeaturesRow,
    CartModal
} from '../../components';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useHover } from '../../hooks/useHover';
import { colors } from '../../theme/Theme';
import { SideNavContext } from '../../context/SideNavContext';

export function ProductDetailsPage() {
    const navigate = useNavigate();    

    const { screenDimensions } = useScreenDimensions();
    const { goBack } = useAppNavigation(navigate);
    const { hover, setHoverTrue, setHoverFalse } = useHover();

    const { showCartModal } = useContext(CartContext);
    const { showSideNav } = useContext(SideNavContext);

    const [cartQuantity, setCartQuantity] = useState(1);

    useEffect(() => {
        setCartQuantity(1);
    },[]);

    return (
        <div 
            className='product-details-page' 
            style={{
                ...styles(screenDimensions).productPage,
                overflowY: showSideNav || showCartModal? 'hidden' : 'scroll',
                height: showSideNav || showCartModal? '100vh' : 'auto',
            }}
        >
            <div className='page-header' style={styles(screenDimensions).pageHeader}>
                <AppHeader bottomBorder={false}/>
            </div>
            <div className='goback-row' style={styles(screenDimensions).goBackRow}>
                <span 
                    className='goback-button'
                    style={{
                        ...styles(screenDimensions).goBackText,
                        color: hover? colors.primary : colors.borderGray,
                    }}
                    onClick={goBack}
                    onMouseEnter={setHoverTrue}
                    onMouseLeave={setHoverFalse}
                >Go Back</span>
            </div>           
            <ProductDetailsInfoCard
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
            />
            <ProductFeaturesRow />
            <AdditionalProductImages />
            <OtherProductsGroup />
            <CategoriesCardGroup />
            <AppFooter />
            {showCartModal && <CartModal />}
        </div>
    );
}
