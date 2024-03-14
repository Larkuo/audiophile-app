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
    ProductFeaturesRow
} from '../../components';

export function ProductDetailsPage() {
    const navigate = useNavigate();    

    const { screenDimensions } = useScreenDimensions();
    const { goBack } = useAppNavigation(navigate);

    return (
        <div className='product-details-page' style={styles(screenDimensions).productPage}>
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
            <ProductDetailsInfoCard />
            <ProductFeaturesRow />
            <AdditionalProductImages />
            <OtherProductsGroup />
            <CategoriesCardGroup />
            <AppFooter />
        </div>
    );
}
