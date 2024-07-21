import { Background } from "@/components/background";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="z-[4] h-full w-full flex flex-col items-center justify-center">
        <div className="h-full w-full md:h-auto md:w-[420px]">{children}</div>
      </div>
      <Background />
    </div>
  );
};

export default AuthLayout;
