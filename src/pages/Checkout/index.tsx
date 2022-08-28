/* eslint-disable @typescript-eslint/no-misused-promises */
import { CheckoutOrderForm } from "./sections/CheckoutOrderForm";
import { SelectedCoffees } from "./sections/SelectedCoffees";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { CheckoutOrderContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods {
  card = "card",
  bank = "bank",
  cash = "cash",
}

const checkoutOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o cep"),
  street: zod.string().min(1, "Informe a rua"),
  number: zod.string().min(1, "Informe o número"),
  complement: zod.string(),
  locale: zod.string().min(1, "Informe o bairro"),
  city: zod.string().min(1, "Informe a cidade"),
  uf: zod.string().min(1, "Informe o uf"),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return {
        message: "Informe o método de pagamento",
      };
    },
  }),
});

export type OrderData = zod.infer<typeof checkoutOrderFormValidationSchema>;

type CheckoutOrderFormData = OrderData;

export const Checkout = () => {
  const checkoutOrderForm = useForm<CheckoutOrderFormData>({
    resolver: zodResolver(checkoutOrderFormValidationSchema),
  });
  const navigate = useNavigate();
  const { cleanCart } = useCart();
  const { handleSubmit } = checkoutOrderForm;

  const handleCheckoutOrder = (data: CheckoutOrderFormData) => {
    cleanCart();
    navigate("/finished", {
      state: data,
    });
  };

  return (
    <FormProvider {...checkoutOrderForm}>
      <CheckoutOrderContainer onSubmit={handleSubmit(handleCheckoutOrder)}>
        <CheckoutOrderForm />
        <SelectedCoffees />
      </CheckoutOrderContainer>
    </FormProvider>
  );
};
