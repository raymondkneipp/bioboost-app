import type { TablerIcon } from "@tabler/icons";
import { createElement } from "react";

type Props = {
  icon: TablerIcon;
  children: string;
};

export const CardHeader = ({ icon, children }: Props) => {
  return (
    <header className="flex items-center gap-3">
      <div className="flex items-center justify-center rounded-xl bg-purple-400 p-3 text-stone-900">
        {createElement(icon)}
      </div>
      <h2 className="text-xl font-medium text-stone-100">{children}</h2>
    </header>
  );
};
