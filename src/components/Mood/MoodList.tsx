import { Btn, Card, CardHeader, Empty, Spinner } from "@components";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Switch } from "@headlessui/react";
import { IconEdit, IconMoodHappy, IconPlus } from "@tabler/icons";
import { startOfToday } from "date-fns";
import { useState } from "react";
import { trpc } from "utils/trpc";
import { MoodCreate } from "./MoodCreate";
import { MoodItem } from "./Moodtem";

export const MoodList = () => {
  const moods = trpc.mood.getDay.useQuery(startOfToday());

  const [editable, setEditable] = useState(false);

  const [list] = useAutoAnimate<HTMLDivElement>();
  const [createForm] = useAutoAnimate<HTMLDivElement>();

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <CardHeader icon={IconMoodHappy}>Mood</CardHeader>

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

      {moods.data ? (
        <>
          {moods.data.length > 0 ? (
            <div ref={list} className="flex flex-col gap-3">
              {moods.data.map((mood) => {
                return <MoodItem {...mood} edit={editable} key={mood.id} />;
              })}
            </div>
          ) : (
            <>
              {!editable && (
                <Empty message="No Data">
                  <Btn icon={IconPlus} onClick={() => setEditable(true)}>
                    Log Mood
                  </Btn>
                </Empty>
              )}
            </>
          )}
        </>
      ) : (
        <Spinner />
      )}

      <div ref={createForm}>{editable && <MoodCreate />}</div>
    </Card>
  );
};
