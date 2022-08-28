import { HeaderContainer, RightContainer, Location, Cart } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export const Header = () => {
  const { cartQuantity } = useCart();

  const CartCount = () => {
    if (cartQuantity >= 1) return <span>{cartQuantity}</span>;
    return null;
  };

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <RightContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <NavLink to="/checkout">
          <Cart>
            <CartCount />
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </RightContainer>
    </HeaderContainer>
  );
};
