import { ReactNode } from "react";
import { TCoffee } from "../pages/Home/components/CoffeeCard/types";

export type CartItem = TCoffee & {
  quantity: number;
};

export type CartContextType = {
  cartItems: CartItem[];
  cartQuantity: number;
  addCoffeeToCart: (item: CartItem) => void;
  changeCheckoutItemAmount: (id: number, type: "increase" | "decrease") => void;
};

export type TCartContextProviderProps = {
  children: ReactNode;
};
