import { z } from "zod";

export const createStackValidator = z.object({
  name: z.string().min(3),
  habits: z
    .object({
      name: z.string().min(3),
    })
    .array()
    .min(1)
    .max(6),
});

export type CreateStackInputType = z.infer<typeof createStackValidator>;

export const completeHabitValidator = z.object({
  id: z.string(),
  date: z.date(),
});

export type CompleteHabitInputType = z.infer<typeof completeHabitValidator>;

export const incompleteHabitValidator = z.object({
  id: z.string(),
  date: z.date(),
});

export type IncompleteHabitInputType = z.infer<typeof incompleteHabitValidator>;
