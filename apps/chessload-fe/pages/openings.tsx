import Analyse from "@/components/openings/analyse";
import Moves from "@/components/openings/moves";
import Sidebar from "@/components/openings/sidebar";
import Chessboard from "@/components/chessboard";
import useWindowSize from "@/app/hooks/useWindowSize";
import { useRef } from "react";
import {ScrollArea} from "@/components/ui/scroll-area";

export default function Openings() {
  const {isMobile, isTablet, isDesktop, height = 0, width = 0} = useWindowSize();
  

  //Chessboard width is min between height - 250 and movesRef width , min 350px, max 550px
  const chessboardWidth = 0;
  
  
  return (
    <main className="">
        <div className="m-4 flex flex-col h-[calc(100vh-97px)] md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-openings lg:max-h-[1000px] gap-4">
          {isDesktop && (
            <>
              <Sidebar className="w-[300px]" />
              <div className="min-w-[350px] max-w-[650px] grow flex flex-col gap-4">
                <Chessboard className="" />
                <Moves className="h-[250px]" />
              </div>
              <div className="grow flex flex-col grow min-w-[350px] gap-4">
                <Moves />
                <Analyse />
              </div>
            </>
          )}
          {(isTablet || isMobile) && (
            <>
              <Chessboard className="w-full flex grow"/>
              <ScrollArea>
                <div className="w-full flex flex-col grow gap-4">
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
