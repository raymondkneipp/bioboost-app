import { isSameDay } from "date-fns";
import {
  createBadHabitValidator,
  deleteBadHabitValidator,
  failHabitValidator,
  successHabitValidator,
} from "validators/bad-habit";
import { protectedProcedure, router } from "../trpc";

export const badHabitRouter = router({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.badHabit.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        name: "asc",
      },
    });
  }),
  add: protectedProcedure
    .input(createBadHabitValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.badHabit.create({
        data: {
          userId: ctx.session.user.id,
          name: input.name,
        },
      });
    }),
  fail: protectedProcedure
    .input(failHabitValidator)
    .mutation(({ ctx, input }) => {
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
  success: protectedProcedure
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
  delete: protectedProcedure
    .input(deleteBadHabitValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.badHabit.delete({
        where: {
          id: input,
        },
      });
    }),
});
