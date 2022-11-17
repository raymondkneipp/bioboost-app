import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonStyles = cva("rounded-full px-3 py-1.5 font-medium transition", {
  variants: {
    intent: {
      primary: "bg-purple-400 text-stone-900 hover:bg-purple-300",
      secondary: "bg-white/0 hover:bg-white/10",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

type ButtonProps = {
  href: string;
  children: string;
};

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export const Btn = ({ children, intent, href }: Props) => {
  return (
    <Link href={href} className={buttonStyles({ intent })}>
      {children}
    </Link>
  );
};
