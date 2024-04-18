import { FC } from "react";
import { Chessboard as CB} from "react-chessboard";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
}

const Move: FC<IProps> = ({className}) => {
  
  return (
        <div className={cn("", className)}>
            <CB 
            />
        </div>
    );
};

export default Move;