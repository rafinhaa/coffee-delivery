import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Typography } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
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
  const [quantity, setQuantity] = useState(1);
  const { addCoffeeToCart } = useCart();

  const handleIncrease = () => {
    setQuantity((oldState) => oldState + 1);
  };

  const handleDecrease = () => {
    if (quantity <= 1) return;
    setQuantity((oldState) => oldState - 1);
  };

  const handleAddToCart = () => {
    addCoffeeToCart({
      description,
      id,
      name,
      photo,
      price,
      quantity,
      tags,
    });
  };
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
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContent>
  );
};
