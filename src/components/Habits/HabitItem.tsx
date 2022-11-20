import { Btn } from "@components";
import { Habit } from "@prisma/client";
import { isToday, startOfToday } from "date-fns";
import { trpc } from "utils/trpc";

export const HabitItem = ({ id, name, completedDates }: Habit) => {
  const completeHabit = trpc.habits.completeHabit.useMutation();
  const incompleteHabit = trpc.habits.incompleteHabit.useMutation();
  const deleteHabit = trpc.habits.deleteHabit.useMutation();

  const completed = completedDates.find((date) => isToday(date)) ? true : false;
  return (
    <div className="flex items-center gap-3">
      <input
        disabled={incompleteHabit.isLoading || completeHabit.isLoading}
        className="disabled:opacity-30"
        type="checkbox"
        checked={completed}
        onChange={(e) => {
          if (completed) {
            incompleteHabit.mutate({
              id,
              date: startOfToday(),
            });
          } else {
            completeHabit.mutate({
              id,
              date: startOfToday(),
            });
          }
        }}
      />{" "}
      <span className="flex-1">{name}</span>
      <Btn onClick={() => deleteHabit.mutate(id)} intent="secondary" size="sm">
        Delete
      </Btn>
    </div>
  );
};
