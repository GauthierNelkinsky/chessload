import { FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

interface IProps {
    children?: React.ReactNode;
}

const NewRepertoireDialog: FC<IProps> = ({children}) => {
  
  return (
    <Dialog>
        <DialogTrigger>
            {children}
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                HELLO
            </div>
        </DialogContent>
    </Dialog>
    );
};

export default NewRepertoireDialog;