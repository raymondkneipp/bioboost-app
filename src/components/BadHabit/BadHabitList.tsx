import {
  BadHabitCreate,
  BadHabitItem,
  Btn,
  Card,
  CardHeader,
  Empty,
  Spinner,
} from "@components";
import { Switch } from "@headlessui/react";
import { IconArticleOff, IconEdit, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { trpc } from "utils/trpc";

export const BadHabitList = () => {
  const badHabits = trpc.badHabit.getAll.useQuery();

  const [editable, setEditable] = useState(false);

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <CardHeader icon={IconArticleOff}>Bad Habits</CardHeader>

        <Switch
          checked={editable}
          onChange={setEditable}
          className={`${
            editable
              ? "bg-purple-400 text-stone-900 hover:bg-purple-300"
              : "bg-stone-800 text-stone-100 hover:bg-stone-700"
          } flex h-8 w-8 items-center justify-center rounded-xl transition`}
        >
          <span className="sr-only">Enable editing</span>
          <IconEdit size={18} />
        </Switch>
      </div>

      {badHabits.data ? (
        <>
          {badHabits.data.length > 0 ? (
            <>
              {badHabits.data.map((badHabit) => {
                return <BadHabitItem {...badHabit} edit={editable} />;
              })}
            </>
          ) : (
            <>
              {!editable && (
                <Empty message="No Bad Habits">
                  <Btn icon={IconPlus} onClick={() => setEditable(true)}>
                    Add Bad Habbit
                  </Btn>
                </Empty>
              )}
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}

      {editable && <BadHabitCreate />}
    </Card>
  );
};
