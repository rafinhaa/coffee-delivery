import { InputHTMLAttributes } from "react";

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};
