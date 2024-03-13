import { styles } from './YX1HomeSection.styles';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { SCREEN_LIMITS } from '../../theme/Theme';

import yx1_desktop from '../../assets/home/desktop/image-earphones-yx1.jpg';
import yx1_tablet from '../../assets/home/tablet/image-earphones-yx1.jpg';
import yx1_mobile from '../../assets/home/mobile/image-earphones-yx1.jpg';
import { AppButton } from '..';
import { useNavigate } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export function YX1HomeSection() {
    const { screenDimensions } = useScreenDimensions();

    const navigate = useNavigate();
    const { gotoProductDetails } = useAppNavigation(navigate);

    const yx1Image = screenDimensions.width <= SCREEN_LIMITS.mobile
                            ? yx1_mobile
                            : screenDimensions.width <= SCREEN_LIMITS.tablet
                            ? yx1_tablet : yx1_desktop;                     

    return (
        <div className='yx1-section' style={styles(screenDimensions).yx1Section}>
            <img
                src={yx1Image}
                alt='yx1 earphones image'
                style={styles(screenDimensions).productImage}
            />
            <div className='yx1-right-container' style={styles(screenDimensions).rightContainer}>
                <h1 className='zx7-section-title' style={styles(screenDimensions).yx1Title}>yx1 earphones</h1>
                <AppButton 
                    mode={screenDimensions.width <= SCREEN_LIMITS.tablet
                            ? 'secondary' : 'black-fill'} 
                    label='see product' 
                    stylesOverride={styles(screenDimensions).seeProductButton}
                    onClick={() => gotoProductDetails('yx1-earphones')}
                />
            </div>
        </div>
    );
}
