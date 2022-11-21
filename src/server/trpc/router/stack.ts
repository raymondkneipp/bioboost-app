import { createStackValidator, deleteStackValidator } from "@validators";
import { publicProcedure, router } from "../trpc";

export const stackRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.stack.findMany({
      include: {
        habits: {
          orderBy: {
            name: "asc",
          },
        },
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
  deleteStack: publicProcedure
    .input(deleteStackValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stack.delete({
        where: {
          id: input,
        },
      });
    }),
});
