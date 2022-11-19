import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

const buttonStyles = cva("rounded-full font-medium transition", {
  variants: {
    intent: {
      primary: "bg-purple-400 text-stone-900 hover:bg-purple-300",
      secondary: "bg-white/0 hover:bg-white/10",
      danger: "bg-red-400 text-stone-900 hover:bg-red-300",
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

interface Link {
  href: string;
  onClick?: never;
}

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
  onClick?: () => void;
}

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: string;
}

type Props = ButtonProps & (Button | Link);

export const Btn = ({
  children,
  intent,
  href,
  onClick,
  size,
  ...rest
}: Props) => {
  if (href) {
    return (
      <Link href={href} className={buttonStyles({ intent, size })}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonStyles({ intent, size })}
      {...rest}
    >
      {children}
    </button>
  );
};
