import './App.css';
import { ItemListContainer } from './components/itemListContainer';
import { NavBar } from './components/NavBar';
function App() {
 
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo="HOLA CODERS"/>      
    </div>
  );
}

export default App;
