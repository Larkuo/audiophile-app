import { SCREEN_LIMITS } from '../../theme/Theme';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';
import { styles } from './ZX9HomeSection.styles';
import { AppButton } from '..';

import zx9_desktop from '../../assets/home/desktop/image-speaker-zx9.png';
import zx9_tablet from '../../assets/home/tablet/image-speaker-zx9.png';
import zx9_mobile from '../../assets/home/mobile/image-speaker-zx9.png';
import { useNavigate } from 'react-router-dom';
import { useAppNavigation } from '../../hooks/useAppNavigation';


export function ZX9HomeSection() {
    const {screenDimensions} = useScreenDimensions();

    const navigate = useNavigate();
    const { gotoProductDetails } = useAppNavigation(navigate);

    const zx9Image = screenDimensions.width <= SCREEN_LIMITS.mobile? zx9_mobile
            : screenDimensions.width <= SCREEN_LIMITS.tablet? zx9_tablet 
            : zx9_desktop;


    return (
        <div className='zx9-speaker-section' style={styles(screenDimensions).zx9SpeakerSection}>
            <img 
                src={zx9Image} 
                className='zx9-image' 
                style={styles(screenDimensions).zx9Image}
                alt={'zx9 speaker image'}
            />
            <div className='zx9-right' style={styles(screenDimensions).zx9Right}>
                <h1 style={styles(screenDimensions).zx9Title}>ZX9 SPEAKER</h1>
                <span style={styles(screenDimensions).zx9Description}>
                    Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
                </span>
                <AppButton 
                    label={'see product'} 
                    mode='black-fill' 
                    stylesOverride={styles(screenDimensions).seeProductButton}
                    onClick={() => gotoProductDetails('zx9-speaker')}
                />
            </div>
        </div>
    );
}
