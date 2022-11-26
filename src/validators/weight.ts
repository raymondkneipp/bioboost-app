import { z } from "zod";

export const getWeightValidator = z.object({
  start: z.date(),
  end: z.date(),
});

export const addWeightValidator = z.object({
  kilograms: z.number(),
});
export type AddWeightInputType = z.infer<typeof addWeightValidator>;

export const deleteWeightValidator = z.string();
export type DeleteWeightInputType = z.infer<typeof deleteWeightValidator>;
