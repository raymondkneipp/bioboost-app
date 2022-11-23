import { Feeling } from "@prisma/client";
import { z } from "zod";

export const getMoodsValidator = z.date();

export const createMoodValidator = z.object({
  feeling: z.nativeEnum(Feeling),
});
export type CreateMoodInputType = z.infer<typeof createMoodValidator>;

export const deleteMoodValidator = z.string();
export type DeleteMoodInputType = z.infer<typeof deleteMoodValidator>;
