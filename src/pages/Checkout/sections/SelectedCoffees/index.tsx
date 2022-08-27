import { Typography } from "../../../../components/Typography";

import { Confirmation } from "../Confirmation";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export const SelectedCoffees = () => {
  return (
    <SelectedCoffeesContainer>
      <Typography.Title size="xs" color="subtitle">
        Cafés selecionados
      </Typography.Title>
      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
        <Confirmation />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
};
