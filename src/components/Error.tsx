type Props = {
  message: string | undefined;
  id: string;
};

export const Error = ({ id, message }: Props) => {
  if (message) {
    return (
      <label htmlFor={id} className="text-red-400">
        {message}
      </label>
    );
  }
  return null;
};
