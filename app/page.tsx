import { GlobalNav } from "@/components/nav/global-nav";
import { Hero } from "@/components/tiles/hero";
import { Proposal } from "@/components/tiles/proposal";
import { WhyCreator } from "@/components/tiles/why-creator";
import { Ecosystem } from "@/components/tiles/ecosystem";
import { Workflow } from "@/components/tiles/workflow";
import { Route } from "@/components/tiles/route";
import { Formats } from "@/components/tiles/formats";
import { Community } from "@/components/tiles/community";
import { Collaboration } from "@/components/tiles/collaboration";
import { CtaTile } from "@/components/tiles/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <GlobalNav />
      <main>
        <Hero />
        <Proposal />
        <WhyCreator />
        <Ecosystem />
        <Workflow />
        <Route />
        <Formats />
        <Community />
        <Collaboration />
        <CtaTile />
      </main>
      <Footer />
    </>
  );
}
