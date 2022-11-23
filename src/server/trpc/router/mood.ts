import {
  createMoodValidator,
  deleteMoodValidator,
  getMoodsValidator,
} from "@validators";
import { endOfDay, startOfDay } from "date-fns";
import { publicProcedure, router } from "../trpc";

export const moodRouter = router({
  getAll: publicProcedure.input(getMoodsValidator).query(({ ctx, input }) => {
    return ctx.prisma.mood.findMany({
      where: {
        createdAt: {
          gte: startOfDay(input),
          lt: endOfDay(input),
        },
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }),
  add: publicProcedure.input(createMoodValidator).mutation(({ ctx, input }) => {
    return ctx.prisma.mood.create({
      data: {
        feeling: input.feeling,
      },
    });
  }),
  delete: publicProcedure
    .input(deleteMoodValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.mood.delete({
        where: {
          id: input,
        },
      });
    }),
});
