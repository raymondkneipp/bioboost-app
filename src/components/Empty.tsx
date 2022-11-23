type Props = {
  message: string;
  children?: React.ReactNode;
};

export const Empty = ({ message, children }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl p-12">
      <span className="text-center text-stone-400">{message}</span>
      {children}
    </div>
  );
};
