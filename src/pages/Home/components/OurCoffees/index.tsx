import { Typography } from "../../../../components/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContent } from "./styles";

export const OurCoffees = () => {
  return (
    <OurCoffeesContent>
      <Typography.Title size="l" color="subtitle">
        Nossos cafés
      </Typography.Title>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesContent>
  );
};
