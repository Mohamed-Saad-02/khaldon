"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib";
import { DynamicFormProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import DynamicInput from "./DynamicInput";

function DynamicForm<T extends Record<string, string | number | Date>>({
  inputs,
  formSchema,
  defaultValues,
  onSubmitAction,
  submitButtonText,
  renderInput,
  buttonClass,
  actions,
  formClassName,
  customSubmit,
}: DynamicFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => onSubmitAction(data, form))}
        className={cn("space-y-4", formClassName)}
      >
        {inputs.map((input, index) => (
          <FormField
            key={input.formName}
            control={form.control}
            name={input.formName}
            render={({ field }) => {
              if (renderInput) {
                const rendered = renderInput(
                  input,
                  field,
                  index,
                  actions,
                  form,
                );
                if (rendered) return rendered;
              }

              return (
                <FormItem className={cn("gap-1")}>
                  <FormLabel htmlFor={input.formName}>{input.label}</FormLabel>
                  <FormControl>
                    <DynamicInput
                      input={input}
                      field={field}
                      id={input.formName}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        ))}

        {customSubmit ? (
          customSubmit(form)
        ) : (
          <Button
            type="submit"
            className={cn("w-full max-sm:text-xs", buttonClass)}
            disabled={form.formState.isSubmitting || !form.formState.isValid}
          >
            {submitButtonText}
          </Button>
        )}
      </form>
    </Form>
  );
}

export { DynamicForm };
