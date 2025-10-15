import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle2, X } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Brightens for any motion (animals, wind, etc.)",
    "Can't predict movement ahead of time",
    "No adaptation to weather or traffic intensity",
    "Depends on cloud servers"
  ];

  const solutions = [
    "AI detects humans/vehicles only using computer vision",
    "Predictive lighting illuminates path ahead",
    "Adapts to fog, rain, light levels dynamically",
    "Local edge AI—fully offline capable"
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">The Problem with </span>
            <span className="text-destructive">Traditional Systems</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Current smart streetlights are reactive and wasteful, lacking true intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <Card className="p-8 bg-card/50 border-destructive/20 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <h3 className="text-2xl font-bold text-foreground">Existing Systems</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{problem}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Solutions */}
          <Card className="p-8 bg-card/50 border-primary/20 backdrop-blur shadow-glow-primary">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">IntelliGlow Innovation</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-foreground">{solution}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
