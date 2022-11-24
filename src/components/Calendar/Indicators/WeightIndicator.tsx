import { Indicator } from "@components";
import { trpc } from "utils/trpc";

type Props = {
  day: Date;
};

export const WeightIndicator = ({ day }: Props) => {
  const weight = trpc.weight.getDay.useQuery(day);
  let color: "na" | "success" = "na";
  let text = "Weight";
  if (weight.data) {
    color = "success";
    text = weight.data.kilograms.toString().concat(" kg");
  }

  return <Indicator name={text} intent={color} />;
};
