import './App.css';
import React from 'react';
import { ItemListContainer } from './components/itemListContainer';
import { NavBar } from './components/NavBar';
function App() {
 
  return (
    <div className="App"id="HOLA">
      <NavBar/>
      <ItemListContainer saludo="HOLA CODERS"/>
    </div>
  );
}

export default App;
