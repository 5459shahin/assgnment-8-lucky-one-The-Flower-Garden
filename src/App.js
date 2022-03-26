import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';


function App() {

  return (
    <div className='shop-name'>
      <Header></Header>
      <h1>The Flower Garden</h1>
      <Shop></Shop>
      
    </div>
  );
}

export default App;
