import produce from "immer";
import { createContext, useState } from "react";
import { CartContextType, CartItem, TCartContextProviderProps } from "./types";

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  cartQuantity: 0,
  cartTotalPriceItens: 0,
  addCoffeeToCart: () => undefined,
  changeCheckoutItemAmount: () => undefined,
  removeCartItem: () => undefined,
});

export const CartContextProvider = ({
  children,
}: TCartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
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

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartTotalPriceItens,
        addCoffeeToCart,
        changeCheckoutItemAmount,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
