import Hero from "@/components/Hero";
import TokenInfo from "@/components/TokenInfo";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yeti-blue via-yeti-dark to-black">
      <Hero />
      <TokenInfo />
      <Roadmap />
      <Community />
      <Footer />
    </main>
  );
}
