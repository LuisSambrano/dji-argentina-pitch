import { GlobalNav } from "@/components/nav/global-nav";
import { SubNav } from "@/components/nav/sub-nav";
import { Hero } from "@/components/tiles/hero";
import { Concept } from "@/components/tiles/concept";
import { Ecosystem } from "@/components/tiles/ecosystem";
import { Route } from "@/components/tiles/route";
import { Method } from "@/components/tiles/method";
import { Community } from "@/components/tiles/community";
import { Advantage } from "@/components/tiles/advantage";
import { CtaTile } from "@/components/tiles/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <GlobalNav />
      <SubNav />
      <main>
        <Hero />
        <Concept />
        <Ecosystem />
        <Route />
        <Method />
        <Community />
        <Advantage />
        <CtaTile />
      </main>
      <Footer />
    </>
  );
}
