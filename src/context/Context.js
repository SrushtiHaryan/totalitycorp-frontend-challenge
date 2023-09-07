import React, { createContext, useContext, useState } from 'react';

// Create the Cart Context
const Context = createContext();

// Custom Hook to use the Cart Context
export function useCart() {
  return useContext(Context);
}

// Cart Provider Component
export function ContextProvider({ children }) {
  const [cartItemsMap, setCartItemsMap] = useState({});
  const [cartIdItemMap, setCartIdItemMap] = useState({}); // Add cartIdItemMap state
  const [cartTotal, setCartTotal] = useState(0);


  const addItemToCart = (item) => {
    // Check if the item is already in the cart

    const { id, ...productDetails } = item;
    console.log(item);
    if (cartItemsMap[item.id]) {
      setCartItemsMap({
        ...cartItemsMap,
        [item.id]: cartItemsMap[item.id] + 1, // Increment the count
      });
    } else {
      // Add the item to the cart with count 1
      setCartItemsMap({
        ...cartItemsMap,
        [item.id]: 1,
      });
    }

    // Update the cartIdItemMap with the product details
    setCartIdItemMap({
      ...cartIdItemMap,
      [id]: productDetails,
    });
  };

  const cartItemCount = Object.values(cartItemsMap).reduce(
    (total, count) => total + count,
    0
  );

  const calculateTotal = () => {
    let total = 0;
  
    for (const itemId in cartItemsMap) {
      const itemCount = cartItemsMap[itemId];
      const itemDetails = cartIdItemMap[itemId];
      const itemPrice = itemDetails.price || 0;
  
      total += itemCount * itemPrice;
    }
  
    setCartTotal(total);
    return total;
  };

  return (
    <Context.Provider value={{ cartItemsMap, addItemToCart, cartItemCount, cartIdItemMap , setCartItemsMap, setCartIdItemMap, calculateTotal}}>
      {children}
    </Context.Provider>
  );
}
