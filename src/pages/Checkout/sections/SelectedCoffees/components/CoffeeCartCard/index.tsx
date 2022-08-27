import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../../../components/QuantityInput";
import { Typography } from "../../../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";

export const CoffeeCartCard = () => {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1662336000&Signature=GW4immtqbmJLq6W4Ihh~S3FkTyEGb49Dk8-f8f1JsVlyHmgSMFXLxlbH1HbwSEUlodm0fl~vMj9bcupKcSe7oG48YBmW9BaM9xmAPO6ZhGetUEJEX0cIF0kxm0BGxXOM7bvTIau0QZkC5y~npx-uPxOhliS5jZihjejTKIaf3KjfPzWmN9rdskuPgBMTfW8c-BgI-QgIxYe3-gh9wZ0Sbhhdw0gapiyaJkg-rxQYhz~TTpmSC~eR9XMBVX2saB-XkZT0lpo5cLeAlsgXnVEJcKZyLV-nnRw7H-JbgC~mhSJzUYTaGVpYVb7tcZVGjuvXSKo1rBnqO2Wp4JOR3DIEkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <Typography.Text color="subtitle">
            Expresso Tradicional
          </Typography.Text>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={16} /> Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  );
};
