import { router } from "../trpc";
import { authRouter } from "./auth";
import { badHabitRouter } from "./bad-habit";
import { habitRouter } from "./habit";
import { moodRouter } from "./mood";
import { stackRouter } from "./stack";
import { weightRouter } from "./weight";

export const appRouter = router({
  badHabit: badHabitRouter,
  habit: habitRouter,
  stack: stackRouter,
  mood: moodRouter,
  weight: weightRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
