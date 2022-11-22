import { Btn } from "@components";
import { Switch } from "@headlessui/react";
import { Habit } from "@prisma/client";
import { IconCheck, IconTrash, IconX } from "@tabler/icons";
import { isToday, startOfToday } from "date-fns";
import { Fragment } from "react";
import { trpc } from "utils/trpc";

export const HabitItem = ({ id, name, completedDates }: Habit) => {
  const completeHabit = trpc.habit.completeHabit.useMutation();
  const incompleteHabit = trpc.habit.incompleteHabit.useMutation();
  const deleteHabit = trpc.habit.deleteHabit.useMutation();

  const completed = completedDates.find((date) => isToday(date)) ? true : false;

  return (
    <div className="flex items-center gap-3">
      <Switch checked={completed} as={Fragment}>
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
                ? "bg-purple-400 text-stone-900 hover:bg-purple-300"
                : "bg-stone-700 hover:bg-stone-600"
            } flex h-8 w-8 items-center justify-center rounded-xl transition disabled:cursor-not-allowed disabled:opacity-30`}
          >
            <span className="sr-only">
              {checked ? "unfinish" : "complete"} habit
            </span>

            {checked ? <IconCheck size={18} /> : <IconX size={18} />}
          </button>
        )}
      </Switch>
      <span className="flex-1 text-stone-100">{name}</span>
      <Btn
        onClick={() => deleteHabit.mutate(id)}
        intent="danger"
        size="sm"
        square
        icon={IconTrash}
      >
        Delete
      </Btn>
    </div>
  );
};
