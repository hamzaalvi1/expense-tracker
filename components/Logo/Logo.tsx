import Link from "next/link";
import { CircleDollarSign } from "lucide-react";

interface LogoProps {
  styles?: string;
  textStyles?: string;
}

const Logo: React.FC<LogoProps> = (props) => {
  const { styles, textStyles } = props;
  return (
    <Link href={"/"} className="flex justify-center items-center gap-3 my-[10px]">
      <CircleDollarSign
        className={`${
          styles || ""
        } stroke h-11 w-11 stroke-violet-500 stroke-[1.5]`}
      />
      <p
        className={`${
          textStyles || ""
        } text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold`}
      >
        Budget Tracker
      </p>
    </Link>
  );
};

export default Logo;
