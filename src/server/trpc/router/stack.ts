import {
  completeStackValidator,
  createStackValidator,
  deleteStackValidator,
  incompleteStackValidator,
} from "@validators";
import { isSameDay } from "date-fns";
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
  completeStack: publicProcedure
    .input(completeStackValidator)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.habit.updateMany({
        where: {
          stackId: input.id,
        },
        data: {
          completedDates: {
            push: input.date,
          },
        },
      });
    }),
  incompleteStack: publicProcedure
    .input(incompleteStackValidator)
    .mutation(async ({ ctx, input }) => {
      const habits = await ctx.prisma.habit.findMany({
        where: {
          stackId: input.id,
        },
      });

      return Promise.all(
        habits.map(async (habit) => {
          return await ctx.prisma.habit.update({
            where: {
              id: habit.id,
            },
            data: {
              completedDates: {
                set: habit?.completedDates.filter(
                  (date) => !isSameDay(date, input.date)
                ),
              },
            },
          });
        })
      );
    }),
});
