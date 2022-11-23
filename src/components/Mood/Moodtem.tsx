import { Btn } from "@components";
import { Mood } from "@prisma/client";
import { IconCircleDotted, IconTrash } from "@tabler/icons";
import { format } from "date-fns";
import React from "react";
import { trpc } from "utils/trpc";
import { getMoodStyles } from "./utils";

export const MoodItem = ({
  id,
  feeling,
  createdAt,
  edit,
}: Mood & { edit: boolean }) => {
  const deleteMood = trpc.mood.delete.useMutation();

  const isLoading = deleteMood.isLoading;

  const { icon, bg, fg } = getMoodStyles(feeling);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {isLoading ? (
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-stone-800">
            <span className="animate-spin text-stone-100">
              <IconCircleDotted size={18} />
            </span>
          </div>
        ) : (
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-xl text-stone-900 ${bg}`}
          >
            {React.createElement(icon)}
          </div>
        )}

        <h3 className="flex-1 text-lg text-stone-100">
          <span className="text-stone-400">Feeling</span>{" "}
          <span className={`${fg}`}>{feeling.toLowerCase()}</span>{" "}
          <span className="text-stone-400">
            at {format(createdAt, "h:mm aaa")}
          </span>
        </h3>

        {edit && (
          <Btn
            onClick={() => deleteMood.mutate(id)}
            intent="danger"
            size="sm"
            icon={IconTrash}
            square
            disabled={isLoading}
          >
            Delete
          </Btn>
        )}
      </div>
    </div>
  );
};
