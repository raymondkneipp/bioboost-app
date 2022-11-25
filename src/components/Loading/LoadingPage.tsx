import { Spinner } from "./Spinner";

export const LoadingPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Spinner />
    </div>
  );
};
