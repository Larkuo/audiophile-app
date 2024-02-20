import React from 'react';
import { styles } from './HomePage.styles';
import { 
  AppButton, 
  AppHeader, 
  CategoriesCardGroup 
} from '../../components';
import { useNavigate } from 'react-router-dom';
import { SCREEN_LIMITS, SCREEN_WIDTH, textStyles } from '../../theme/Theme';

import zx9_desktop from '../../assets/home/desktop/image-speaker-zx9.png';
import zx9_tablet from '../../assets/home/tablet/image-speaker-zx9.png';
import zx9_mobile from '../../assets/home/mobile/image-speaker-zx9.png';
import { useScreenDimensions } from '../../hooks/useScreenDimensions';


export function HomePage() {
  const navigate = useNavigate();
  const {screenDimensions} = useScreenDimensions();

  function gotoProductDetailsPage(category: string, product: string){
    // navigate(`/${category}/${product}`);
    console.log({category, product});
    navigate(`/${category}`);
  }

  const PageAssets = {
    zx9Image: screenDimensions.width <= SCREEN_LIMITS.mobile
        ? zx9_mobile
        : SCREEN_WIDTH <= SCREEN_LIMITS.tablet
        ? zx9_tablet 
        : zx9_desktop,
  }
  return (
    <div className='home-page' style={styles(screenDimensions).homePage}>
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
            onClick={() => gotoProductDetailsPage('headphones', 'xx99 mark ii headphones')}
          />
        </div>
      </div>
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

