import { createContext, useState, useEffect, useContext } from "react";
import helper from "../helper/helper";

const CartContext = createContext({
  cartItems: [ ],
  addItemsToCart: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id:0,
      name: "Santin Sundress",
      price: 49.90,
      size: "S,M,L,XL,XXL",
      color: ["#F0B303","#000000CC"],
      image: helper.LgYellowDress
  },
  ]);

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
