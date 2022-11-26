import {
  IconChecklist,
  IconCircleOff,
  IconMoodHappy,
  IconScaleOutline,
} from "@tabler/icons";
import { FeatureItem } from "./FeatureItem";

export const Features = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-3xl font-medium text-stone-100 md:text-5xl">
        Features
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        <FeatureItem icon={IconChecklist} name="Habit Stacks">
          We believe that following good, healthy habits every day will help you
          live a better and happier life. Our app makes it easier to get started
          on your new lifestyle, so that you can be the person you want to be!
        </FeatureItem>
        <FeatureItem icon={IconCircleOff} name="Bad Habits">
          A bad habit can quickly turn into a lifeline, slowing down your
          progress and setting you further behind your goals. Keeping track of
          these habits will help you stay on track and avoid the pitfalls that
          demotivate you.
        </FeatureItem>
        <FeatureItem icon={IconMoodHappy} name="Mood Tracker">
          Your mood affects your productivity, motivation, and the choices you
          make. An unhappy mood will lead to bad habits and a positive mood
          leads to healthy habits and productive workflows.
        </FeatureItem>
        <FeatureItem icon={IconScaleOutline} name="Weight Logger">
          Your weight is important to your health, and can dictate how you feel.
          If you are overweight or obese, maintaining a healthy weight can
          contribute to long-term improvements in your general health and
          well-being.
        </FeatureItem>
      </div>
    </div>
  );
};
