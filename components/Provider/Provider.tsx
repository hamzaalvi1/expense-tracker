import { ClerkProvider } from "@clerk/nextjs";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  return (
    <>
      <ClerkProvider>{children}</ClerkProvider>
    </>
  );
};

export default Provider;
