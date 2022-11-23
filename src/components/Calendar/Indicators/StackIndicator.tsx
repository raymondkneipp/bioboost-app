import { Indicator } from "@components";
import { isAfter, isBefore, isFuture, isSameDay } from "date-fns";
import { trpc } from "utils/trpc";

type Props = {
  day: Date;
};

export const StackIndicator = ({ day }: Props) => {
  const stacks = trpc.stack.getAll.useQuery();

  let color: "success" | "okay" | "bad" | "fail" | "na" = "na";

  if (isFuture(day)) {
    color = "na";
  } else {
    // is in past or today

    // only check stacks that were created before or same day
    const stacksToCheck = stacks.data?.filter(
      (stack) =>
        isBefore(stack.createdAt, day) || isSameDay(stack.createdAt, day)
    );

    if (stacksToCheck && stacksToCheck?.length >= 1) {
      // check for fail
      const fail = stacksToCheck.some((stack) => {
        return stack.habits.some((habit) => {
          if (
            isAfter(habit.createdAt, day) &&
            !isSameDay(habit.createdAt, day)
          ) {
            return false;
          }
          return habit.completedDates.every((date) => !isSameDay(date, day));
        });
      });

      if (fail) {
        color = "fail";
      }

      // CHECK FOR SUCCESS
      let success = false;
      success = stacksToCheck.every((stack) => {
        if (stack) {
          return stack.habits
            .filter(
              (habit) =>
                isBefore(habit.createdAt, day) ||
                isSameDay(habit.createdAt, day)
            )
            .every((habit) => {
              if (habit) {
                return habit.completedDates.some((date) => {
                  return isSameDay(day, date);
                });
              }
            });
        }
      });

      if (success) {
        color = "success";
      }
    }
  }
  return <Indicator intent={color} name="Habit Stacks" />;
};
