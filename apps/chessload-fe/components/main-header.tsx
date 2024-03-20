import { FC } from "react";
import Logo from "./layout/logo"
import { cn } from "../lib/utils";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ThemeToogle from "./layout/theme-toggle";
import { Moon , DoorOpen, User} from "lucide-react"

interface IProps {
}

const MainHeader: FC<IProps> = ({}) => {
  
  return (
      <div className="hidden md:flex w-full justify-between">
        <Logo />
          <div 
            className="flex gap-4 flex-row align-center text-sm font-medium transition-colors hover:text-primary"
          >
            <nav
              className="flex items-center space-x-4 lg:space-x-6"
            >
              <Link
                href="/openings"
                className=""
              >
                Openings
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2">
                  Hi, Nelkinsky
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>GN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><ThemeToogle /></DropdownMenuItem>
                  <DropdownMenuItem className="flex gap-1"><User size={16} />Profile</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="flex gap-1"><DoorOpen size={16}/>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
      </div>
    );
};

export default MainHeader;
