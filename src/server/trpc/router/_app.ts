import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { habitsRouter } from "./habits";

export const appRouter = router({
  example: exampleRouter,
  habits: habitsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
