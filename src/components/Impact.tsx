import { Card } from "@/components/ui/card";
import { Leaf, Shield, TrendingUp, Globe } from "lucide-react";

export const Impact = () => {
  const impacts = [
    {
      icon: Leaf,
      title: "Energy Saving",
      value: "60-70%",
      description: "Reduction in electricity consumption compared to traditional systems",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Safety Enhancement",
      value: "100%",
      description: "Better visibility for pedestrians and vehicles with intelligent lighting",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Cost Reduction",
      value: "₹50k+",
      description: "Annual savings per kilometer of smart streetlights installed",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Carbon Footprint",
      value: "-40%",
      description: "Decrease in CO₂ emissions through optimized energy usage",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Real-World </span>
            <span className="text-primary">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming urban infrastructure with measurable benefits for communities and the environment
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/50 border-primary/20 backdrop-blur hover:shadow-glow-primary transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                  <impact.icon className={`w-8 h-8 ${impact.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {impact.title}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${impact.color}`}>
                    {impact.value}
                  </div>
                  <p className="text-muted-foreground">
                    {impact.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional benefits */}
        <Card className="p-8 bg-primary/5 border-primary/30 backdrop-blur">
          <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
            Key Advantages
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-muted-foreground">Scalable for urban & rural areas</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-muted-foreground">Easy integration with smart cities</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-muted-foreground">Open-source technology stack</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">✓</div>
              <p className="text-sm text-muted-foreground">Affordable implementation</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
