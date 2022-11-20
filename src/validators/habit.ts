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

export const incompleteHabitValidator = completeHabitValidator;
export type IncompleteHabitInputType = z.infer<typeof incompleteHabitValidator>;

export const deleteHabitValidator = z.string();
export type DeleteHabitInputType = z.infer<typeof deleteHabitValidator>;

export const deleteStackValidator = z.string();
export type DeleteStackInputType = z.infer<typeof deleteStackValidator>;
