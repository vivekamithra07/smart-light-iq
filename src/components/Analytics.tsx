import { Card } from "@/components/ui/card";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { useEffect, useState } from "react";
import { Activity, Zap, TrendingDown, Clock } from "lucide-react";

export const Analytics = () => {
  const [energyData, setEnergyData] = useState([
    { time: "00:00", traditional: 100, intelliGlow: 30 },
    { time: "04:00", traditional: 100, intelliGlow: 25 },
    { time: "08:00", traditional: 100, intelliGlow: 55 },
    { time: "12:00", traditional: 100, intelliGlow: 45 },
    { time: "16:00", traditional: 100, intelliGlow: 50 },
    { time: "20:00", traditional: 100, intelliGlow: 65 },
  ]);

  const [brightnessData, setBrightnessData] = useState([
    { name: "25%", value: 45, color: "hsl(158 80% 50% / 0.3)" },
    { name: "50%", value: 25, color: "hsl(158 80% 50% / 0.5)" },
    { name: "75%", value: 20, color: "hsl(158 80% 50% / 0.7)" },
    { name: "100%", value: 10, color: "hsl(158 80% 50% / 1)" },
  ]);

  const [realTimeData, setRealTimeData] = useState([
    { time: "5s ago", activity: 45 },
    { time: "4s ago", activity: 52 },
    { time: "3s ago", activity: 48 },
    { time: "2s ago", activity: 65 },
    { time: "1s ago", activity: 72 },
    { time: "now", activity: 68 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => {
        const newData = [...prev.slice(1)];
        newData.push({
          time: "now",
          activity: Math.floor(Math.random() * 40) + 40
        });
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Real-Time </span>
            <span className="text-primary">Analytics Dashboard</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Live monitoring of energy consumption, system activity, and performance metrics
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Live</span>
            </div>
            <div className="text-3xl font-bold text-primary">68%</div>
            <div className="text-sm text-muted-foreground">Energy Saved</div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <Activity className="w-5 h-5 text-secondary" />
              <span className="text-xs text-muted-foreground">Active</span>
            </div>
            <div className="text-3xl font-bold text-secondary">24/50</div>
            <div className="text-sm text-muted-foreground">Lights On</div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <TrendingDown className="w-5 h-5 text-primary" />
              <span className="text-xs text-muted-foreground">Today</span>
            </div>
            <div className="text-3xl font-bold text-primary">142kW</div>
            <div className="text-sm text-muted-foreground">Power Reduced</div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-xs text-muted-foreground">Uptime</span>
            </div>
            <div className="text-3xl font-bold text-secondary">99.8%</div>
            <div className="text-sm text-muted-foreground">Reliability</div>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Energy Comparison */}
          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Energy Usage Comparison
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 22%)" />
                <XAxis dataKey="time" stroke="hsl(180 10% 65%)" />
                <YAxis stroke="hsl(180 10% 65%)" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(220 20% 12%)', 
                    border: '1px solid hsl(220 15% 22%)',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="traditional" 
                  stroke="hsl(0 84.2% 60.2%)" 
                  strokeWidth={2}
                  name="Traditional"
                />
                <Line 
                  type="monotone" 
                  dataKey="intelliGlow" 
                  stroke="hsl(158 80% 50%)" 
                  strokeWidth={2}
                  name="IntelliGlow"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Brightness Distribution */}
          <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              Brightness Level Distribution
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={brightnessData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {brightnessData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(220 20% 12%)', 
                    border: '1px solid hsl(220 15% 22%)',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-4">
              {brightnessData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Real-time Activity */}
        <Card className="p-6 bg-card/50 border-primary/20 backdrop-blur">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Real-Time System Activity
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={realTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 15% 22%)" />
              <XAxis dataKey="time" stroke="hsl(180 10% 65%)" />
              <YAxis stroke="hsl(180 10% 65%)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(220 20% 12%)', 
                  border: '1px solid hsl(220 15% 22%)',
                  borderRadius: '8px'
                }} 
              />
              <Bar 
                dataKey="activity" 
                fill="hsl(200 90% 45%)" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};
