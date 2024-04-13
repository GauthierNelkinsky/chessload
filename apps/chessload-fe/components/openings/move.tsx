import { FC, useEffect, useState } from "react";
import { Book, X, GitBranchPlus, BookMarked} from "lucide-react";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
    type? : "selected" | "unselected"; 
    name?: string;
}

const Move: FC<IProps> = ({className, type, name}) => {
  
  return (
    //Change button variant depending on the type
        <Button variant={type === "selected" ? "selected" : "move"}
        className={cn("w-full flex justify-between items-center group w-full gap-2", className,
        )}>
            <div className="flex items-center overflow-hidden gap-2">
                <Book size={14}/>
                <div className="truncate ... w-auto">
                    {name}
                </div>
            </div>
                <div className="text-secondary flex group-hover:hidden">
                    79%    
                </div>
                <div className="text-secondary gap-1 align-center items-center group-hover:flex hidden hover:brightness-150 p-1">
                    {type === "selected" ? (
                        <span className="text-destructive">
                            <X size={18}/>
                        </span>                
                    ):(
                        <span className="">
                            <GitBranchPlus size={18}/>
                        </span>
                    )}
                </div>
        </Button>
    );
};

export default Move;