import { Btn, Card, CardHeader, Empty, HabitItem } from "@components";
import { IconChecklist } from "@tabler/icons";
import { trpc } from "utils/trpc";

export const ListStacks = () => {
  const stacks = trpc.habits.getAll.useQuery();
  const deleteStack = trpc.habits.deleteStack.useMutation();

  return (
    <Card>
      <CardHeader icon={IconChecklist}>Habit Stacks</CardHeader>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <>
              {stacks.data.map((stack) => {
                return (
                  <div key={stack.id}>
                    <h3 className="text-lg text-stone-100">{stack.name}</h3>
                    <Btn
                      onClick={() => deleteStack.mutate(stack.id)}
                      intent="secondary"
                      size="sm"
                    >
                      delete
                    </Btn>
                    <div className="ml-6">
                      {stack.habits.map((habit) => (
                        <HabitItem {...habit} key={habit.id} />
                      ))}
                    </div>
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
