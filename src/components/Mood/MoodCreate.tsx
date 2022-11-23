import { Btn, Label } from "@components";
import { RadioGroup } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Feeling } from "@prisma/client";
import { IconCheck } from "@tabler/icons";
import { CreateMoodInputType, createMoodValidator } from "@validators";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { trpc } from "utils/trpc";
import { getMoodStyles } from "./utils";

export const MoodCreate = () => {
  const add = trpc.mood.add.useMutation();

  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateMoodInputType>({
    resolver: zodResolver(createMoodValidator),
    defaultValues: {
      feeling: Feeling.GREAT,
    },
  });

  const onSubmit = (data: CreateMoodInputType) => {
    add.mutate(data);
    reset({ feeling: Feeling.GREAT });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-start gap-3"
    >
      <Controller
        control={control}
        name="feeling"
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onChange={onChange}
            className="flex w-full flex-col gap-1"
          >
            <RadioGroup.Label as={Label} htmlFor="feeling">
              Mood
            </RadioGroup.Label>

            <div className="m-1 grid grid-cols-6 gap-3">
              {Object.keys(Feeling).map((feeling) => {
                const { icon, bg, fg } = getMoodStyles(feeling as Feeling);

                return (
                  <RadioGroup.Option
                    disabled={add.isLoading}
                    key={feeling}
                    value={feeling}
                    className="focus:outline-none"
                  >
                    {({ checked, disabled }) => (
                      <div
                        className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl p-3 text-4xl text-stone-900 transition-all ${bg} ${
                          disabled ? "cursor-not-allowed opacity-30" : ""
                        } ${
                          checked
                            ? "ring-2 ring-stone-100 ring-offset-4 ring-offset-stone-900 focus:outline-none"
                            : ""
                        }`}
                      >
                        {React.createElement(icon, { size: 36 })}
                      </div>
                    )}
                  </RadioGroup.Option>
                );
              })}
            </div>
          </RadioGroup>
        )}
      />

      <Btn type="submit" icon={IconCheck} disabled={add.isLoading}>
        Log Mood
      </Btn>
    </form>
  );
};
