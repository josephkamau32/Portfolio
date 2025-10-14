import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Code, Users, Award, Zap } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Code,
      value: 50,
      suffix: "+",
      label: "Projects Completed",
      color: "text-blue-500",
    },
    {
      icon: Users,
      value: 30,
      suffix: "+",
      label: "Happy Clients",
      color: "text-green-500",
    },
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-purple-500",
    },
    {
      icon: Zap,
      value: 100,
      suffix: "%",
      label: "Client Satisfaction",
      color: "text-orange-500",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="stats-section" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Impact in <span className="text-gradient">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering excellence through measurable results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-8 glass-effect hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                  {counters[index]}
                  {stat.suffix}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
