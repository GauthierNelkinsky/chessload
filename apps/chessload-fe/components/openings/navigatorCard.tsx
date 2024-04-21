import { FC } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import Navigator from "./navigator";


interface IProps {
    className?: string;
}

const NavigatorCard: FC<IProps> = ({className}) => {
  
  return (
        <Card className={cn("flex flex-col grow h-full", className)}>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        Navigation
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="relative grow h-[100px]">
                <Navigator />
            </CardContent>
        </Card>
    );
};

export default NavigatorCard;