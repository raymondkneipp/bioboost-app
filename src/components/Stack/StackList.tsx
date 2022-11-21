import { Btn, Card, CardHeader, Empty, HabitItem } from "@components";
import { IconCheck, IconChecklist, IconTrash, IconX } from "@tabler/icons";
import { isToday } from "date-fns";
import { trpc } from "utils/trpc";

export const StackList = () => {
  const stacks = trpc.stack.getAll.useQuery();
  const deleteStack = trpc.stack.deleteStack.useMutation();

  return (
    <Card>
      <CardHeader icon={IconChecklist}>Habit Stacks</CardHeader>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <>
              {stacks.data.map((stack) => {
                const stackCompleted = stack.habits.every((habit) => {
                  if (
                    habit.completedDates.filter((date) => isToday(date))
                      .length >= 1
                  ) {
                    return true;
                  }
                  return false;
                });
                return (
                  <div key={stack.id} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      {stackCompleted ? <IconCheck /> : <IconX />}
                      <h3 className="text-lg text-stone-100">{stack.name}</h3>
                      <Btn
                        onClick={() => deleteStack.mutate(stack.id)}
                        intent="danger"
                        size="sm"
                        icon={IconTrash}
                        square
                      >
                        Delete
                      </Btn>
                    </div>
                    {stack.habits.length > 0 && (
                      <div className="ml-6 flex flex-col gap-3">
                        {stack.habits.map((habit) => (
                          <HabitItem {...habit} key={habit.id} />
                        ))}
                      </div>
                    )}
                  </div>
                );
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