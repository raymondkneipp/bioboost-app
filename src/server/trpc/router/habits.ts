import { publicProcedure, router } from "../trpc";

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

export const habitsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return todos;
  }),
});
