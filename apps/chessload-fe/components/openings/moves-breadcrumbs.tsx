import { FC, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, Save, ChevronsLeft } from "lucide-react";
import { Textarea } from "../ui/textarea";

interface IProps {
    className?: string;
    name?: string;
}

const MovesBreadcrumbs: FC<IProps> = ({className}) => {
  const [name , setName] = useState("French Defense: Tarrash Variation");

  return (
        <div className={cn("py-6",className)}>
            <div className="pb-6">
                <Textarea 
                className="font-semibold leading-none tracking-tight text-md" 
                variant="ghost" 
                maxLength={60}  
                onChange={(e) => setName(e.target.value)} 
                value={name} 
                placeholder="Name of the line" 
                onKeyDown={(e) => {
                        if(e.key === "Enter") {
                            e.preventDefault();
                        }
                    }
                }
                autoSize/>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm">d4 Nc6 2. e4 e6 3. Nf3 Nf6 4. Bd3 d5 5. e5 Nd7 6. O-O b6 7. Bg5 f6 8. exf6 gxf6 9. Bh4 Qe7 10. Re1 Bb7 11. Nc3 O-O-O</p>
                <div className="flex gap-2">
                    <Button variant="secondary" className="h-8"><ChevronsLeft className="h-6 w-6"/></Button>
                    <Button variant="secondary" className="h-8"><ChevronLeft className="h-6 w-6"/></Button>
                    <Button variant="secondary" className="h-8"><ChevronRight className="h-6 w-6"/></Button>
                    <Button variant="secondary" className="h-8"><Save className="h-5 w-5"/></Button>
                </div>
            </div>
        </div>
    );
};

export default MovesBreadcrumbs;