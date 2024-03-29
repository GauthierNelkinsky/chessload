import { FC } from "react";
import Logo from "./layout/logo"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
interface IProps {

}
const MobileHeader: FC<IProps> = ({}) => {
  
  return (
      <div className="flex md:hidden w-full justify-between">
        <Sheet>
          <SheetTrigger><Menu /></SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Logo />

      </div>
    );
};

export default MobileHeader;