import { FC } from "react";
import { Book , BookMarked} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";

interface IProps {

}

const MoveLine: FC<IProps> = ({}) => {
  
  return (
        <Button variant="ghost" className="w-full flex justify-between items-center">
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

export default MoveLine;