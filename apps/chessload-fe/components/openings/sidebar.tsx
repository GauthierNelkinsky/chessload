import { FC } from "react";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
}

const Sidebar: FC<IProps> = ({className}) => {
  
  return (
    <div className={cn("border-r space-y-1.5 p-6", className)}>
        <h2 className="font-semibold leading-none tracking-tight">Repertoires</h2>
    </div>
    );
};

export default Sidebar;