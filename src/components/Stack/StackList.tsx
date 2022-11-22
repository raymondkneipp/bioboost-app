import { Card, CardHeader, Empty, StackItem } from "@components";
import { IconChecklist } from "@tabler/icons";
import { trpc } from "utils/trpc";

export const StackList = () => {
  const stacks = trpc.stack.getAll.useQuery();

  return (
    <Card>
      <CardHeader icon={IconChecklist}>Habit Stacks</CardHeader>

      {stacks.data ? (
        <>
          {stacks.data.length > 0 ? (
            <>
              {stacks.data.map((stack) => {
                return <StackItem {...stack} />;
              })}
            </>
          ) : (
            <Empty
              message="No Habit Stacks"
              cta={{ href: "/habits", label: "Create Stack" }}
            />
          )}
        </>
      ) : (
        "loading..."
      )}
    </Card>
  );
};
