import { GlobalNav } from "@/components/nav/global-nav";
import { SubNav } from "@/components/nav/sub-nav";
import { Hero } from "@/components/tiles/hero";
import { Concept } from "@/components/tiles/concept";
import { Audience } from "@/components/tiles/audience";
import { Ecosystem } from "@/components/tiles/ecosystem";
import { Route } from "@/components/tiles/route";
import { Formats } from "@/components/tiles/formats";
import { Method } from "@/components/tiles/method";
import { Community } from "@/components/tiles/community";
import { Collaboration } from "@/components/tiles/collaboration";
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
        <Audience />
        <Ecosystem />
        <Route />
        <Formats />
        <Method />
        <Community />
        <Collaboration />
        <CtaTile />
      </main>
      <Footer />
    </>
  );
}
