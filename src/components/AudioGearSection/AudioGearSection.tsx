import React from 'react';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';

import BG_desktop from '../../assets/shared/desktop/image-best-gear.jpg';
import BG_tablet from '../../assets/shared/tablet/image-best-gear.jpg';
import BG_mobile from '../../assets/shared/mobile/image-best-gear.jpg';
import { SCREEN_LIMITS } from '../../theme/Theme';
import { styles } from './AudioGearSection.styles';

export function AudioGearSection() {
    const { screenDimensions } = useScreenDimensions();

    const BGImage = screenDimensions.width <= SCREEN_LIMITS.mobile
                            ? BG_mobile
                            : screenDimensions.width <= SCREEN_LIMITS.tablet
                            ? BG_tablet : BG_desktop;

    return (
        <div className='audio-gear-section' style={styles(screenDimensions).BGSection}>
            <img 
                src={BGImage}
                alt='audio gear image'
                style={styles(screenDimensions).BGImage}
            />
            <div className='audio-gear-info' style={styles(screenDimensions).BGLeft}>
                <h1 className='audio-gear-title' style={styles(screenDimensions).BGTitle}>
                    Bringing you the <span style={styles(screenDimensions).BGPrimaryText}>best</span> audio gear
                </h1>
                <span className='audio-gear-description' style={styles(screenDimensions).BGBody}>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. 
                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. 
                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </span>
            </div>
        </div>
    );
}
