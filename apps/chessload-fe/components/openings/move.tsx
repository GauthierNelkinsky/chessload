import { FC } from "react";
import { Book , BookMarked} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
}

const Move: FC<IProps> = ({className}) => {
  
  return (
        <Button variant="ghost" className={cn("w-full flex justify-between items-center", className)}>
            <div className="flex gap-4">
                <Book size={18}/>
                Qd3 - Benko Gambit
            </div>
            <div className="flex gap-2">
                110
                <BookMarked size={18}/>
            </div>
        </Button>
    );
};

export default Move;