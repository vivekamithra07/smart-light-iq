import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Lightbulb, User, Car, Play, Pause } from "lucide-react";

interface StreetLight {
  id: number;
  brightness: number;
  active: boolean;
}

export const LiveDemo = () => {
  const [lights, setLights] = useState<StreetLight[]>(
    Array.from({ length: 10 }, (_, i) => ({
      id: i,
      brightness: 25,
      active: false
    }))
  );
  const [personPosition, setPersonPosition] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [detectionType, setDetectionType] = useState<'human' | 'vehicle'>('human');

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setPersonPosition((prev) => {
        const next = prev + 1;
        if (next >= lights.length) {
          setIsRunning(false);
          return 0;
        }
        return next;
      });
    }, 800);

    return () => clearInterval(interval);
  }, [isRunning, lights.length]);

  useEffect(() => {
    setLights((prevLights) =>
      prevLights.map((light, index) => {
        const distance = Math.abs(index - personPosition);
        
        if (distance === 0) {
          // Current position - full brightness
          return { ...light, brightness: 100, active: true };
        } else if (distance === 1) {
          // One light ahead - predictive lighting
          return { ...light, brightness: 75, active: true };
        } else if (distance === 2) {
          // Two lights ahead - medium
          return { ...light, brightness: 50, active: true };
        } else if (distance <= 3 && index < personPosition) {
          // Recently passed - dim slowly
          return { ...light, brightness: 25, active: false };
        } else {
          // Far away - low power
          return { ...light, brightness: 25, active: false };
        }
      })
    );
  }, [personPosition]);

  const toggleSimulation = () => {
    if (!isRunning) {
      setPersonPosition(0);
    }
    setIsRunning(!isRunning);
  };

  return (
    <section id="demo" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Live</span>{" "}
            <span className="text-foreground">Interactive Demo</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch how IntelliGlow intelligently predicts and adapts to movement in real-time
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
          {/* Controls */}
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              onClick={toggleSimulation}
              size="lg"
              className="bg-primary hover:bg-primary-glow text-primary-foreground"
            >
              {isRunning ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Start Simulation
                </>
              )}
            </Button>
            
            <div className="flex gap-2">
              <Button
                variant={detectionType === 'human' ? 'default' : 'outline'}
                onClick={() => setDetectionType('human')}
                className={detectionType === 'human' ? 'bg-primary' : ''}
              >
                <User className="w-5 h-5 mr-2" />
                Human
              </Button>
              <Button
                variant={detectionType === 'vehicle' ? 'default' : 'outline'}
                onClick={() => setDetectionType('vehicle')}
                className={detectionType === 'vehicle' ? 'bg-primary' : ''}
              >
                <Car className="w-5 h-5 mr-2" />
                Vehicle
              </Button>
            </div>
          </div>

          {/* Street visualization */}
          <div className="relative bg-muted/30 rounded-lg p-8 min-h-[300px]">
            {/* Road */}
            <div className="absolute inset-x-8 top-1/2 h-24 bg-muted rounded-lg -translate-y-1/2" />
            
            {/* Streetlights */}
            <div className="relative flex justify-between items-center h-full">
              {lights.map((light) => (
                <div key={light.id} className="flex flex-col items-center gap-4 z-10">
                  <Lightbulb
                    className={`w-8 h-8 transition-all duration-500 ${
                      light.active 
                        ? 'text-primary drop-shadow-[0_0_15px_hsl(158_80%_50%/0.8)]' 
                        : 'text-muted-foreground/40'
                    }`}
                    style={{
                      filter: light.active 
                        ? `brightness(${light.brightness}%) drop-shadow(0 0 ${light.brightness / 5}px hsl(158 80% 50%))` 
                        : 'none'
                    }}
                  />
                  <div className="text-xs text-muted-foreground font-mono">
                    {light.brightness}%
                  </div>
                </div>
              ))}
            </div>

            {/* Moving person/vehicle */}
            {isRunning && (
              <div
                className="absolute top-1/2 -translate-y-1/2 transition-all duration-700 ease-linear z-20"
                style={{
                  left: `${(personPosition / (lights.length - 1)) * 85 + 7.5}%`,
                }}
              >
                {detectionType === 'human' ? (
                  <User className="w-8 h-8 text-secondary drop-shadow-[0_0_10px_hsl(200_90%_45%/0.8)]" />
                ) : (
                  <Car className="w-10 h-10 text-secondary drop-shadow-[0_0_10px_hsl(200_90%_45%/0.8)]" />
                )}
              </div>
            )}
          </div>

          {/* Info cards */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="p-4 bg-primary/10 border-primary/30">
              <h4 className="font-semibold text-primary mb-2">Current Position</h4>
              <p className="text-sm text-muted-foreground">100% brightness at detection point</p>
            </Card>
            <Card className="p-4 bg-primary/10 border-primary/30">
              <h4 className="font-semibold text-primary mb-2">Predictive Lighting</h4>
              <p className="text-sm text-muted-foreground">75% brightness one step ahead</p>
            </Card>
            <Card className="p-4 bg-primary/10 border-primary/30">
              <h4 className="font-semibold text-primary mb-2">Energy Saving</h4>
              <p className="text-sm text-muted-foreground">25% low-power mode when inactive</p>
            </Card>
          </div>
        </Card>
      </div>
    </section>
  );
};
