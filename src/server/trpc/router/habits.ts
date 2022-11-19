import { createStackValidator } from "@validators";
import { publicProcedure, router } from "../trpc";

export const habitsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.stack.findMany({
      include: {
        habits: true,
      },
    });
  }),
  addStack: publicProcedure
    .input(createStackValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stack.create({
        data: {
          name: input.name,
          habits: {
            createMany: {
              data: input.habits,
            },
          },
        },
      });
    }),
});
