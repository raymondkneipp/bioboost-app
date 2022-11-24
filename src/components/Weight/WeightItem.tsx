import { Btn } from "@components";
import { Weight } from "@prisma/client";
import { IconTrash } from "@tabler/icons";
import { formatDistance } from "date-fns";
import { trpc } from "utils/trpc";

export const WeightItem = ({
  id,
  kilograms,
  createdAt,
  edit,
}: Weight & { edit: boolean }) => {
  const deleteWeight = trpc.weight.delete.useMutation();

  const isLoading = deleteWeight.isLoading;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <h3 className="flex-1 text-lg text-stone-100">
          <span className="">{kilograms} kg</span>{" "}
          <span className="text-stone-400">
            logged {formatDistance(createdAt, new Date())} ago
          </span>
        </h3>

        {edit && (
          <Btn
            onClick={() => deleteWeight.mutate(id)}
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
