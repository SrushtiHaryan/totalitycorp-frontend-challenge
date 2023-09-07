import { React, useState, useEffect } from 'react';
import './ProductPage.css';
import ProductCard from '../../components/ProductCard/ProductCard';
const ProductPage = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clothesData, setClothesData] = useState([]);
  const [filteredClothesData, setFilteredClothesData] = useState(require('../../data/clothes.json'));
  const [selectedCategory, setSelectedCategory] = useState('all'); // Default to show all categories
  const [selectedPriceRange, setSelectedPriceRange] = useState('all'); // Default to show 'All' price range
  const [selectedPriceRangeStr, setSelectedPriceRangeStr] = useState('all'); // Default to show 'All' price range
  const [selectedRatingRange, setSelectedRatingRange] = useState('all'); // Default to show 'All' ratings
  const [selectedRatingRangeStr, setSelectedRatingRangeStr] = useState('all'); // Default to show 'All' ratings

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

  useEffect(() => {

    setClothesData(require('../../data/clothes.json'));
    setFilteredClothesData(clothesData);
    console.log(filteredClothesData);


  }, []);

  useEffect(() => {



    // Function to filter clothesData based on the selected category and price range
    //   const filteredClothesData = clothesData.filter((clothItem) => {
    //     const categoryCondition =
    //       selectedCategory === 'all' || clothItem.category === selectedCategory;
    //     const priceCondition =
    //       selectedPriceRange === 'all' ||
    //       (clothItem.price >= selectedPriceRange[0] &&
    //         clothItem.price <= selectedPriceRange[1]);
    //     return categoryCondition && priceCondition;
    //   });


    //   setFilteredClothesData(filteredClothesData);


    // }, [selectedCategory, selectedPriceRange])

    const filteredData = clothesData.filter((clothItem) => {
      const categoryCondition =
        selectedCategory === 'all' || clothItem.category === selectedCategory;
      const priceCondition =
        selectedPriceRange === 'all' ||
        (clothItem.price >= selectedPriceRange[0] &&
          clothItem.price < selectedPriceRange[1]);
      const ratingCondition =
        selectedRatingRange === 'all' ||
        (clothItem.rating >= selectedRatingRange[0] &&
          clothItem.rating < selectedRatingRange[1]);
      return categoryCondition && priceCondition && ratingCondition;
    });

    // Update the filteredClothesData state with the filtered data
    setFilteredClothesData(filteredData);
  }, [selectedCategory, selectedPriceRange, selectedRatingRange]);

  // Function to handle price range selection
  const handlePriceRangeChange = (e) => {
    const selectedValue = e.target.value;
    console.log('hey' + selectedValue);
    switch (selectedValue) {
      case 'all':
        setSelectedPriceRange('all');
        break;
      case '200-600':
        setSelectedPriceRange([200, 600]);
        break;
      case '600-1000':
        setSelectedPriceRange([600, 1000]);
        console.log(selectedPriceRange);
        break;
      case '1000-1400':
        setSelectedPriceRange([1000, 1400]);
        break;
      case '1400+':
        setSelectedPriceRange([1400, Number.MAX_SAFE_INTEGER]);
        break;
      default:
        setSelectedPriceRange('all');
    }
  };

  const handleRatingRangeChange = (e) => {
    const selectedValue = e.target.value;
    switch (selectedValue) {
      case 'all':
        setSelectedRatingRange([0, 5]); // Represents all ratings
        break;
      case '4-5':
        setSelectedRatingRange([4, 5]);
        break;
      case '3-4':
        setSelectedRatingRange([3, 4]);
        break;
      case '2-3':
        setSelectedRatingRange([2, 3]);
        break;
      default:
        setSelectedRatingRange([0, 5]); // Default to show all ratings
    }
  };
  
  return (
    <div className='mt-12'>
      <div className="">
        {/* Banner */}
        {windowWidth > 450 ? (
          // Render this content for screens wider than 768px
          <div className="bg-cover bg-center h-[30vh]">

            {selectedCategory == 'Women' ? (<img

              src="assets/women-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />) : selectedCategory == 'Men' ? (<img

              src="assets/man-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />) : (<img

              src="assets/all-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />)
            }

          </div>
        ) : (
          // Render this content for screens 768px or narrower

          <div className="bg-cover bg-center h-[30vh]">

            {selectedCategory == 'Women' ? (<img
              src="assets/mobile-woman-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />) : <img

              src="assets/mobile-man-banner.png" // Replace with your banner image URL
              alt="Banner"
              className="h-full w-full object-cover"
            />}

          </div>
        )}


        {/* Row with three columns */}
        <div className="flex justify-between mt-4 px-4 ">
          {/* Category column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
            {/* <div className="">|</div> */}
            <div>
              <h2 className="text-lg font-semibold ">Category</h2>


              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border rounded-md p-1"
              >
                <option value="all">All</option>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
              </select>
            </div>
          </div>


          {/* Price range column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
            {/* <div className="">|</div> */}

            <div className='flex flex-col'>

              <h2 className="text-lg font-semibold">Price</h2>

              <select
                value={selectedPriceRangeStr}
                onChange={(e) => {
                  setSelectedPriceRangeStr(e.target.value)
                  return handlePriceRangeChange(e)
                }}
                className="border rounded-md p-1"
              >
                <option value="0-500">All</option>
                <option value="200-600">200 - 600</option>
                <option value="600-1000">600 - 1000</option>
                <option value="1000-1400">1000 - 1400</option>
                <option value="1400+">1400+</option>
              </select>

            </div>
            {/* Price range filter options go here */}
          </div>



          {/* Rating column */}
          <div className="w-1/3 flex items-center justify-center gap-4">
            {/* <div className="">|</div> */}
            <div>
            <h2 className="text-lg font-semibold">Rating<span className="text-white"></span></h2>
            {/* Rating filter options go here */}
            <select
              value={selectedRatingRangeStr}
              onChange={(e) => {
                setSelectedRatingRangeStr(e.target.value);
                return handleRatingRangeChange(e);
              }}
              className="border rounded-md p-1"
            >
              <option value="all">All</option>
              <option value="4-5">4 - 5</option>
              <option value="3-4">3 - 4</option>
              <option value="2-3">2 - 3</option>
            </select>
            </div>
          </div>
        </div>
      </div>
      {/* Product grid */}
      <div className="grid w-[80vw] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 px-4 ml-[10vw]">
        {/* Product card 1 */}

        {filteredClothesData.map(clothItem => {
          console.log(clothItem)
          return <ProductCard name={clothItem.product_name} price={clothItem.price} id={clothItem.product_id} rating={clothItem.rating} image_url={clothItem.image_url} />
        })}






        {/* Repeat product cards for each product */}
      </div>
    </div>
  );
};

export default ProductPage;