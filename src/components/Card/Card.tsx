import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const Card = ({ children }: Props) => {
  return (
    <article className="flex flex-col gap-3 rounded-xl bg-stone-800 p-3">
      {children}
    </article>
  );
};
