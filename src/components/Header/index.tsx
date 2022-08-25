import { HeaderContainer, RightContainer, Location, Cart } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </NavLink>
      </RightContainer>
    </HeaderContainer>
  );
};
