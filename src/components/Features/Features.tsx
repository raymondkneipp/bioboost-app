import {
  IconChecklist,
  IconCircleOff,
  IconMoodHappy,
  IconScaleOutline,
} from "@tabler/icons";
import { FeatureItem } from "./FeatureItem";

export const Features = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <FeatureItem icon={IconScaleOutline} name="Weight"></FeatureItem>
      <FeatureItem icon={IconCircleOff} name="Bad Habits"></FeatureItem>
      <FeatureItem icon={IconChecklist} name="Habit Stacks"></FeatureItem>
      <FeatureItem icon={IconMoodHappy} name="Mood"></FeatureItem>
    </div>
  );
};
