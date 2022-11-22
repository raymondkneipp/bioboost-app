import { Card } from "@components";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isFuture,
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
        {week.map((day) => (
          <div
            className={`flex flex-col gap-1 rounded-xl p-3 ${
              isToday(day) ? "bg-stone-800 text-stone-100" : "text-stone-400"
            }`}
          >
            <div>{format(day, "E")}</div>
            {/* <div>{format(day, "d")}</div> */}
            <div className="flex items-center gap-3">
              {isFuture(day) ? (
                <div className="h-4 w-4 rounded-xl bg-stone-800"></div>
              ) : (
                <>
                  {Math.random() >= 0.5 ? (
                    <div className="h-4 w-4 rounded-xl bg-green-400"></div>
                  ) : (
                    <div className="h-4 w-4 rounded-xl bg-red-400"></div>
                  )}
                </>
              )}
              <span className="text-sm">Habit Stacks</span>
            </div>
            <div className="flex items-center gap-3">
              {isFuture(day) ? (
                <div className="h-4 w-4 rounded-xl bg-stone-800"></div>
              ) : (
                <>
                  {Math.random() >= 0.5 ? (
                    <div className="h-4 w-4 rounded-xl bg-green-400"></div>
                  ) : (
                    <div className="h-4 w-4 rounded-xl bg-red-400"></div>
                  )}
                </>
              )}
              <span className="text-sm">Bad Habits</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
