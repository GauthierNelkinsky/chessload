import { FC } from "react";
import { Chessboard as CB} from "react-chessboard";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    width?: undefined | number;
}

const Move: FC<IProps> = ({className, width}) => {
  
  return (
        <div className={cn("", className)}>
            <CB />
        </div>
    );
};

export default Move;