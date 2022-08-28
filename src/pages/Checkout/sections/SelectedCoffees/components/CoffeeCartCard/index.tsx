import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../../../components/QuantityInput";
import { Typography } from "../../../../../../components/Typography";
import { useCart } from "../../../../../../hooks/useCart";
import { formatMoney } from "../../../../../../utils/formatMoney";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { CoffeeCartCardProps } from "./types";

export const CoffeeCartCard = ({
  coffee: { id, photo, name, price, quantity },
}: CoffeeCartCardProps) => {
  const { changeCheckoutItemAmount, removeCartItem } = useCart();

  const handleIncrease = () => {
    changeCheckoutItemAmount(id, "increase");
  };

  const handleDecrease = () => {
    changeCheckoutItemAmount(id, "decrease");
  };

  const handleDelete = () => {
    removeCartItem(id);
  };

  const totalItemPrice = quantity * price;
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffees/${photo}`} alt={name} />
        <div>
          <Typography.Text color="subtitle">{name}</Typography.Text>
          <ActionsContainer>
            <QuantityInput
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleDelete}>
              <Trash size={16} /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ {formatMoney(totalItemPrice)}</p>
    </CoffeeCartCardContainer>
  );
};
