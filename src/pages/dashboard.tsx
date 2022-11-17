import { Card } from "@components";
import { IconChecklist } from "@tabler/icons";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  type SubTodo = {
    id: string;
    title: string;
    done: boolean;
  };

  type Todo = {
    id: string;
    title: string;
    done: boolean;
    stack?: SubTodo[];
  };

  const todos: Todo[] = [
    {
      id: "1",
      title: "Brush Teeth",
      done: true,
    },
    {
      id: "2",
      title: "Make Bed",
      done: false,
    },
    {
      id: "3",
      title: "Read",
      done: false,
      stack: [
        {
          id: "3-1",
          title: "News",
          done: true,
        },
        {
          id: "3-2",
          title: "Book",
          done: false,
        },
      ],
    },
  ];

  return (
    <>
      <Card>
        {/* Header */}
        <header className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-xl bg-purple-400 p-3 text-stone-900">
            <IconChecklist />
          </div>
          <h2 className="text-lg font-medium">Habits</h2>
        </header>
        {/* End of Header */}

        {todos.map((todo) => (
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
      </Card>
    </>
  );
};

export default Dashboard;
