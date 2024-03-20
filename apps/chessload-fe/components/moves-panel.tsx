import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import MoveLine from "@/components/move-line";
import {ScrollArea} from "@/components/ui/scroll-area";


interface IProps {

}

const MovesPanel: FC<IProps> = ({}) => {
  
  return (
        <Card>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between w-[500px]">
                        Recommanded moves
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-32">
                    <MoveLine />
                    <MoveLine />
                    <MoveLine />
                    <MoveLine />
                    <MoveLine />
                    <MoveLine />
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default MovesPanel;