import { forwardRef } from "react";
import { Typography } from "../Typography";
import {
  InputStyleContainer,
  InputStyled,
  InputWrapper,
  RightText,
} from "./styles";
import { TInputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, TInputProps>(function Input(
  { error, className, rightText, ...props },
  ref
) {
  return (
    <InputWrapper className={className}>
      <InputStyleContainer>
        <InputStyled {...props} ref={ref} />
        {rightText && <RightText>{rightText}</RightText>}
      </InputStyleContainer>
      {error && <Typography.Text size="s">{error}</Typography.Text>}
    </InputWrapper>
  );
});
