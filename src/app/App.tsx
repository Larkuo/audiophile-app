import './App.css';
import AppNavigation from '../navigation/AppNavigation';
import { CartContextProvider } from '../context/CartContext';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  const { pathname } = useLocation();
  
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

    return (
      <CartContextProvider>
        <AppNavigation />
      </CartContextProvider>
    );
}

export default App;
