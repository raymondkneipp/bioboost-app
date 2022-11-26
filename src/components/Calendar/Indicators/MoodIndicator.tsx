import { Indicator } from "@components";
import { Feeling } from "@prisma/client";
import { endOfDay, startOfDay } from "date-fns";
import { trpc } from "utils/trpc";

type Props = {
  day: Date;
};

export const MoodIndicator = ({ day }: Props) => {
  const moods = trpc.mood.getDay.useQuery({
    start: startOfDay(day),
    end: endOfDay(day),
  });
  let average = 0;

  if (moods.data) {
    const total = moods.data.length;

    const greatScore =
      moods.data.filter((mood) => mood.feeling === Feeling.GREAT).length * 6;
    const goodScore =
      moods.data.filter((mood) => mood.feeling === Feeling.GOOD).length * 5;
    const okayScore =
      moods.data.filter((mood) => mood.feeling === Feeling.OKAY).length * 4;
    const poorScore =
      moods.data.filter((mood) => mood.feeling === Feeling.POOR).length * 3;
    const badScore =
      moods.data.filter((mood) => mood.feeling === Feeling.BAD).length * 2;
    const awfulScore = moods.data.filter(
      (mood) => mood.feeling === Feeling.AWFUL
    ).length;

    const sum =
      greatScore + goodScore + okayScore + poorScore + badScore + awfulScore;

    if (total > 0) {
      average = Math.round(sum / total);
    }
  }

  let color: "success" | "good" | "okay" | "poor" | "bad" | "fail" | "na" =
    "na";

  switch (average) {
    case 0:
      color = "na";
      break;
    case 1:
      color = "fail";
      break;
    case 2:
      color = "bad";
      break;
    case 3:
      color = "poor";
      break;
    case 4:
      color = "okay";
      break;
    case 5:
      color = "good";
      break;
    case 6:
      color = "success";
      break;
  }
  return <Indicator name="Mood" intent={color} />;
};
