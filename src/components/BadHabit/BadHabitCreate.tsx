import { Btn, Card, CardHeader, Input } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck, IconPlus } from "@tabler/icons";
import { CreateBadHabitInputType, createBadHabitValidator } from "@validators";
import { useForm } from "react-hook-form";
import { trpc } from "utils/trpc";

export const BadHabitCreate = () => {
  const add = trpc.badHabit.add.useMutation();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<CreateBadHabitInputType>({
    resolver: zodResolver(createBadHabitValidator),
  });

  const onSubmit = (data: CreateBadHabitInputType) => {
    add.mutate(data);
    reset();
  };

  return (
    <Card>
      <CardHeader icon={IconPlus}>Add Bad Habit</CardHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start gap-3"
      >
        <Input
          label="Bad Habit"
          error={errors.name?.message}
          type="text"
          register={register("name")}
        />

        <Btn type="submit" icon={IconCheck}>
          Add Bad Habit
        </Btn>
      </form>
    </Card>
  );
};
