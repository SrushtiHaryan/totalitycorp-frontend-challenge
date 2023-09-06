import { React, useState, useEffect } from 'react';
import './ProductPage.css';
import ProductCard from '../../components/ProductCard/ProductCard';
const ProductPage = () => {

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
      <div className='mt-12'>
      <div className="">
      {/* Banner */}
        {windowWidth > 450 ? (
          // Render this content for screens wider than 768px
          <div className="bg-cover bg-center h-[30vh]">
            <img
              src="assets/women-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          // Render this content for screens 768px or narrower
          <div className="bg-cover bg-center h-[30vh]">
            <img
              src="assets/mobile-woman-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />
          </div>
        )}


        {/* Row with three columns */}
        <div className="flex justify-between mt-4 px-4 ">
          {/* Category column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
          <div className="">|</div>
            <h2 className="text-lg font-semibold ">Category</h2>
            {/* Category filter options go here */}
          </div>

          
          {/* Price range column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
          <div className="">|</div>
            <h2 className="text-lg font-semibold">Price </h2>
            {/* Price range filter options go here */}
          </div>

          

          {/* Rating column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
          <div className="">|</div>
            <h2 className="text-lg font-semibold">Rating</h2>
            {/* Rating filter options go here */}
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="grid w-[80vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4 ml-[10vw]">
        {/* Product card 1 */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />





        {/* Repeat product cards for each product */}
      </div>
    </div>
  );
};

export default ProductPage;