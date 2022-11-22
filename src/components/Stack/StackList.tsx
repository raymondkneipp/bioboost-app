import { Card, CardHeader, Empty, StackItem } from "@components";
import { Switch } from "@headlessui/react";
import { IconChecklist, IconEdit } from "@tabler/icons";
import { useState } from "react";
import { trpc } from "utils/trpc";

export const StackList = () => {
  const stacks = trpc.stack.getAll.useQuery();

  const [editable, setEditable] = useState(false);

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <CardHeader icon={IconChecklist}>Habit Stacks</CardHeader>

        <Switch
          checked={editable}
          onChange={setEditable}
          className={`${
            editable
              ? "bg-purple-400 text-stone-900 hover:bg-purple-300"
              : "bg-stone-700 text-stone-100 hover:bg-stone-600"
          } flex h-8 w-8 items-center justify-center rounded-xl transition`}
        >
          <span className="sr-only">Enable editing</span>
          <IconEdit size={18} />
        </Switch>
      </div>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <>
              {stacks.data.map((stack) => {
                return <StackItem {...stack} edit={editable} />;
              })}
            </>
          ) : (
            <Empty
              message="No Habit Stacks"
              cta={{ href: "/habits", label: "Create Stack" }}
            />
          )}
        </>
      ) : (
        "loading..."
      )}
    </Card>
  );
};
