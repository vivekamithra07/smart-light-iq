import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { LiveDemo } from "@/components/LiveDemo";
import { Analytics } from "@/components/Analytics";
import { Features } from "@/components/Features";
import { Impact } from "@/components/Impact";
import { Architecture } from "@/components/Architecture";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <LiveDemo />
      <Analytics />
      <Features />
      <Impact />
      <Architecture />
      <Footer />
    </div>
  );
};

export default Index;
