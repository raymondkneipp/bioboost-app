import {
  Btn,
  Card,
  CardHeader,
  Empty,
  Spinner,
  StackCreate,
  StackItem,
} from "@components";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Switch } from "@headlessui/react";
import { IconChecklist, IconEdit, IconPlus } from "@tabler/icons";
import { useState } from "react";
import { trpc } from "utils/trpc";

export const StackList = () => {
  const stacks = trpc.stack.getAll.useQuery();

  const [editable, setEditable] = useState(false);

  const [list] = useAutoAnimate<HTMLDivElement>();
  const [createForm] = useAutoAnimate<HTMLDivElement>();

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
              : "bg-stone-800 text-stone-100 hover:bg-stone-700"
          } flex h-8 w-8 items-center justify-center rounded-xl transition`}
        >
          <span className="sr-only">Enable editing</span>
          <IconEdit size={18} />
        </Switch>
      </div>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <div ref={list} className="flex flex-col gap-3">
              {stacks.data.map((stack) => {
                return <StackItem {...stack} edit={editable} key={stack.id} />;
              })}
            </div>
          ) : (
            <>
              {!editable && (
                <Empty message="No Habit Stacks">
                  <Btn icon={IconPlus} onClick={() => setEditable(true)}>
                    Create Habit Stack
                  </Btn>
                </Empty>
              )}
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}

      <div ref={createForm}>{editable && <StackCreate />}</div>
    </Card>
  );
};
