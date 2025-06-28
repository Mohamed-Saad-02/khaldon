import { ComponentProps, InputHTMLAttributes, ReactElement } from "react";
import {
  ControllerRenderProps,
  DefaultValues,
  Form,
  Path,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";

export interface IInput<T extends Record<string, string | number | Date>>
  extends InputHTMLAttributes<HTMLInputElement> {
  formName: Path<T>;
  label: string;
  selectItems?: { value: string; label: string }[];
}

export interface DynamicFormProps<
  T extends Record<string, string | number | Date>,
> {
  inputs: IInput<T>[];
  formSchema: ZodType<T, any, any>;
  defaultValues: DefaultValues<T>;
  onSubmitAction: (values: T, form: UseFormReturn<T, any, T>) => void;
  submitButtonText: string;

  renderInput?: RenderInputProps<T>;

  buttonClass?: string;
  customSubmit?: CustomSubmitProps<T>;

  formClassName?: ComponentProps<typeof Form>["className"];

  actions?: ActionsProps;
}

export type RenderInputProps<T extends Record<string, string | number | Date>> =
  (
    input: IInput<T>,
    field: ControllerRenderProps<T, Path<T>>,
    index: number,
    actions?: ActionsProps,
    form?: UseFormReturn<T, any, T>,
  ) => React.ReactElement;

export type CustomSubmitProps<
  T extends Record<string, string | number | Date>,
> = (form: UseFormReturn<T, any, T>) => ReactElement;

export type ActionsProps = Record<string, (...args: any[]) => any>;
