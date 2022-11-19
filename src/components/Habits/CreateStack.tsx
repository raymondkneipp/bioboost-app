import { Btn, Card, CardHeader } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconClipboardPlus } from "@tabler/icons";
import { CreateStackInputType, createStackValidator } from "@validators";
import { useFieldArray, useForm } from "react-hook-form";
import { trpc } from "utils/trpc";

export const CreateStack = () => {
  const addStack = trpc.habits.addStack.useMutation();

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="stack-name">Stack Name</label>
        <input type="text" id="stack-name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <div className="flex flex-col gap-3 rounded-xl border border-stone-700 p-3">
          {fields.map((field, index) => (
            <div key={field.id}>
              <label htmlFor={field.id}>Habit</label>
              <input
                type="text"
                id={field.id}
                {...register(`habits.${index}.name` as const)}
              />
              <p>{errors.habits?.[index]?.name?.message}</p>
              <Btn
                onClick={() => {
                  if (fields.length > 1) {
                    remove(index);
                  }
                }}
                intent="secondary"
                type="button"
              >
                x
              </Btn>
            </div>
          ))}
          <Btn
            onClick={() => append({ name: "" })}
            intent="secondary"
            type="button"
          >
            Add Habbit
          </Btn>
        </div>

        <Btn type="submit">Create Habit Stack</Btn>
      </form>
    </Card>
  );
};
