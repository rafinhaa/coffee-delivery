import { PaymentMethodContainer } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";
import { TPaymentMethodInput } from "./types";

export const PaymentMethodInput = ({ type }: TPaymentMethodInput) => {
  const textMapping = {
    card: "cartão de crédito",
    bank: "cartão de débito",
    cash: "dinheiro",
  };

  const Icon = () => {
    if (type === "bank") return <Bank size={16} />;
    if (type === "card") return <CreditCard size={16} />;
    return <Money size={16} />;
  };

  return (
    <PaymentMethodContainer>
      <Icon />
      {textMapping[type]}
    </PaymentMethodContainer>
  );
};
