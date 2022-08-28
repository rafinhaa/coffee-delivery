/* eslint-disable @typescript-eslint/no-misused-promises */
import { CheckoutOrderForm } from "./sections/CheckoutOrderForm";
import { SelectedCoffees } from "./sections/SelectedCoffees";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { CheckoutOrderContainer } from "./styles";

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

export type OderData = zod.infer<typeof checkoutOrderFormValidationSchema>;

type CheckoutOrderFormData = OderData;

export const Checkout = () => {
  const checkoutOrderForm = useForm<CheckoutOrderFormData>({
    resolver: zodResolver(checkoutOrderFormValidationSchema),
  });

  const { handleSubmit } = checkoutOrderForm;

  const handleCheckoutOrder = (data: CheckoutOrderFormData) => {
    console.log(data);
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
