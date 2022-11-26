import {
  BadHabitIndicator,
  Card,
  MoodIndicator,
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
import { useEffect, useRef } from "react";
import { WeightIndicator } from "./Indicators/WeightIndicator";

export const WeekView = () => {
  const today = startOfToday();
  const week = eachDayOfInterval({
    start: startOfWeek(today),
    end: endOfWeek(today),
  });

  const scrollToRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    if (scrollToRef.current === null) {
    } else {
      scrollToRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <Card>
      <div className="grid h-[144px] snap-y snap-mandatory overflow-y-scroll md:h-auto md:grid-cols-7 md:overflow-hidden lg:gap-3">
        {week.map((day) => {
          const conditionalRef = isToday(day) ? { ref: scrollToRef } : {};

          return (
            <div
              className={`flex snap-start flex-col gap-1 rounded-xl p-3 ${
                isToday(day) ? "bg-stone-800 text-stone-100" : "text-stone-400"
              }`}
              key={day.toISOString()}
              {...conditionalRef}
            >
              <div>{format(day, "E")}</div>
              <BadHabitIndicator day={day} />
              <StackIndicator day={day} />
              <MoodIndicator day={day} />
              <WeightIndicator day={day} />
            </div>
          );
        })}
      </div>
    </Card>
  );
};
