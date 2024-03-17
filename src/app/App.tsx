import './App.css';
import AppNavigation from '../navigation/AppNavigation';
import { CartContextProvider } from '../context/CartContext';

function App() {
    return (
      <CartContextProvider>
        <AppNavigation />
      </CartContextProvider>
    );
}

export default App;
