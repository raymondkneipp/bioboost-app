import {
  BadHabitIndicator,
  Card,
  Indicator,
  StackIndicator,
} from "@components";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isToday,
  startOfToday,
  startOfWeek,
} from "date-fns";

export const WeekView = () => {
  const today = startOfToday();
  const week = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  return (
    <Card>
      <div className="grid grid-cols-7 gap-3">
        {week.map((day) => {
          return (
            <div
              className={`flex flex-col gap-1 rounded-xl p-3 ${
                isToday(day) ? "bg-stone-800 text-stone-100" : "text-stone-400"
              }`}
              key={day.toISOString()}
            >
              <div>{format(day, "E")}</div>
              <BadHabitIndicator day={day} />
              <StackIndicator day={day} />
              <Indicator name="test" intent="success" />
              <Indicator name="test" intent="good" />
              <Indicator name="test" intent="okay" />
              <Indicator name="test" intent="poor" />
              <Indicator name="test" intent="bad" />
              <Indicator name="test" intent="fail" />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
