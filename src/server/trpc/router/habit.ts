import {
  completeHabitValidator,
  deleteHabitValidator,
  incompleteHabitValidator,
} from "@validators";
import { isSameDay } from "date-fns";
import { protectedProcedure, router } from "../trpc";

export const habitRouter = router({
  completeHabit: protectedProcedure
    .input(completeHabitValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.habit.update({
        where: {
          id: input.id,
        },
        data: {
          completedDates: {
            push: input.date,
          },
        },
      });
    }),
  incompleteHabit: protectedProcedure
    .input(incompleteHabitValidator)
    .mutation(async ({ ctx, input }) => {
      const habit = await ctx.prisma.habit.findUnique({
        where: {
          id: input.id,
        },
        select: { completedDates: true },
      });

      return await ctx.prisma.habit.update({
        where: {
          id: input.id,
        },
        data: {
          completedDates: {
            set: habit?.completedDates.filter(
              (date) => !isSameDay(date, input.date)
            ),
          },
        },
      });
    }),
  deleteHabit: protectedProcedure
    .input(deleteHabitValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.habit.delete({
        where: {
          id: input,
        },
      });
    }),
});
