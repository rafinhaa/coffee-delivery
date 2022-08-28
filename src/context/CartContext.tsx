import produce from "immer";
import { createContext, useState } from "react";
import { CartContextType, CartItem, TCartContextProviderProps } from "./types";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartQuantity: 0,
  addCoffeeToCart: () => undefined,
});

export const CartContextProvider = ({
  children,
}: TCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQuantity = cartItems.length;

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (item) => item.id === coffee.id
    );

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
      }
    });

    setCartItems(newCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  );
};
