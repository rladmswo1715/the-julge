import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export type InputProps = {
  label: string;
  type?: "text" | "password" | "tel";
  value?: string | number;
  error?: FieldError;
  register: UseFormRegisterReturn;
  id?: string;
};