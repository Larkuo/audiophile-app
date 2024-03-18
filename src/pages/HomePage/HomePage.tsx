import { styles } from './HomePage.styles';
import { 
  AppFooter,
  AudioGearSection,
  CartModal,
  CategoriesCardGroup, 
  HomePageHero,
  YX1HomeSection,
  ZX7HomeSection,
  ZX9HomeSection
} from '../../components';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export function HomePage() {
  const { showCartModal } = useContext(CartContext);

  return (
    <div 
      className='home-page' 
      style={{
        ...styles.homePage, 
        overflowY: showCartModal? 'hidden' : 'scroll'
      }}
    >
      <HomePageHero />
      <CategoriesCardGroup />
      <ZX9HomeSection />
      <ZX7HomeSection />
      <YX1HomeSection />
      <AudioGearSection />
      <AppFooter />
      {showCartModal && <CartModal />}
    </div>
  )
}

