import type { TablerIcon } from "@tabler/icons";
import { Card, CardHeader } from "components/Card";

type Props = {
  icon: TablerIcon;
  name: string;
};

export const FeatureItem = ({ icon, name }: Props) => {
  return (
    <Card>
      <CardHeader icon={icon}>{name}</CardHeader>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur
        doloremque iure voluptas cum at sit quo est, dolorum recusandae? Natus
        expedita unde delectus blanditiis magnam enim maxime asperiores ducimus.
      </p>
    </Card>
  );
};
