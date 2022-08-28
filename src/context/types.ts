import { ReactNode } from "react";
import { TCoffee } from "../pages/Home/components/CoffeeCard/types";

export type CartItem = TCoffee & {
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (item: CartItem) => void;
};

export type TCartContextProviderProps = {
  children: ReactNode;
};
