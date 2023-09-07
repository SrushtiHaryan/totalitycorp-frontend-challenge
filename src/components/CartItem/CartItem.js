import { React, useState, useEffect} from 'react';
import './CartItem.css'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
import { useCart } from '../../context/Context';

export const CartItem = (props) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const { cartItemsMap, setCartItemsMap, setCartIdItemMap,cartIdItemMap } = useCart();
    const itemCount = cartItemsMap[props.id] || 0; // Get the count for this item


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

    const handleIncrement = () => {
    setCartItemsMap({
      ...cartItemsMap,
      [props.id]: itemCount + 1,
    });
  };

  const handleDecrement = () => {
    if (itemCount > 0) {
      setCartItemsMap({
        ...cartItemsMap,
        [props.id]: itemCount - 1,
      });
    }
  };

  const handleRemove = () => {
  const updatedCartItemsMap = { ...cartItemsMap };
  const updatedCartIdItemMap = { ...cartIdItemMap };

  if (updatedCartItemsMap[props.id] >= 0) {
    const itemCountToRemove = updatedCartItemsMap[props.id];

    // Remove the item from cartItemsMap
    delete updatedCartItemsMap[props.id];

    // Remove all items with the same product ID from cartIdItemMap
    for (const itemId in updatedCartIdItemMap) {
      if (updatedCartIdItemMap[itemId].id === props.id) {
        delete updatedCartIdItemMap[itemId];
      }
    }

    // Update cartItemCount in context
    
  }

  // Update cartItemsMap and cartIdItemMap in context
  setCartItemsMap(updatedCartItemsMap);
  setCartIdItemMap(updatedCartIdItemMap);
  };

  return ( <div className=" w-full flex flex-col items-center">

  
    {windowWidth > 450 ?(
        <div className="bg-white flex w-1/2 flex-col rounded-lg shadow-md">
          <div className=" flex justify-between px-4 py-4">
            <img src={props.image_url} alt={props.name}
              className="h-48 object-cover" />
            <div className="flex flex-col justify-around">
              <div className='text-xl'>{props.name}</div>
              <div className="flex items-center justify-end  py-10">
                <button className='text-xl' onClick={handleDecrement}><BiMinus /> </button>
                <p className="mx-2 text-xl border-2 px-4">{itemCount}</p>
                <button className='text-xl' onClick={handleIncrement}><BiPlus /></button>
              </div>
              <button className='flex items-center justify-end gap-4 text-xl' onClick={handleRemove}><FaTrash /> Remove</button>


            </div>
          </div>
        </div>):(
          <div className="flex flex-col bg-white rounded-lg shadow-md">
          <div className="flex flex-col gap-4 px-4 py-4">
            <img src={props.image_url} alt={props.name}
              className="w-full h-64 object-cover" />
            <div className="flex flex-col items-center">
              <div className='text-xl'>{props.name}</div>
              <div className="flex items-center px-4 py-4">
                <button className='text-xl' onClick={handleDecrement}><BiMinus /> </button>
                <p className="mx-2 text-xl border-2 px-4">{props.count}</p>
                <button className='text-xl' onClick={handleIncrement}><BiPlus /></button>
              </div>
              <button className='flex flex-row items-center gap-4' onClick={handleRemove}><FaTrash /> Remove</button>


            </div>
          </div>
        </div>
        )
        }</div>
  )
}
