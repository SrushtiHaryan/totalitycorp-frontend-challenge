import logo from './logo.svg';
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage';
import Navbar  from './components/Navbar/Navbar';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProductPage/> */}
      {/* <CartPage/> */}
      <CheckoutPage />
    </div>
  );
}

export default App;
