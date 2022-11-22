import { Btn, Card, CardHeader, Input } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  IconCheck,
  IconClipboardPlus,
  IconMinus,
  IconPlus,
} from "@tabler/icons";
import { CreateStackInputType, createStackValidator } from "@validators";
import { useFieldArray, useForm } from "react-hook-form";
import { trpc } from "utils/trpc";

export const StackCreate = () => {
  const addStack = trpc.stack.addStack.useMutation();

  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm<CreateStackInputType>({
    resolver: zodResolver(createStackValidator),
    defaultValues: {
      habits: [
        {
          name: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "habits",
    control,
  });

  const onSubmit = (data: CreateStackInputType) => {
    addStack.mutate(data);
    reset();
  };

  return (
    <Card>
      <CardHeader icon={IconClipboardPlus}>Create Habit Stack</CardHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-3"
      >
        <Input
          label="Stack Name"
          error={errors.name?.message}
          type="text"
          register={register("name")}
        />

        <div className="flex w-full flex-col items-start gap-3 rounded-xl border border-stone-800 p-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex w-full flex-col items-start gap-1"
            >
              <Input
                label="Habit"
                error={errors.habits?.[index]?.name?.message}
                type="text"
                register={register(`habits.${index}.name` as const)}
              />
              {index > 0 && (
                <Btn
                  onClick={() => {
                    if (fields.length > 1) {
                      remove(index);
                    }
                  }}
                  intent="danger"
                  type="button"
                  size="sm"
                  icon={IconMinus}
                >
                  Remove
                </Btn>
              )}
            </div>
          ))}
          <Btn
            onClick={() => append({ name: "" })}
            intent="secondary"
            type="button"
            icon={IconPlus}
          >
            Add Habbit
          </Btn>
        </div>

        <Btn type="submit" icon={IconCheck}>
          Create Habit Stack
        </Btn>
      </form>
    </Card>
  );
};
