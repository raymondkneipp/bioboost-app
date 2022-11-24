import {
  addWeightValidator,
  deleteWeightValidator,
  getWeightValidator,
} from "@validators";
import { endOfDay, startOfDay } from "date-fns";
import { publicProcedure, router } from "../trpc";

export const weightRouter = router({
  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.weight.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.weight.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getDay: publicProcedure.input(getWeightValidator).query(({ ctx, input }) => {
    return ctx.prisma.weight.findFirst({
      where: {
        createdAt: {
          gte: startOfDay(input),
          lt: endOfDay(input),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  add: publicProcedure.input(addWeightValidator).mutation(({ ctx, input }) => {
    return ctx.prisma.weight.create({
      data: {
        kilograms: input.kilograms,
      },
    });
  }),
  delete: publicProcedure
    .input(deleteWeightValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.weight.delete({
        where: {
          id: input,
        },
      });
    }),
});
