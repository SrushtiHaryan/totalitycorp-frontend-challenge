import { React, useState, useEffect} from 'react';
import './CartItem.css'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { FaTrash } from 'react-icons/fa'
export const CartItem = () => {

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

  return ( <div className=" w-full flex flex-col items-center">

  
    {windowWidth > 450 ?(
        <div className="bg-white flex w-1/2 flex-col rounded-lg shadow-md">
          <div className=" flex justify-between px-4 py-4">
            <img src="assets/product-image-1.jpg" alt="Product 1"
              className="h-56 object-cover" />
            <div className="flex flex-col justify-around">
              <div className='text-2xl'>Product Name 1</div>
              <div className="flex items-center justify-end  py-10">
                <button className='text-xl'><BiMinus /> </button>
                <p className="mx-2 text-xl border-2 px-4">{5}</p>
                <button className='text-xl'><BiPlus /></button>
              </div>
              <div className='flex items-center justify-end gap-4 text-xl'><FaTrash /> Remove</div>


            </div>
          </div>
        </div>):(
          <div className="flex flex-col bg-white rounded-lg shadow-md">
          <div className="flex flex-col gap-4 px-4 py-4">
            <img src="assets/product-image-1.jpg" alt="Product 1"
              className="w-full h-72 object-cover" />
            <div className="flex flex-col items-center">
              <div className='text-2xl'>Product Name 1</div>
              <div className="flex items-center px-4 py-4">
                <button className='text-2xl'><BiMinus /> </button>
                <p className="mx-2 text-2xl border-2 px-4">{5}</p>
                <button className='text-2xl'><BiPlus /></button>
              </div>
              <div className='flex flex-row items-center gap-4'><FaTrash /> Remove</div>


            </div>
          </div>
        </div>
        )
        }</div>
  )
}
