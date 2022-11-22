import { isSameDay } from "date-fns";
import {
  createBadHabitValidator,
  failHabitValidator,
  successHabitValidator,
} from "validators/bad-habit";
import { publicProcedure, router } from "../trpc";

export const badHabitRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.badHabit.findMany({
      orderBy: {
        name: "asc",
      },
    });
  }),
  add: publicProcedure
    .input(createBadHabitValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.badHabit.create({
        data: {
          name: input.name,
        },
      });
    }),
  fail: publicProcedure.input(failHabitValidator).mutation(({ ctx, input }) => {
    return ctx.prisma.badHabit.update({
      where: {
        id: input.id,
      },
      data: {
        failedDates: {
          push: input.date,
        },
      },
    });
  }),
  success: publicProcedure
    .input(successHabitValidator)
    .mutation(async ({ ctx, input }) => {
      const badHabit = await ctx.prisma.badHabit.findUnique({
        where: {
          id: input.id,
        },
        select: {
          failedDates: true,
        },
      });

      return await ctx.prisma.badHabit.update({
        where: {
          id: input.id,
        },
        data: {
          failedDates: {
            set: badHabit?.failedDates.filter(
              (day) => !isSameDay(day, input.date)
            ),
          },
        },
      });
    }),
});
