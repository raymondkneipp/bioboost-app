import {
  createMoodValidator,
  deleteMoodValidator,
  getMoodsValidator,
} from "@validators";
import { protectedProcedure, router } from "../trpc";

export const moodRouter = router({
  getDay: protectedProcedure
    .input(getMoodsValidator)
    .query(({ ctx, input }) => {
      return ctx.prisma.mood.findMany({
        where: {
          userId: ctx.session.user.id,
          createdAt: {
            gte: input.start,
            lt: input.end,
          },
        },
        orderBy: {
          createdAt: "asc",
        },
      });
    }),
  add: protectedProcedure
    .input(createMoodValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.mood.create({
        data: {
          feeling: input.feeling,
          userId: ctx.session.user.id,
        },
      });
    }),
  delete: protectedProcedure
    .input(deleteMoodValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.mood.delete({
        where: {
          id: input,
        },
      });
    }),
});
