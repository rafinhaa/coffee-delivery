import { Typography } from "../../../../components/Typography";
import { ButtonContainer, ConfirmationSectionContainer } from "./styles";

export const Confirmation = () => {
  return (
    <ConfirmationSectionContainer>
      <div>
        <Typography.Text size="s">Total de itens</Typography.Text>
        <Typography.Text>R$ 9,90</Typography.Text>
      </div>
      <div>
        <Typography.Text size="s">Entrega</Typography.Text>
        <Typography.Text>R$ 13,50</Typography.Text>
      </div>
      <div>
        <Typography.Text size="l" color="subtitle" weight={700}>
          Total
        </Typography.Text>
        <Typography.Text>R$ 29,90</Typography.Text>
      </div>
      <ButtonContainer>Confirmar Pedido</ButtonContainer>
    </ConfirmationSectionContainer>
  );
};
