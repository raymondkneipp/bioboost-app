import { Btn } from "@components";
import { Switch } from "@headlessui/react";
import { BadHabit } from "@prisma/client";
import { IconCheck, IconCircleDotted, IconTrash, IconX } from "@tabler/icons";
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

  const isLoading = fail.isLoading || success.isLoading;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {isLoading ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-800">
            <span className="animate-spin text-stone-100">
              <IconCircleDotted size={18} />
            </span>
          </div>
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
                    : "bg-green-400 text-stone-900 hover:bg-green-300"
                } flex h-8 w-8 items-center justify-center rounded-xl transition disabled:cursor-not-allowed disabled:opacity-30`}
              >
                <span className="sr-only">
                  {checked ? "unfinish" : "complete"} stack
                </span>

                {checked ? <IconX size={18} /> : <IconCheck size={18} />}
              </button>
            )}
          </Switch>
        )}

        <h3 className="flex-1 text-lg text-stone-100">{name}</h3>
        {edit && (
          <Btn
            // onClick={() => deleteStack.mutate(id)}
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