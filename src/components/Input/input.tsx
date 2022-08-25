import { InputStyleContainer } from "./styles";
import { TInputProps } from "./types";

export const Input = ({ ...props }: TInputProps) => {
  return <InputStyleContainer {...props} />;
};
