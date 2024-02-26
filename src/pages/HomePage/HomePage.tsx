import React from 'react';
import { styles } from './HomePage.styles';
import { 
  AppFooter,
  AudioGearSection,
  CategoriesCardGroup, 
  HomePageHero,
  YX1HomeSection,
  ZX7HomeSection,
  ZX9HomeSection
} from '../../components';


export function HomePage() {

  return (
    <div className='home-page' style={styles.homePage}>
      <HomePageHero />
      <CategoriesCardGroup />
      <ZX9HomeSection />
      <ZX7HomeSection />
      <YX1HomeSection />
      <AudioGearSection />
      <AppFooter />
    </div>
  )
}

