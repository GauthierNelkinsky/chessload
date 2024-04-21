import { FC } from "react";
import { cn } from "@/lib/utils";


interface IProps {
    className?: string;
}

const Navigator: FC<IProps> = ({className}) => {

    const movesArray = [
        [
            {
                state : "selected",
                move : "e4",
                name : "King's Pawn Opening",
                line : ["e5", "Nf3", "Nc6"]
            },
            {
                state : "unselected",
                move : "d4",
                name : "Queen's Pawn Opening",
                line : ["d5", "Nf3", "Nf6"]
            }
        ],
        [
            {
                state : "selected",
                move : "Bc4",
                name : "Italian Game",
                line : ["Bc5"]
            },
            {
                state : "unselected",
                move : "Bb5",
                name : "Spanish Game",
                line : ["a6"]
            }
        ],
        [
            {
                state : "unselected",
                move : "Nf6",
                name : "Four Knights Game",
                line : ["Nc6"]
            },
            {
                state : "unselected",
                move : "Nc6",
                name : "Ruy Lopez",
                line : ["Bb5"]
            }
        ]
    ]
  
  return (
        <div className="w-full h-full">
            Hello
        </div>
    );
};

export default Navigator;