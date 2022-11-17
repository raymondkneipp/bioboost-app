import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonStyles = cva("rounded-full font-medium transition", {
  variants: {
    intent: {
      primary: "bg-purple-400 text-stone-900 hover:bg-purple-300",
      secondary: "bg-white/0 hover:bg-white/10",
    },
    size: {
      sm: "py-0 px-1.5",
      md: "py-1.5 px-3",
      lg: "py-3 px-6",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
  },
});

type ButtonProps = {
  href: string;
  children: string;
};

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Btn = ({ children, intent, href, size }: Props) => {
  return (
    <Link href={href} className={buttonStyles({ intent, size })}>
      {children}
    </Link>
  );
};
