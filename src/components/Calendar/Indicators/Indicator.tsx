import { cva, VariantProps } from "class-variance-authority";

const indicatorStyles = cva("h-4 w-4 rounded-xl", {
  variants: {
    intent: {
      success: "bg-green-400",
      okay: "bg-yellow-400",
      bad: "bg-orange-400",
      fail: "bg-red-400",
      na: "bg-stone-700",
    },
  },
});

interface Props extends VariantProps<typeof indicatorStyles> {
  name: string;
}

export const Indicator = ({ name, intent }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className={indicatorStyles({ intent })}></div>
      <span className="text-sm">{name}</span>
    </div>
  );
};
