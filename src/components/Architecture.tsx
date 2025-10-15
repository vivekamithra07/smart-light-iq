import { Card } from "@/components/ui/card";
import { Cpu, Database, Network, Waves } from "lucide-react";

export const Architecture = () => {
  const hardware = [
    "Raspberry Pi / Arduino with Wi-Fi",
    "PIR + Ultrasonic sensors",
    "LDR (light sensor)",
    "DHT11 / Rain / Fog sensor",
    "LED with PWM dimming",
    "Camera module for AI"
  ];

  const software = [
    "Python (control + ML)",
    "OpenCV for motion detection",
    "TensorFlow Lite for classification",
    "Flask / Dash for analytics",
    "MQTT / HTTP for IoT",
    "Edge AI optimization"
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">System </span>
            <span className="text-primary">Architecture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on open-source technology with powerful edge computing capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Hardware */}
          <Card className="p-8 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Hardware Components</h3>
            </div>
            <ul className="space-y-3">
              {hardware.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Software */}
          <Card className="p-8 bg-card/50 border-secondary/20 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Database className="w-8 h-8 text-secondary" />
              <h3 className="text-2xl font-bold text-foreground">Software Stack</h3>
            </div>
            <ul className="space-y-3">
              {software.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Workflow */}
        <Card className="p-8 bg-gradient-card border-primary/20">
          <div className="flex items-center gap-3 mb-8">
            <Waves className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">How It Works</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Continuous Monitoring",
                description: "Sensors and camera monitor surroundings 24/7"
              },
              {
                step: "2",
                title: "AI Processing",
                description: "Python + OpenCV detect and classify objects"
              },
              {
                step: "3",
                title: "Smart Response",
                description: "Lights adjust based on distance and speed"
              },
              {
                step: "4",
                title: "Data Logging",
                description: "All metrics displayed on analytics dashboard"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">{item.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
