import { z } from "zod";

export const createBadHabitValidator = z.object({
  name: z.string().min(3),
});
export type CreateBadHabitInputType = z.infer<typeof createBadHabitValidator>;

export const failHabitValidator = z.object({
  id: z.string(),
  date: z.date(),
});
export type FailHabitInputType = z.infer<typeof failHabitValidator>;

export const successHabitValidator = failHabitValidator;
export type SuccessHabitInputType = z.infer<typeof successHabitValidator>;

export const deleteBadHabitValidator = z.string();
export type DeleteBadHabitInputType = z.infer<typeof deleteBadHabitValidator>;
