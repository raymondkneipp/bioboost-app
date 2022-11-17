import { Card, CardHeader } from "@components";
import { IconChecklist } from "@tabler/icons";
import { type NextPage } from "next";
import { trpc } from "utils/trpc";

const Dashboard: NextPage = () => {
  const habits = trpc.habits.getAll.useQuery();

  return (
    <>
      <Card>
        <CardHeader icon={IconChecklist}>Habits</CardHeader>

        {habits.data ? (
          <>
            {habits.data.map((todo) => (
              <div>
                <div>
                  <input type="checkbox" checked={todo.done} /> {todo.title}
                </div>
                {todo.stack && (
                  <div className="ml-6">
                    {todo.stack.map((subTodo) => (
                      <div>
                        <input type="checkbox" checked={subTodo.done} />{" "}
                        {subTodo.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          "loading..."
        )}
      </Card>
    </>
  );
};

export default Dashboard;
