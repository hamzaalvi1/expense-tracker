import { Logo } from "@/components/Logo";
interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex w-full h-screen flex-col items-center justify-center">
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
