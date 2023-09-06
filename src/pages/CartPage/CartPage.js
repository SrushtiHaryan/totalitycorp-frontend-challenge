import { React, useState, useEffect } from 'react';
import './CartPage.css'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import ProductCard from '../../components/ProductCard/ProductCard';
import ParticlesBg from "particles-bg";
import { CartItem } from '../../components/CartItem/CartItem';


const CartPage = () => {



  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50.0,
      quantity: 2,
      image: 'product-1.jpg',
    },
    // Add more items to the cart as needed
  ]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const increaseQuantity = (itemId) => {
    // Implement logic to increase the quantity of an item in the cart
  };

  const decreaseQuantity = (itemId) => {
    // Implement logic to decrease the quantity of an item in the cart
  };

  const removeItem = (itemId) => {
    // Implement logic to remove an item from the cart
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    // Update windowWidth when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center bg-black">
      <div className="bubbles">

        <ParticlesBg color="#ffffff" className="particle-container fixed " type="cobweb" bg={true} />
      </div>

      <div className="w-3/4 flex flex-col items-center gap-2 z-10">
      {windowWidth > 450 ? (<div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold p-4 m-10 mt-20 white text-white border-2 shadow-md bg-black">Shopping Cart Total:</h2>
        <h2 className="text-2xl font-semibold p-4 m-10 mt-20 text-white ">$ 50000</h2>

        </div>):
        (<div className="flex flex-col gap-0">
        <h2 className="text-2xl font-semibold p-4  mt-20 white text-white border-2 shadow-md bg-black">Shopping Cart Total:</h2>
        <h2 className="text-2xl font-semibold p-4  text-white ">$ 50000</h2>

        </div>) }
       

        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />

        <h2 className="text-2xl font-semibold p-4 m-10 white text-white border-2 shadow-md">Checkout</h2>





      </div>

    </div>
    /* Left Part - Cart Items
    <div className="w-3/4">
      <h2 className="text-2xl font-semibold">Shopping Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex items-center my-4">
          <img src={"assets/product-image-1.jpg"} alt={item.name} className="w-16 h-16 object-cover" />
          <div className="flex flex-col ml-4">
            <p className="text-lg">{item.name}</p>
            <div className="flex items-center">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <p className="mx-2">{item.quantity}</p>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>

    {/* Right Part - Total and Checkout */
    /* <div className="w-1/4 ml-4">
      <h2 className="text-2xl font-semibold">Total</h2>
      <p>Total: ${calculateTotal().toFixed(2)}</p>
      <label>
        Gift Wrap
        <input type="checkbox" />
      </label>
      <label>
        Special Instructions
        <textarea rows="4"></textarea>
      </label>
      <button>Checkout</button>
    </div> }
  */
  );
};


export default CartPage