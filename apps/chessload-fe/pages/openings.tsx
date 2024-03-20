import AnalysePanel from "@/components/analyse-panel";
import MovesPanel from "@/components/moves-panel";

export default function Openings() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnalysePanel />
      <MovesPanel />
    </main>
  );
}
