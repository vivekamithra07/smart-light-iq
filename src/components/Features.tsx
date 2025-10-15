import { Card } from "@/components/ui/card";
import { Brain, CloudOff, Eye, Gauge, Shield, TrendingUp, Wifi, Zap } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Computer vision distinguishes humans from vehicles, animals, and wind using OpenCV + TensorFlow Lite",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "Predictive Lighting",
      description: "Illuminates the path ahead before arrival, creating seamless lighting experience",
      color: "text-secondary"
    },
    {
      icon: Gauge,
      title: "4 Adaptive Levels",
      description: "Dynamic brightness (25%, 50%, 75%, 100%) based on distance, speed, and traffic intensity",
      color: "text-primary"
    },
    {
      icon: CloudOff,
      title: "Edge AI Computing",
      description: "Raspberry Pi processes everything locally—no cloud dependency, 100% offline capable",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "Environmental Sensing",
      description: "Adapts to fog, rain, light levels, and air quality for optimal visibility",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Python-powered insights on energy savings, usage patterns, and maintenance needs",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Safety Mode",
      description: "Emergency brightness boost and SOS flash patterns for critical situations",
      color: "text-primary"
    },
    {
      icon: Wifi,
      title: "Smart Maintenance",
      description: "Automatic failure detection with real-time alerts via MQTT protocol",
      color: "text-secondary"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Intelligent </span>
            <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced capabilities that set IntelliGlow apart from traditional streetlight systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 border-primary/20 backdrop-blur hover:shadow-glow-primary transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
