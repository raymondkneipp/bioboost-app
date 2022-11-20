import { Card, CardHeader, Empty } from "@components";
import { IconChecklist } from "@tabler/icons";
import { isToday, startOfToday } from "date-fns";
import { trpc } from "utils/trpc";

export const ListStacks = () => {
  const stacks = trpc.habits.getAll.useQuery();
  const completeHabit = trpc.habits.completeHabit.useMutation();
  const incompleteHabit = trpc.habits.incompleteHabit.useMutation();

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
                    <h3>{stack.name}</h3>
                    <div className="ml-6">
                      {stack.habits.map((habit) => {
                        const completed = habit.completedDates.find((date) =>
                          isToday(date)
                        )
                          ? true
                          : false;
                        return (
                          <div key={habit.id}>
                            <input
                              disabled={
                                incompleteHabit.isLoading ||
                                completeHabit.isLoading
                              }
                              className="disabled:opacity-30"
                              type="checkbox"
                              checked={completed}
                              onChange={(e) => {
                                if (completed) {
                                  incompleteHabit.mutate({
                                    id: habit.id,
                                    date: startOfToday(),
                                  });
                                } else {
                                  completeHabit.mutate({
                                    id: habit.id,
                                    date: startOfToday(),
                                  });
                                }
                              }}
                            />{" "}
                            {habit.name}
                          </div>
                        );
                      })}
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
