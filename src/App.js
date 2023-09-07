import logo from './logo.svg';
import './App.css';
import ProductPage from './pages/ProductPage/ProductPage';
import Navbar  from './components/Navbar/Navbar';
import CartPage from './pages/CartPage/CartPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import  {BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<ProductPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/checkout' element={<CheckoutPage/>}/>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
