import { Logo } from "@components";

export const Brand = () => {
  return (
    <div className="flex items-center gap-3 text-purple-400">
      <Logo />
      <span className="text-3xl font-medium">BioBoost</span>
    </div>
  );
};
