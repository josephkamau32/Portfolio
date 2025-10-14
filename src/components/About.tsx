import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-original.png";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly adapting to new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively to achieve common goals",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions that solve real-world problems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
            <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up">
              <p className="text-lg leading-relaxed">
                I'm a full-stack software engineer with a passion for building modern,
                user-centric applications. My expertise spans across web development,
                AI integration, and creating scalable solutions.
              </p>
              <p className="text-lg leading-relaxed">
                I believe in the power of technology to transform businesses and improve
                lives. Whether it's developing AI-powered health platforms or crafting
                beautiful e-commerce experiences, I bring dedication and creativity to
                every project.
              </p>
              <p className="text-lg leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to
                open-source projects, and sharing knowledge with the developer community.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <Card
                    key={index}
                    className="p-6 glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <item.icon className="w-8 h-8 mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 animate-fade-in-up flex justify-center lg:justify-end" style={{ animationDelay: "0.1s" }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                    <img 
                      src={profileImage} 
                      alt="Joseph Kamau - Full-Stack Software Engineer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
