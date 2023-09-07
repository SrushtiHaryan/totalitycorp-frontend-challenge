import React from 'react';
import './ProductCard.css'
import { FaStar } from "react-icons/fa"
import { useCart } from '../../context/Context'; // Import useCart from your CartContext




const ProductCard = (props) => {

    const { addItemToCart } = useCart();

    const handleAddToCart = () => {
        // Create an item object to add to the cart
        const item = {
          id:props.id,
          name: props.name,
          price: props.price,
          rating: props.rating,
          image_url:props.image_url
        };
    
        // Add the item to the cart
        addItemToCart(item);
      };
    
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img
                src={props.image_url} // Replace with the URL of the product image
                alt={props.name}
                className="w-full h-72 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <div className="flex flex-row justify-around">
                <p className="text-gray-600">Price: {props.price}</p>
                <div className="text-gray-600 flex flex-row items-center gap-1">
                    <p className="text-gray-600">{props.rating}</p>
                    <FaStar className="text-yellow-300" />
                </div>

            </div>
            <button onClick={handleAddToCart}
            className="mt-2 bg-slate-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard