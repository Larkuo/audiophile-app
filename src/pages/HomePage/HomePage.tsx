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
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { SideNavContext } from '../../context/SideNavContext';


export function HomePage() {
  const { showCartModal } = useContext(CartContext);
  const { showSideNav } = useContext(SideNavContext);

  return (
    <div 
      className='home-page' 
      style={{
        ...styles.homePage, 
        overflowY: showSideNav || showCartModal? 'hidden' : 'scroll',
        height: showSideNav || showCartModal? '100vh' : 'auto',
      }}
    >
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

