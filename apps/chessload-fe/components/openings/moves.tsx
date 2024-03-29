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
        <Card className={cn("h-full", className)}>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between ">
                        Recommanded moves
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-32">
                    <Move />
                    <Move />
                    <Move />
                    <Move />
                    <Move />
                    <Move />
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default Moves;