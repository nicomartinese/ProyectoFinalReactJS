import React, { useContext } from 'react';
import { Router } from './router/Router';
import { cartContext } from './context/cartContext';

function App() {
  const cartState = useContext(cartContext); 
  return (
    <div className="App">
      {console.log(cartState)}
      <Router/>
    </div>
  );
}

export default App;
