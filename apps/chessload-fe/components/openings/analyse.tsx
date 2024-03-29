import { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import { cn } from "@/lib/utils";

interface IProps {
    className?: string;
}

const Analyse: FC<IProps> = ({className}) => {

    const [annotationColor, setAnnotationColor] = useState<string>("hidden")

    const updateColor = (value: string) => {
        switch (value) {
            case "excellent":
                setAnnotationColor("bg-green-500")
                break;
            case "good":
                setAnnotationColor("bg-blue-500")
                break;
            case "bad":
                setAnnotationColor("bg-red-500")
                break;
            case "mistake":
                setAnnotationColor("bg-yellow-500")
                break;
            case "important":
                setAnnotationColor("bg-purple-500")
                break;
            default:
                setAnnotationColor("hidden") 
        }
    }
  
  return (
        <Card className={cn("h-full", className)}>
            <CardHeader>
                <CardTitle>
                    <div className="flex items-center justify-between">
                        Analyse
                        <div className="flex items-center gap-4">
                            <Select>
                                <SelectTrigger className="">
                                    <SelectValue placeholder="Mainline" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="mainline">Mainline</SelectItem>
                                    <SelectItem value="subline">Subline</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select onValueChange={updateColor}>
                                <SelectTrigger className="flex gap-2">
                                    <div className={cn("w-2 h-2 rounded-full", annotationColor)}></div>
                                    <SelectValue placeholder="Annotation"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="none">None</SelectItem>
                                    <SelectItem value="excellent">Excellent</SelectItem>
                                    <SelectItem value="good">Good</SelectItem>
                                    <SelectItem value="bad">Bad</SelectItem>
                                    <SelectItem value="mistake">Mistake</SelectItem>
                                    <SelectItem value="important">Important</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Label>Comment</Label>
                <Textarea placeholder="Enter your comment here" />
            </CardContent>
        </Card>
    );
};

export default Analyse;