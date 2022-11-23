import { Indicator } from "@components";
import { isBefore, isFuture, isSameDay } from "date-fns";
import { trpc } from "utils/trpc";

type Props = {
  day: Date;
};

export const BadHabitIndicator = ({ day }: Props) => {
  const badHabits = trpc.badHabit.getAll.useQuery();

  let color: "success" | "okay" | "bad" | "fail" | "na" = "na";

  if (isFuture(day)) {
    color = "na";
  } else {
    // is in past or today

    // check if fail
    if (
      badHabits.data?.some((habit) => {
        return habit.failedDates.some((date) => {
          if (isSameDay(date, day)) {
            return true;
          } else {
            return false;
          }
        });
      })
    ) {
      color = "fail";
    } else {
      // check if success
      // only successful if created habit was created before or on day
      if (
        badHabits.data?.some((habit) => {
          if (
            isBefore(habit.createdAt, day) ||
            isSameDay(habit.createdAt, day)
          ) {
            return true;
          }
          return false;
        })
      ) {
        color = "success";
      }
    }
  }
  return <Indicator intent={color} name="Bad Habits" />;
};
