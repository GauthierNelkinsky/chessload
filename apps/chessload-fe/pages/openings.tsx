import Analyse from "@/components/openings/analyse";
import Moves from "@/components/openings/moves";
import Sidebar from "@/components/openings/sidebar";
import Chessboard from "@/components/chessboard";
import useWindowSize from "@/app/hooks/useWindowSize";
import { useRef } from "react";

export default function Openings() {
  const {isMobile, isTablet, isDesktop, height = 0, width = 0} = useWindowSize();
  

  //Chessboard width is min between height - 250 and movesRef width , min 350px, max 550px
  const chessboardWidth = 0;
  
  
  return (
    <main className="mt-4">
        <div className="flex flex-col md:flex-row lg:grid lg:grid-cols-openings gap-4">
          {isDesktop && (
            <>
              <Sidebar className="w-[300px]" />
              <div className="min-w-[350px] grow flex flex-col gap-4">
                <Chessboard width={chessboardWidth} className="" />
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
              <Chessboard />
              <div className="flex flex-col">
                <Sidebar />
                <Moves />
                <Analyse />
              </div>
            </>
          )}
        </div>
    </main>
  );
}
