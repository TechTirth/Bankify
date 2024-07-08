import React from "react";
import { Control } from "react-hook-form";
import { z } from "zod";
import { AuthFormSchema } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldPath } from "react-hook-form";

interface CustomInput {
  control: Control<z.infer<typeof AuthFormSchema>>;
  name: FieldPath<z.infer<typeof AuthFormSchema>>;
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex flex-col w-full">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-messsage mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
