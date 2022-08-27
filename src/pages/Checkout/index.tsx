import { CheckoutOrderForm } from "./sections/CheckoutOrderForm";
import { SelectedCoffees } from "./sections/SelectedCoffees";
import { CheckoutOrderContainer } from "./styles";

export const Checkout = () => {
  return (
    <CheckoutOrderContainer>
      <CheckoutOrderForm />
      <SelectedCoffees />
    </CheckoutOrderContainer>
  );
};
