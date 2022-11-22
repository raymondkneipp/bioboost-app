import { router } from "../trpc";
import { authRouter } from "./auth";
import { badHabitRouter } from "./bad-habit";
import { habitRouter } from "./habit";
import { stackRouter } from "./stack";

export const appRouter = router({
  badHabit: badHabitRouter,
  habit: habitRouter,
  stack: stackRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
