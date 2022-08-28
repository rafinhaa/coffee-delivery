import { Typography } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";

import { Confirmation } from "../Confirmation";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export const SelectedCoffees = () => {
  const { cartItems } = useCart();
  return (
    <SelectedCoffeesContainer>
      <Typography.Title size="xs" color="subtitle">
        Cafés selecionados
      </Typography.Title>
      <DetailsContainer>
        {cartItems.map((cartItem) => (
          <CoffeeCartCard key={cartItem.id} coffee={cartItem} />
        ))}
        <Confirmation />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};
