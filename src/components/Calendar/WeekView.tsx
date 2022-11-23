import { BadHabitIndicator, Card, StackIndicator } from "@components";
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
                isToday(day)
                  ? "border border-stone-700 text-stone-100"
                  : "text-stone-400"
              }`}
            >
              <div>{format(day, "E")}</div>
              <BadHabitIndicator day={day} />
              <StackIndicator day={day} />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
