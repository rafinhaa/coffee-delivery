import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";
import { TQuantityInputProps } from "./types";

export const QuantityInput = ({
  onDecrease,
  onIncrease,
  quantity,
}: TQuantityInputProps) => {
  return (
    <QuantityInputContainer>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
};
