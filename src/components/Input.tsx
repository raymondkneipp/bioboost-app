import { Error, Label } from "@components";
import { cva, VariantProps } from "class-variance-authority";
import { useId } from "react";

const inputStyles = cva(
  "bg-transparent rounded-xl border border-stone-700 px-3 py-1.5 w-full",
  {
    variants: {},
    defaultVariants: {},
  }
);

interface Props
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputStyles> {
  label: string;
  error: string | undefined;
}

export const Input = ({ label, error, ...rest }: Props) => {
  const id = useId();

  return (
    <div className="flex w-full flex-col items-start gap-1">
      <Label htmlFor={id}>{label}</Label>
      <input id={id} {...rest} className={inputStyles()} />
      <Error id={id} message={error} />
    </div>
  );
};
