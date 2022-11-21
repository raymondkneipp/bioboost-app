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

export const deleteStackValidator = z.string();
export type DeleteStackInputType = z.infer<typeof deleteStackValidator>;
