import type { TablerIcon } from "@tabler/icons";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import React from "react";

const buttonStyles = cva(
  "rounded-xl font-medium transition flex items-center gap-1",
  {
    variants: {
      intent: {
        primary: "bg-purple-400 text-stone-900 hover:bg-purple-300",
        secondary: "bg-white/0 text-stone-100 hover:bg-white/10",
        danger: "bg-white/0 text-red-400 hover:bg-white/10",
      },
      size: {
        sm: "py-0 px-1.5",
        md: "py-1.5 px-3",
        lg: "py-3 px-6",
      },
      square: {
        true: "w-8 h-8 flex items-center justify-center",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

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
  icon?: TablerIcon;
  square?: boolean;
}

type Props = ButtonProps & (Button | Link);

export const Btn = ({
  children,
  intent,
  href,
  onClick,
  size = "md",
  icon,
  square,
  ...rest
}: Props) => {
  const iconSize = {
    sm: 18,
    md: 20,
    lg: 24,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={buttonStyles({ intent, size, square })}
        aria-label={square ? children : undefined}
      >
        {icon && React.createElement(icon, { size: iconSize[size!] })}
        {!square && children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonStyles({ intent, size, square })}
      aria-label={square ? children : undefined}
      {...rest}
    >
      {icon && React.createElement(icon, { size: iconSize[size!] })}
      {!square && children}
    </button>
  );
};
