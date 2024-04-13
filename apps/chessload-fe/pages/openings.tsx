import Analyse from "@/components/openings/analyse";
import Moves from "@/components/openings/moves";
import Sidebar from "@/components/openings/sidebar";
import Chessboard from "@/components/chessboard";
import useWindowSize from "@/app/hooks/useWindowSize";
import {ScrollArea} from "@/components/ui/scroll-area";
import { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";


export default function Openings() {
  const {isMobile, isTablet, isDesktop, height, width = 0} = useWindowSize();
  // const [headerHeight, setHeaderHeight] = useState(0);
  // const main = useRef<HTMLDivElement>(null);

  useEffect(() =>
  {   
    // Set the height of <body> , <html> , id __next to 100% to make the layout work
    document?.body?.classList?.add(cn("h-full"));
    document?.documentElement?.classList?.add(cn("h-full"));
    document?.getElementById("__next")?.classList?.add(cn("h-full"), cn("flex"), cn("flex-col"));
  }, []);
  
  return (
    <main className="p-6 h-full">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-openings gap-6 h-full">
          {isDesktop && (
            <>
              <Sidebar className="w-[300px]" />
              <div className="min-w-[350px] max-w-[1000px] grow flex flex-col gap-6">
                <Chessboard className="" />
                <Moves className="" />
              </div>
              <div className="grow flex flex-col grow min-w-[350px] gap-6">
                <Analyse />
                <Analyse />
              </div>
            </>
          )}
          {(isTablet || isMobile) && (
            <>
              <Chessboard className="w-full flex grow"/>
              <ScrollArea>
                <div className="w-full flex flex-col grow gap-6">
                  <Sidebar />
                  <Moves />
                  <Moves />
                  <Analyse />
                </div>
              </ScrollArea>
            </>
          )}
        </div>
    </main>
  );
}
