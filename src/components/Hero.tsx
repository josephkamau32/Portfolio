import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typedText = useTypingEffect([
    "Full-Stack Developer",
    "AI Integration Specialist",
    "Problem Solver",
    "Tech Enthusiast",
  ]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Software Engineer
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient animate-gradient-shift bg-[length:200%_auto]">
              Joseph Kamau
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            <span className="inline-block min-h-[1.5em]">
              {typedText}
              <span className="animate-pulse ml-1">|</span>
            </span>
          </p>
          
          <p className="text-base sm:text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            Building innovative AI-powered applications and modern web solutions that make a difference
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary hover:opacity-90 transition-opacity text-white font-semibold px-8"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="font-semibold"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                window.open("/resume.pdf", "_blank");
              }}
              className="font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/josephkamau32"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/josephkamau32"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:iamjosephkamau@gmail.com"
              className="p-3 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
