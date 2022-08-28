import { PaymentMethodContainer, ContentContainer } from "./styles";
import { Bank, CreditCard, Money } from "phosphor-react";
import { TPaymentMethodInput, TType } from "./types";
import { forwardRef } from "react";
import { paymentMapping } from "../../../../../../utils/formatMoney";

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  TPaymentMethodInput
>(function PaymentMethodInput({ type, ...rest }, ref) {
  const Icon = () => {
    if (type === "bank") return <Bank size={16} />;
    if (type === "card") return <CreditCard size={16} />;
    return <Money size={16} />;
  };

  return (
    <PaymentMethodContainer>
      <input
        id={type}
        type="radio"
        {...rest}
        name="paymentMethod"
        ref={ref}
        value={type}
      />
      <label htmlFor={type}>
        <ContentContainer>
          <Icon />
          {paymentMapping[type as TType]}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  );
});
