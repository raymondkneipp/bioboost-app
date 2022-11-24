import { Btn, Card, CardHeader, Empty } from "@components";
import { Switch } from "@headlessui/react";
import { IconEdit, IconPlus, IconScaleOutline } from "@tabler/icons";
import { useState } from "react";
import { trpc } from "utils/trpc";
import { WeightAdd } from "./WeightAdd";
import { WeightItem } from "./WeightItem";

export const WeightList = () => {
  const weights = trpc.weight.getAll.useQuery();

  const [editable, setEditable] = useState(false);

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <CardHeader icon={IconScaleOutline}>Weight</CardHeader>

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

      {weights.data ? (
        <>
          {weights.data.length > 0 ? (
            <>
              {weights.data.slice(0, 3).map((weight) => {
                return (
                  <WeightItem {...weight} edit={editable} key={weight.id} />
                );
              })}
            </>
          ) : (
            <>
              {!editable && (
                <Empty message="No Data">
                  <Btn icon={IconPlus} onClick={() => setEditable(true)}>
                    Log Weight
                  </Btn>
                </Empty>
              )}
            </>
          )}
        </>
      ) : (
        "loading..."
      )}

      {editable && <WeightAdd />}
    </Card>
  );
};
