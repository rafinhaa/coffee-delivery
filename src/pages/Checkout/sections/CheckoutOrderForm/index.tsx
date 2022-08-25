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

export const CheckoutOrderForm = () => {
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
          <Input placeholder="CEP" type="number" className="cep" />
          <Input placeholder="Rua" className="street" />
          <Input placeholder="Número" type="number" />
          <Input placeholder="Complemento" className="complement" />
          <Input placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input placeholder="UF" />
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
