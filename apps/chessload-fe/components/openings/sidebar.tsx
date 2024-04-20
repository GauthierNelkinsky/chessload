import { FC } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import RepertoireSelector from "./repertoire-selector";
import MovesBreadcrumbs from "./moves-breadcrumbs";

interface IProps {
    className?: string;
}

const Sidebar: FC<IProps> = ({className}) => {
  
  return (
    <div className={cn("lg:border-r space-y-1.5 p-6", className)}>
        <RepertoireSelector />
        <Separator />
        <MovesBreadcrumbs name="French Defense: Tarrash Variation" />
    </div>
    );
};

export default Sidebar;