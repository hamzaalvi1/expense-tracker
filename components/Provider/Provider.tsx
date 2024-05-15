import { ThemeProvider } from "next-themes";

interface ProviderProps {
  children: React.ReactNode;
}
const Provider: React.FC<ProviderProps> = (props) => {
  const { children } = props;
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Provider;
