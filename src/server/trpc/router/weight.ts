import {
  addWeightValidator,
  deleteWeightValidator,
  getWeightValidator,
} from "@validators";
import { protectedProcedure, router } from "../trpc";

export const weightRouter = router({
  getLatest: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.weight.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.weight.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getDay: protectedProcedure
    .input(getWeightValidator)
    .query(({ ctx, input }) => {
      return ctx.prisma.weight.findFirst({
        where: {
          userId: ctx.session.user.id,
          createdAt: {
            gte: input.start,
            lt: input.end,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    }),
  add: protectedProcedure
    .input(addWeightValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.weight.create({
        data: {
          kilograms: input.kilograms,
          userId: ctx.session.user.id,
        },
      });
    }),
  delete: protectedProcedure
    .input(deleteWeightValidator)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.weight.delete({
        where: {
          id: input,
        },
      });
    }),
});
