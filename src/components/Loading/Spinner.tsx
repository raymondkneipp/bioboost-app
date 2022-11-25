import { IconCircleDotted } from "@tabler/icons";

export const Spinner = () => {
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-800">
      <span className="animate-spin text-stone-100">
        <IconCircleDotted size={18} />
      </span>
    </div>
  );
};
