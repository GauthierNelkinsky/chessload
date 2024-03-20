import { FC } from "react";
import Chessload  from "@/public/icons/chessload";
import Link from "next/link";

interface IProps {

}
const Logo: FC<IProps> = ({}) => {
  
  return (
    <Link className="flex items-center" href="/">
        <Chessload className="fill-foreground"/>
    </Link>
    );
};

export default Logo;
