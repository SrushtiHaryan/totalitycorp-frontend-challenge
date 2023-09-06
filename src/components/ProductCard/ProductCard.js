import React from 'react';
import './ProductCard.css'

const ProductCard = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <img
                src="assets/product-image-1.jpg" // Replace with the URL of the product image
                alt="Product 1"
                className="w-full h-72 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold">Product Name 1</h3>
            <p className="text-gray-600">Price: $50.00</p>
            <button className="mt-2 bg-slate-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard