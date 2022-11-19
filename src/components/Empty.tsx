import { Btn } from "@components";

type Props = {
  message: string;
  cta?: {
    href: string;
    label: string;
  };
};

export const Empty = ({ message, cta }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-stone-700 p-12 text-center text-stone-400">
      {message}
      {cta?.href && <Btn href={cta.href}>{cta.label}</Btn>}
    </div>
  );
};
