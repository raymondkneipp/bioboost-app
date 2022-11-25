import {
  completeStackValidator,
  createStackValidator,
  deleteStackValidator,
  incompleteStackValidator,
} from "@validators";
import { isSameDay } from "date-fns";
import { protectedProcedure, router } from "../trpc";

export const stackRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.stack.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        habits: {
          orderBy: {
            name: "asc",
          },
        },
      },
    });
  }),
  addStack: protectedProcedure
    .input(createStackValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stack.create({
        data: {
          userId: ctx.session.user.id,
          name: input.name,
          habits: {
            createMany: {
              data: input.habits,
            },
          },
        },
      });
    }),
  deleteStack: protectedProcedure
    .input(deleteStackValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.stack.delete({
        where: {
          id: input,
        },
      });
    }),
  completeStack: protectedProcedure
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
  incompleteStack: protectedProcedure
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
