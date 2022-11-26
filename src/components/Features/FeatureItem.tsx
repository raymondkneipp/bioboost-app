import type { TablerIcon } from "@tabler/icons";
import { Card, CardHeader } from "components/Card";

type Props = {
  icon: TablerIcon;
  name: string;
  children: string;
};

export const FeatureItem = ({ icon, name, children }: Props) => {
  return (
    <Card>
      <CardHeader icon={icon}>{name}</CardHeader>
      <p className="text-stone-300">{children}</p>
    </Card>
  );
};
