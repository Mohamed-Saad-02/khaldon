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

  renderInput?: (
    input: IInput<T>,
    field: ControllerRenderProps<T, Path<T>>,
    index: number,
    actions?: Record<string, (...args: any[]) => any>,
    form?: UseFormReturn<T, any, T>,
  ) => ReactElement;

  buttonClass?: string;
  customSubmit?: CustomSubmitProps<T>;

  formClassName?: ComponentProps<typeof Form>["className"];

  actions?: Record<string, (...args: any[]) => any>;
}

export type RenderInputProps<T extends Record<string, string | number | Date>> =
  (
    input: IInput<T>,
    field: ControllerRenderProps<T, Path<T>>,
    index: number,
    actions?: Record<string, (...args: any[]) => any>,
    form?: UseFormReturn<T, any, T>,
  ) => React.ReactElement;

export type CustomSubmitProps<
  T extends Record<string, string | number | Date>,
> = (form: UseFormReturn<T, any, T>) => ReactElement;
