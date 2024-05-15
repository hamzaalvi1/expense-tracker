import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        elements: {
          headerTitle: "capitalize text-[22px] font-semibold",
          button: "py-3",
          card: "bg-[#efefef]",
        },
      }}
      path="/sign-up"
    />
  );
}
