import { Btn, Input } from "@components";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCheck } from "@tabler/icons";
import { AddWeightInputType, addWeightValidator } from "@validators";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { trpc } from "utils/trpc";

export const WeightAdd = () => {
  const add = trpc.weight.add.useMutation();
  const latestWeight = trpc.weight.getLatest.useQuery();

  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<AddWeightInputType>({
    resolver: zodResolver(addWeightValidator),
    defaultValues: {
      kilograms: latestWeight.data?.kilograms,
    },
  });

  useEffect(() => {
    if (latestWeight.data) {
      setValue("kilograms", latestWeight.data.kilograms);
    }
  }, [latestWeight.data]);

  const onSubmit = (data: AddWeightInputType) => {
    add.mutate(data);
    reset({
      kilograms: data.kilograms,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-3"
    >
      <Input
        label={"Weight (kg)"}
        error={errors.kilograms?.message}
        type="number"
        min={45}
        max={150}
        step={0.1}
        register={register("kilograms", { valueAsNumber: true })}
      />
      <Btn type="submit" icon={IconCheck} disabled={add.isLoading}>
        Log Weight
      </Btn>
    </form>
  );
};
