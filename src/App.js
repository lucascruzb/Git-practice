import {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [cartIsShow, setCartIsShow] = useState();

  function showCartHandler() {
    setCartIsShow(true);
  }
  function hideCartHandler() {
    setCartIsShow(false);
  }
  
  return (
    <CartProvider>
      <Header onShowCard={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
