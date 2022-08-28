import produce from "immer";
import { createContext, useEffect, useState } from "react";
import {
  CartContextType,
  CartItem,
  COFFEE_ITEMS_STORAGE_KEY,
  TCartContextProviderProps,
} from "./types";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartQuantity: 0,
  cartTotalPriceItens: 0,
  addCoffeeToCart: () => undefined,
  changeCheckoutItemAmount: () => undefined,
  removeCartItem: () => undefined,
  cleanCart: () => undefined,
});

export const CartContextProvider = ({
  children,
}: TCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) return JSON.parse(storedCartItems) as CartItem[];
    return [];
  });
  const cartQuantity = cartItems.length;
  const cartTotalPriceItens = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

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

  const changeCheckoutItemAmount = (
    id: number,
    type: "increase" | "decrease"
  ) => {
    const newCart = produce(cartItems, (draft) => {
      const findItem = cartItems.findIndex((item) => item.id === id);
      const item = draft[findItem];
      item.quantity =
        type === "increase" ? item.quantity + 1 : item.quantity - 1;
    });
    setCartItems(newCart);
  };

  const removeCartItem = (id: number) => {
    const newCart = produce(cartItems, (draft) => {
      const findItem = cartItems.findIndex((item) => item.id === id);
      draft.splice(findItem, 1);
    });
    setCartItems(newCart);
  };

  const cleanCart = () => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify([]));
    setCartItems([]);
  };

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartTotalPriceItens,
        addCoffeeToCart,
        changeCheckoutItemAmount,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
