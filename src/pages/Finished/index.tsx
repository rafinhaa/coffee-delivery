import { InfoIcon } from "../../components/InfoIcon";
import { Typography } from "../../components/Typography";
import confirmedOrderIllustration from "../../assets/confirmedOrderIllustration.svg";
import { OrderDetails, ConfirmationSection, FinishedContainer } from "./styles";
import { Timer, CurrencyDollar, MapPin } from "phosphor-react";

export const Finished = () => {
  return (
    <FinishedContainer>
      <ConfirmationSection>
        <Typography.Title size="l">Uhuu! Pedido confirmado</Typography.Title>
        <Typography.Text size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </Typography.Text>
        <OrderDetails>
          <InfoIcon
            icon={<MapPin />}
            iconColor="purple"
            text={
              <Typography.Text>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </Typography.Text>
            }
          />
          <InfoIcon
            icon={<Timer />}
            iconColor="yellow"
            text={
              <Typography.Text>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </Typography.Text>
            }
          />
          <InfoIcon
            icon={<CurrencyDollar />}
            iconColor="yellow-dark"
            text={
              <Typography.Text>
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </Typography.Text>
            }
          />
        </OrderDetails>
      </ConfirmationSection>
      <img src={confirmedOrderIllustration} alt="" />
    </FinishedContainer>
  );
};
