import { Logo } from "@components";

export const Brand = () => {
  return (
    <div className="flex items-center gap-3">
      <Logo />
      <span className="font-jost text-3xl font-medium text-purple-400">
        BioBoost
      </span>
    </div>
  );
};
