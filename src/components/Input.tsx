import { Error, Label } from "@components";
import { cva, VariantProps } from "class-variance-authority";
import { useId } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const inputStyles = cva("bg-stone-800 rounded-xl px-3 py-1.5 w-full", {
  variants: {},
  defaultVariants: {},
});

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  label: string;
  error: string | undefined;
  register?: UseFormRegisterReturn<any>;
}

export const Input = ({ label, error, register, ...rest }: Props) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col items-start gap-1">
      <Label htmlFor={id}>{label}</Label>
      <input id={id} {...register} {...rest} className={inputStyles()} />
      <Error id={id} message={error} />
    </div>
  );
};
