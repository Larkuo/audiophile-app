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

export function ProductDetailsPage() {
    const navigate = useNavigate();    

    const { screenDimensions } = useScreenDimensions();
    const { goBack } = useAppNavigation(navigate);
    const { showCartModal } = useContext(CartContext);

    const [cartQuantity, setCartQuantity] = useState(1);

    useEffect(() => {
        setCartQuantity(1);
    },[]);

    return (
        <div 
            className='product-details-page' 
            style={styles(screenDimensions).productPage}
        >
            <div className='page-header' style={styles(screenDimensions).pageHeader}>
                <AppHeader bottomBorder={false}/>
            </div>
            <div className='goback-row' style={styles(screenDimensions).goBackRow}>
                <span 
                    className='goback-button'
                    style={styles(screenDimensions).goBackText}
                    onClick={goBack}
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
