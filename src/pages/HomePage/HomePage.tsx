import React from 'react';
import { styles } from './HomePage.styles';
import { 
  AppButton, 
  CategoriesCardGroup, 
  HomePageHero
} from '../../components';
import { SCREEN_LIMITS, SCREEN_WIDTH, textStyles } from '../../theme/Theme';

import zx9_desktop from '../../assets/home/desktop/image-speaker-zx9.png';
import zx9_tablet from '../../assets/home/tablet/image-speaker-zx9.png';
import zx9_mobile from '../../assets/home/mobile/image-speaker-zx9.png';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';


export function HomePage() {
  const {screenDimensions} = useScreenDimensions();

  const PageAssets = {
    zx9Image: screenDimensions.width <= SCREEN_LIMITS.mobile
        ? zx9_mobile
        : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
        ? zx9_tablet 
        : zx9_desktop,
  }
  return (
    <div className='home-page' style={styles(screenDimensions).homePage}>
      <HomePageHero />
      <CategoriesCardGroup />
      <div className='zx9-speaker-section' style={styles(screenDimensions).zx9SpeakerSection}>
        <img 
          src={PageAssets.zx9Image} 
          className='zx9-image' 
          style={styles(screenDimensions).zx9Image}
          alt={'zx9 speaker image'}
        />
        <div className='zx9-right' style={styles(screenDimensions).zx9Right}>
          <h1 style={textStyles.h1}>ZX9 SPEAKER</h1>
          <span style={textStyles.body}>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</span>
          <AppButton label={'see product'} mode='black-fill' stylesOverride={{width: '60%', marginTop: '10%'}}/>
        </div>
      </div>
    </div>
  )
}

