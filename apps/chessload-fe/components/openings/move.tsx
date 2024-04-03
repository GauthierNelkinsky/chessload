import { FC, useEffect, useState } from "react";
import { Book , BookCheck} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    type? : "selected" | "unselected"; 
}

const Move: FC<IProps> = ({className, type}) => {
  
  return (
    //Change button variant depending on the type
        <Button variant={"ghost"}
        className={cn("w-full flex justify-between items-center", className,
        )}>
            <div className="flex gap-4">
                {/* <Book size={18}/> */}
                Qd3 - Benko Gambit
            </div>
            <div className="flex gap-1 align-center text-xs text-secondary">
                {type === "selected" && <BookCheck size={18}/> 
                }
            </div>
        </Button>
    );
};

export default Move;