import { InfoIcon } from "../../components/InfoIcon";
import { Typography } from "../../components/Typography";
import confirmedOrderIllustration from "../../assets/confirmedOrderIllustration.svg";
import { OrderDetails, ConfirmationSection, FinishedContainer } from "./styles";
import { Timer, CurrencyDollar, MapPin } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../Checkout";
import { useEffect } from "react";
import { paymentMapping } from "../../utils/formatMoney";

type TState = {
  state: OrderData;
};

export const Finished = () => {
  const { state } = useLocation() as unknown as TState;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state) return navigate("/");
  }, [state, navigate]);

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
                Entrega em <strong>{`${state.street}, ${state.number}`}</strong>
                <br />
                {`${state.complement} - ${state.city}  , ${state.uf}`}
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
                <strong>{paymentMapping[state.paymentMethod]}</strong>
              </Typography.Text>
            }
          />
        </OrderDetails>
      </ConfirmationSection>
      <img src={confirmedOrderIllustration} alt="" />
    </FinishedContainer>
  );
};
