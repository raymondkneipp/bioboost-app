import {
  completeHabitValidator,
  createStackValidator,
  incompleteHabitValidator,
} from "@validators";
import { isSameDay } from "date-fns";
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
  completeHabit: publicProcedure
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
  incompleteHabit: publicProcedure
    .input(incompleteHabitValidator)
    .mutation(async ({ ctx, input }) => {
      const habit = await ctx.prisma.habit.findUnique({
        where: {
          id: input.id,
        },
        select: { completedDates: true },
      });

      return ctx.prisma.habit.update({
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
});
