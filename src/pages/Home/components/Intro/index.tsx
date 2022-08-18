import { Typography } from "../../../../components/Typography";
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";
import coffee from "../../../../assets/coffee.svg";
import { InfoIcon } from "../../../../components/InfoIcon";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroContent>
        <div>
          <section>
            <IntroTitle>
              <Typography.Title size="xl">
                Encontre o café perfeito para qualquer hora do dia
              </Typography.Title>
            </IntroTitle>
            <Typography.Text size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Typography.Text>
          </section>
          <BenefitsContainer>
            <InfoIcon
              icon={<ShoppingCart weight="fill" />}
              text="Compra simples e segura"
              iconColor="yellow-dark"
            />
            <InfoIcon
              icon={<Package weight="fill" />}
              text="Embalagem mantém o café intacto"
              iconColor="base-text"
            />
            <InfoIcon
              icon={<Timer weight="fill" />}
              text="Entrega rápida e rastreada"
              iconColor="yellow"
            />
            <InfoIcon
              icon={<Coffee weight="fill" />}
              text="O café chega fresquinho até você"
              iconColor="purple"
            />
          </BenefitsContainer>
        </div>
        <img src={coffee} alt="Coffee" />
      </IntroContent>
    </IntroContainer>
  );
};
