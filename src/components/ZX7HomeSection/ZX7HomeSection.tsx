import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { styles } from './ZX7HomeSection.styles';
import { AppButton } from '..';
import { SCREEN_LIMITS } from '../../theme/Theme';
import { useNavigate } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';

export function ZX7HomeSection() {
    const { screenDimensions } = useScreenDimensions();

    const navigate = useNavigate();
    const { gotoProductDetails } = useAppNavigation(navigate);
    
    return (
        <div className='zx7-speaker-section' style={styles(screenDimensions).zx7SpeakerSection}>
            <h1 className='zx7-section-title' style={styles(screenDimensions).zx7Title}>zx7 speaker</h1>
            <AppButton 
                mode={screenDimensions.width <= SCREEN_LIMITS.tablet
                        ? 'secondary' : 'black-fill'} 
                label='see product' 
                stylesOverride={styles(screenDimensions).seeProductButton}
                onClick={() => gotoProductDetails('zx7-speaker')}
            />
        </div>
    );
}
