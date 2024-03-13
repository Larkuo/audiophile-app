import { styles } from './HomePageHero.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { AppButton, AppHeader } from '..';
import { useNavigate } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export function HomePageHero() {
    const navigate = useNavigate();
    const {screenDimensions} = useScreenDimensions();
    const { gotoProductDetails } = useAppNavigation(navigate); 
    
    return (
        <div className='header-hero-section' style={styles(screenDimensions).headerHeroSection}>
            <AppHeader />
            <div className='hero-section' style={styles(screenDimensions).heroSection}>
            <h2 className='new-product' style={styles(screenDimensions).newProduct}>NEW PRODUCT</h2>
            <h1 className='product-name' style={styles(screenDimensions).productName}>XX99 Mark II Headphones</h1>
            <span className='hero-description' style={styles(screenDimensions).heroDescription}>
                Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
            </span>
            <AppButton 
                label='see product' 
                mode='primary' 
                stylesOverride={styles(screenDimensions).heroSeeProductButton}
                onClick={() => gotoProductDetails('xx99-mark-two-headphones')}
            />
            </div>
        </div>
    );
}
