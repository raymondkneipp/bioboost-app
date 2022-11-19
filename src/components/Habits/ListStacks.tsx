import { Card, CardHeader, Empty } from "@components";
import { IconChecklist } from "@tabler/icons";
import { isToday } from "date-fns";
import { trpc } from "utils/trpc";

export const ListStacks = () => {
  const stacks = trpc.habits.getAll.useQuery();

  return (
    <Card>
      <CardHeader icon={IconChecklist}>Habit Stacks</CardHeader>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <>
              {stacks.data.map((stack) => {
                return (
                  <div>
                    <h3>{stack.name}</h3>
                    <div className="ml-6">
                      {stack.habits.map((habit) => {
                        const completed = habit.completedDates.find((date) =>
                          isToday(date)
                        )
                          ? true
                          : false;
                        return (
                          <div>
                            <input type="checkbox" /> {habit.name}{" "}
                            {completed ? "yes" : "no"}
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
