import { router } from "../trpc";
import { authRouter } from "./auth";
import { habitRouter } from "./habit";
import { stackRouter } from "./stack";

export const appRouter = router({
  habit: habitRouter,
  stack: stackRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
