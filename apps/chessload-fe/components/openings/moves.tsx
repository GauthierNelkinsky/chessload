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
            <CardContent className="relative grow h-[100px]">
                <ScrollArea className="absolute bottom-0 top-0 left-0 right-0 h-full" asTable={false}>
                    <div className="gap-1 flex flex-col h-full">
                        <Move variant="selected" name="Qe3 - Benko Gambit"/>
                        <Move variant="selected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                        <Move variant="unselected" name="Kh2 - French Defense Advance bla bla"/>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default Moves;