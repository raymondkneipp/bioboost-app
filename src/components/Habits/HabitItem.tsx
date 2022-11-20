import { Btn } from "@components";
import { Switch } from "@headlessui/react";
import { Habit } from "@prisma/client";
import { IconCheck, IconX } from "@tabler/icons";
import { isToday, startOfToday } from "date-fns";
import { Fragment } from "react";
import { trpc } from "utils/trpc";

export const HabitItem = ({ id, name, completedDates }: Habit) => {
  const completeHabit = trpc.habits.completeHabit.useMutation();
  const incompleteHabit = trpc.habits.incompleteHabit.useMutation();
  const deleteHabit = trpc.habits.deleteHabit.useMutation();

  const completed = completedDates.find((date) => isToday(date)) ? true : false;
  return (
    <div className="flex items-center gap-3">
      <Switch name="terms-of-service" defaultChecked={completed} as={Fragment}>
        {({ checked }) => (
          <button
            disabled={incompleteHabit.isLoading || completeHabit.isLoading}
            onClick={() => {
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
            className={`${
              checked
                ? "bg-purple-400 hover:bg-purple-300"
                : "bg-stone-700 hover:bg-stone-600"
            } relative inline-flex items-center rounded-full p-1 transition disabled:cursor-not-allowed disabled:opacity-30`}
          >
            <span className="sr-only">
              {completed ? "unfinish" : "complete"} habit
            </span>

            {checked ? <IconCheck size={18} /> : <IconX size={18} />}
          </button>
        )}
      </Switch>
      <span className="flex-1 text-stone-100">{name}</span>
      <Btn onClick={() => deleteHabit.mutate(id)} intent="danger" size="sm">
        Delete
      </Btn>
    </div>
  );
};
