import { HeaderContainer, RightContainer, Location, Cart } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

import logo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
      <RightContainer>
        <Location>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart size={22} weight="fill" />
        </Cart>
      </RightContainer>
    </HeaderContainer>
  );
};
