import { Btn, HabitItem } from "@components";
import { Switch } from "@headlessui/react";
import { Habit, Stack } from "@prisma/client";
import { IconCheck, IconTrash, IconX } from "@tabler/icons";
import { isToday, startOfToday } from "date-fns";
import { Fragment } from "react";
import { trpc } from "utils/trpc";

export const StackItem = ({
  id,
  name,
  habits,
}: Stack & { habits: Habit[] }) => {
  const deleteStack = trpc.stack.deleteStack.useMutation();
  const completeStack = trpc.stack.completeStack.useMutation();
  const incompleteStack = trpc.stack.incompleteStack.useMutation();

  const stackCompleted = habits.every((habit) => {
    if (habit.completedDates.filter((date) => isToday(date)).length >= 1) {
      return true;
    }
    return false;
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Switch checked={stackCompleted} as={Fragment}>
          {({ checked }) => (
            <button
              disabled={completeStack.isLoading || incompleteStack.isLoading}
              onClick={() => {
                if (stackCompleted) {
                  incompleteStack.mutate({
                    id,
                    date: startOfToday(),
                  });
                } else {
                  completeStack.mutate({
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

        <h3 className="text-lg text-stone-100">{name}</h3>
        <Btn
          onClick={() => deleteStack.mutate(id)}
          intent="danger"
          size="sm"
          icon={IconTrash}
          square
        >
          Delete
        </Btn>
      </div>
      {habits.length > 0 && (
        <div className="ml-12 flex flex-col gap-3">
          {habits.map((habit) => (
            <HabitItem {...habit} key={habit.id} />
          ))}
        </div>
      )}
    </div>
  );
};
