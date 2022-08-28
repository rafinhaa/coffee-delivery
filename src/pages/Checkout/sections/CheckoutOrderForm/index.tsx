import { useFormContext } from "react-hook-form";

import { Input } from "../../../../components/Input/input";
import { Typography } from "../../../../components/Typography";
import { SectionTitle } from "./components/SectionTitle";
import { PaymentMethodInput } from "./components/PaymentMethodInput";

import {
  AddressFormContainer,
  CheckoutOderFormContainer,
  FormSectionContainer,
  PaymentMethodOptions,
} from "./styles";

type TErrors = {
  errors: {
    [x: string]: {
      message: string;
    };
  };
};

export const CheckoutOrderForm = () => {
  const { register, formState } = useFormContext();
  const { errors } = formState as unknown as TErrors;
  return (
    <CheckoutOderFormContainer>
      <Typography.Title size="xs" color="subtitle">
        Complete seu pedido
      </Typography.Title>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber o seu pedido"
          type="map"
        />
        <AddressFormContainer>
          <Input
            placeholder="CEP"
            type="number"
            className="cep"
            {...register("cep")}
            error={errors.cep?.message}
          />
          <Input
            placeholder="Rua"
            className="street"
            {...register("street")}
            error={errors.street?.message}
          />
          <Input
            placeholder="Número"
            type="number"
            {...register("number")}
            error={errors.number?.message}
          />
          <Input
            placeholder="Complemento"
            className="complement"
            rightText="Opcional"
            {...register("complement")}
            error={errors.complement?.message}
          />
          <Input
            placeholder="Bairro"
            {...register("locale")}
            error={errors.locale?.message}
          />
          <Input
            placeholder="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            placeholder="UF"
            {...register("uf")}
            error={errors.uf?.message}
          />
        </AddressFormContainer>
      </FormSectionContainer>
      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha que deseja pagar"
          type="dollar"
        />
        <PaymentMethodOptions>
          <PaymentMethodInput type="card" />
          <PaymentMethodInput type="bank" />
          <PaymentMethodInput type="cash" />
        </PaymentMethodOptions>
      </FormSectionContainer>
    </CheckoutOderFormContainer>
  );
};
