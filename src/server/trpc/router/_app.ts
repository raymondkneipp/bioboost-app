import { router } from "../trpc";
import { authRouter } from "./auth";
import { habitsRouter } from "./habits";

export const appRouter = router({
  habits: habitsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
