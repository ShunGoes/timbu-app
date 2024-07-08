import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext({
  cartItems: [],
  addItemsToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const unique_cart_items = new Set(cartItems);

  //    this function adds products to the cart
  const addItemToCart = (productToAdd) => {
    unique_cart_items.add(productToAdd);
    setCartItems([...unique_cart_items]);
  };

  //    deletes items from cart
  const deleteItemsFromCart = (productToDelete) => {
    const filtered_array = prev => prev.filter(item => item.id !== productToDelete)
    setCartItems(filtered_array);
    // setTotalCartObject(prev => ({...prev, [product_to_delete]: 0}))
  };


  const value = { addItemToCart, cartItems, deleteItemsFromCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  return useContext(CartContext);
};
