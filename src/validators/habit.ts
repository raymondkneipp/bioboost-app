import { z } from "zod";

export const completeHabitValidator = z.object({
  id: z.string(),
  date: z.date(),
});
export type CompleteHabitInputType = z.infer<typeof completeHabitValidator>;

export const incompleteHabitValidator = completeHabitValidator;
export type IncompleteHabitInputType = z.infer<typeof incompleteHabitValidator>;

export const deleteHabitValidator = z.string();
export type DeleteHabitInputType = z.infer<typeof deleteHabitValidator>;
