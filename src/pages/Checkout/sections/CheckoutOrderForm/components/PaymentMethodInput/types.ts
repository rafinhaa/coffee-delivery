import { InputHTMLAttributes } from "react";

export type TType = "card" | "bank" | "cash";

export type TPaymentMethodInput = InputHTMLAttributes<HTMLInputElement> & {
  type: TType;
};
