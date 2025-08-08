import ProgramasSection from "./components/ProgramasSection";
import HeroBanner from "./components/HeroBanner";
import ChamadaParaAventura from "./components/ChamadaParaAventure";
import PassosParaComecar from "./components/PassosParaComecar";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ProgramasSection />
      <ChamadaParaAventura />
      <PassosParaComecar />
    </>
  );
}
