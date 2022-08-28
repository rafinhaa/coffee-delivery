import { Typography } from "../../../../components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";
import { ButtonContainer, ConfirmationSectionContainer } from "./styles";

export const Confirmation = () => {
  const { cartTotalPriceItens, cartQuantity } = useCart();
  const deliveryPrice = 13.9;
  return (
    <ConfirmationSectionContainer>
      <div>
        <Typography.Text size="s">Total de itens</Typography.Text>
        <Typography.Text>R$ {formatMoney(cartTotalPriceItens)}</Typography.Text>
      </div>
      <div>
        <Typography.Text size="s">Entrega</Typography.Text>
        <Typography.Text>R$ {formatMoney(deliveryPrice)} </Typography.Text>
      </div>
      <div>
        <Typography.Text size="l" color="subtitle" weight={700}>
          Total
        </Typography.Text>
        <Typography.Text>
          R$ {formatMoney(cartTotalPriceItens + deliveryPrice)}{" "}
        </Typography.Text>
      </div>
      <ButtonContainer disabled={cartQuantity <= 0}>
        Confirmar Pedido
      </ButtonContainer>
    </ConfirmationSectionContainer>
  );
};
