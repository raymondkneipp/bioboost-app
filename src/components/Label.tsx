interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label = ({ children, ...rest }: Props) => {
  return (
    <label {...rest} className="text-sm text-stone-400">
      {children}
    </label>
  );
};
