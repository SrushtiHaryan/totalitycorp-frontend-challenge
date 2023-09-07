import { React, useState, useEffect } from 'react';
import './CartPage.css'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import ProductCard from '../../components/ProductCard/ProductCard';
import ParticlesBg from "particles-bg";
import { CartItem } from '../../components/CartItem/CartItem';
import { useCart } from '../../context/Context';
import { Link } from 'react-router-dom';


const CartPage = () => {
  const { cartItemsMap, cartItemCount, addItemToCart, cartIdItemMap, calculateTotal } = useCart();



  const [cartItems, setCartItems] = useState(cartItemsMap);

  // Calculate the total of all cart items


  

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
          <h2 className="text-2xl font-semibold p-4 m-10 mt-20 text-white ">₹ {calculateTotal().toFixed(2)}</h2>

        </div>) :
          (<div className="flex flex-col gap-0">
            <h2 className="text-2xl font-semibold p-4  mt-20 white text-white border-2 shadow-md bg-black">Shopping Cart Total:</h2>
            <h2 className="text-2xl font-semibold p-4  text-white ">₹{calculateTotal().toFixed(2)}</h2>

          </div>)}

        {Object.keys(cartItemsMap).length === 0 ? (
          <p className="text-4xl text-white z-20 p-10 mt-12">Your cart is empty</p>
        ) : (
          Object.keys(cartItemsMap).map((itemId) => (
            <CartItem key={itemId} id={itemId} count={cartItemsMap[itemId]} name={cartIdItemMap[itemId].name} image_url={cartIdItemMap[itemId].image_url}/>
          ))
        )}



        {/* <CartItem name={"Asdfghjkl"} count={1} /> */}

        <Link to="/checkout">
          <h2 className="text-2xl font-semibold p-4 mt-40 mb-40 white text-white border-2 shadow-md">Checkout</h2>
        </Link>




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