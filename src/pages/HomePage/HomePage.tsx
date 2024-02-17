import React from 'react';
import { styles } from './HomePage.styles';
import { 
  AppButton, 
  AppHeader, 
  CategoriesCardGroup 
} from '../../components';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
  const navigate = useNavigate();

  function gotoProductDetailsPage(category: string, product: string){
    // navigate(`/${category}/${product}`);
    console.log({category, product});
    navigate(`/${category}`);
  }
  return (
    <div className='home-page' style={styles.homePage}>
      <div className='header-hero-section' style={styles.headerHeroSection}>
        <AppHeader />
        <div className='hero-section' style={styles.heroSection}>
          <h2 className='new-product' style={styles.newProduct}>NEW PRODUCT</h2>
          <h1 className='product-name' style={styles.productName}>XX99 Mark II Headphones</h1>
          <span className='hero-description' style={styles.heroDescription}>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </span>
          <AppButton 
            label='see product' 
            mode='primary' stylesOverride={styles.seeProductButton}
            onClick={() => gotoProductDetailsPage('headphones', 'xx99 mark ii headphones')}
          />
        </div>
      </div>
      <CategoriesCardGroup />
      <div></div>
    </div>
  )
}

