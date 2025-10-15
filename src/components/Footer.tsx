import { Lightbulb } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-card border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-foreground">IntelliGlow</h3>
              <p className="text-sm text-muted-foreground italic">Light that thinks before it shines.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground mb-2">
              AI-Powered Smart Streetlight System
            </p>
            <p className="text-xs text-muted-foreground">
              © 2025 IntelliGlow. Built with React, TypeScript & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
