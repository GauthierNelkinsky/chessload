import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Move from "@/components/openings/move";
import {ScrollArea} from "@/components/ui/scroll-area";


interface IProps {
    className?: string;
}

const Moves: FC<IProps> = ({className}) => {
  
  return (
        <Card className={cn("flex flex-col grow h-full", className)}>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        Recommanded moves
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="grow relative m-4 h-[100px]">
                <div className="absolute top-0 bottom-0 left-0 right-0 overflow-scroll pb-[35px] gap-1 flex flex-col">
                        <Move type="selected"/>
                        <Move type="selected"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="recommended"/>
                        <Move type="unrecommended"/>
                        <Move type="unrecommended"/>
                        <Move type="unrecommended"/>
                        <Move type="unrecommended"/>
                        <Move type="unrecommended"/>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-b from-transparent to-card pointer-events-none"></div>
            </CardContent>
        </Card>
    );
};

export default Moves;