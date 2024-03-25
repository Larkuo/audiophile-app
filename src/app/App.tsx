import './App.css';
import AppNavigation from '../navigation/AppNavigation';
import { CartContextProvider } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { SideNavContextProvider } from '../context/SideNavContext';

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

    return (
      <SideNavContextProvider>
        <CartContextProvider>
          <AppNavigation />
        </CartContextProvider>
      </SideNavContextProvider>
    );
}

export default App;
