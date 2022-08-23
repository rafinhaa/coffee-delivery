import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Typography } from "../../../../components/Typography";
import { formatMoney } from "../../../../utils/formatMoney";
import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContent,
  Description,
  Name,
  Tags,
} from "./styles";
import { TCoffeesProps } from "./types";

export const CoffeeCard = ({
  coffee: { id, tags, name, description, price, photo },
}: TCoffeesProps) => {
  return (
    <CoffeeCardContent>
      <img src={`/coffees/${photo}`} />
      <Tags>
        {tags.map((tag) => (
          <span key={`${id}-${tag}`}>{tag}</span>
        ))}
      </Tags>
      <Name>
        <Typography.Title size="s" color="subtitle" weight={700}>
          {name}
        </Typography.Title>
      </Name>
      <Description>
        <Typography.Text size="s" color="label">
          {description}
        </Typography.Text>
      </Description>
      <CardFooter>
        <div>
          <Typography.Text size="s">R$</Typography.Text>
          <Typography.Title size="m" color="subtitle">
            {formatMoney(price)}
          </Typography.Title>
        </div>
        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContent>
  );
};
