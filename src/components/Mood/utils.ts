import { Feeling } from "@prisma/client";
import {
  IconMoodCry,
  IconMoodEmpty,
  IconMoodHappy,
  IconMoodNeutral,
  IconMoodSad,
  IconMoodSmile,
} from "@tabler/icons";

export function getMoodStyles(feeling: Feeling) {
  let icon = IconMoodHappy;
  let bg = "bg-green-400";
  let fg = "text-green-400";

  switch (feeling) {
    case Feeling.GREAT:
      icon = IconMoodHappy;
      bg = "bg-green-400";
      fg = "text-green-400";
      break;
    case Feeling.GOOD:
      icon = IconMoodSmile;
      bg = "bg-lime-400";
      fg = "text-lime-400";
      break;
    case Feeling.OKAY:
      icon = IconMoodNeutral;
      bg = "bg-blue-400";
      fg = "text-blue-400";
      break;
    case Feeling.POOR:
      icon = IconMoodEmpty;
      bg = "bg-yellow-400";
      fg = "text-yellow-400";
      break;
    case Feeling.BAD:
      icon = IconMoodSad;
      bg = "bg-orange-400";
      fg = "text-orange-400";
      break;
    case Feeling.AWFUL:
      icon = IconMoodCry;
      bg = "bg-red-400";
      fg = "text-red-400";
      break;
  }

  return { icon, bg, fg };
}
