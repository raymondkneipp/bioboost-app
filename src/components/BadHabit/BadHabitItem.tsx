import { Btn, Spinner } from "@components";
import { Switch } from "@headlessui/react";
import { BadHabit } from "@prisma/client";
import { IconCheck, IconTrash, IconX } from "@tabler/icons";
import { isToday, startOfToday } from "date-fns";
import { Fragment } from "react";
import { trpc } from "utils/trpc";

export const BadHabitItem = ({
  id,
  name,
  failedDates,
  edit,
}: BadHabit & { edit: boolean }) => {
  const failed =
    failedDates.filter((day) => isToday(day)).length >= 1 ? true : false;

  const fail = trpc.badHabit.fail.useMutation();
  const success = trpc.badHabit.success.useMutation();
  const deleteHabit = trpc.badHabit.delete.useMutation();

  const isLoading =
    fail.isLoading || success.isLoading || deleteHabit.isLoading;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {isLoading ? (
          <Spinner />
        ) : (
          <Switch checked={failed} as={Fragment}>
            {({ checked }) => (
              <button
                disabled={isLoading}
                onClick={() => {
                  if (failed) {
                    success.mutate({
                      id,
                      date: startOfToday(),
                    });
                  } else {
                    fail.mutate({
                      id,
                      date: startOfToday(),
                    });
                  }
                }}
                className={`${
                  checked
                    ? "bg-red-400 text-stone-900 hover:bg-red-300"
                    : "bg-stone-800 text-stone-100 hover:bg-stone-700"
                } flex h-8 w-8 items-center justify-center rounded-xl transition disabled:cursor-not-allowed disabled:opacity-30`}
              >
                <span className="sr-only">
                  {checked ? "unfinish" : "complete"} stack
                </span>

                {checked ? <IconCheck size={18} /> : <IconX size={18} />}
              </button>
            )}
          </Switch>
        )}

        <h3 className="flex-1 text-lg text-stone-100">{name}</h3>

        {edit && (
          <Btn
            onClick={() => deleteHabit.mutate(id)}
            intent="danger"
            size="sm"
            icon={IconTrash}
            square
            disabled={isLoading}
          >
            Delete
          </Btn>
        )}
      </div>
    </div>
  );
};
