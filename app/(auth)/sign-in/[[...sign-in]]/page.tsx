import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          card: "bg-[#efefef]",
        },
      }}
      path="/sign-in"
    />
  );
}
