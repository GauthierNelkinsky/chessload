import { FC, useEffect, useState } from "react";
import { Book, X, GitBranchPlus, BookMarked} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { TooltipPortal } from "@radix-ui/react-tooltip";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { cva, type VariantProps } from "class-variance-authority"


const moveVariants = cva(
    "flex justify-between items-center group/move w-full gap-2 inline-flex whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2",
    {
      variants: {
        variant: {
          unselected: "hover:bg-accent hover:text-accent-foreground",
          selected: "bg-accent text-accent-foreground hover:brightness-125",
        },
      },
      defaultVariants: {
        variant: "unselected",
      },
    }
  )

interface IProps extends VariantProps<typeof moveVariants> {
    className?: string;
    name?: string;
}

const Move: FC<IProps> = ({className, name, variant}) => {
  
  return (
    //Change button variant depending on the type
        <div
        className={cn(moveVariants({ variant, className }))}>
            <div className="flex items-center overflow-hidden gap-2">
                <div className="flex items-center justify-center">
                    <Book size={14}/>
                </div>
                <div className="truncate ... w-auto">
                    {name}
                </div>
            </div>
            <div className="flex relative items-center justify-center">
                <p className="group-hover/move:invisible group-hover/move:pointer-events-none">79%</p>
                <TooltipProvider>                        
                    {variant === "selected" ? (
                        <AlertDialog>
                                <Tooltip>
                                    <TooltipTrigger className="text-destructive invisible pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex align-center items-center group-hover/move:visible group-hover/move:pointer-events-auto hover:brightness-125">
                                        <AlertDialogTrigger asChild>
                                            <X size={18}/>
                                        </AlertDialogTrigger>
                                    </TooltipTrigger>
                                    <TooltipPortal>
                                        <TooltipContent hideWhenDetached>
                                            <p>Delete</p>
                                        </TooltipContent>
                                    </TooltipPortal>  
                                </Tooltip>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Delete this move ?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete all the branch that continue.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                        </AlertDialog>       
                    ):(
                        <Tooltip>
                        <TooltipTrigger className="flex align-center items-center invisible pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex align-center items-center group-hover/move:visible group-hover/move:pointer-events-auto">
                            <GitBranchPlus size={18}/>
                        </TooltipTrigger>
                        <TooltipPortal>
                            <TooltipContent hideWhenDetached>
                                <p>Add to repertoire</p>
                            </TooltipContent>  
                        </TooltipPortal>
                    </Tooltip>   
                    )}
                </TooltipProvider>
            </div>
        </div>
    );
};

export default Move;