import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Telivus",
      description:
        "AI-powered health companion providing smart healthcare insights, symptom analysis, and personalized health recommendations with a 24/7 conversational AI assistant.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      tags: ["React", "AI", "Healthcare", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://telivus.co.ke/",
      githubUrl: "https://github.com/josephkamau32/telivus",
    },
    {
      title: "Vital Land AI",
      description:
        "AI-powered land health monitoring platform using satellite data for real-time vegetation tracking, land degradation detection, and sustainable development insights supporting SDG 15.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop",
      tags: ["AI", "Satellite Data", "Machine Learning", "React", "Environmental"],
      liveUrl: "https://vital-land-ai.vercel.app/",
      githubUrl: "https://github.com/josephkamau32/Vital-Land-AI",
    },
    {
      title: "Artisanal Coffee",
      description:
        "E-commerce platform for premium artisanal coffee featuring handcrafted blends from sustainable farms worldwide, with a beautiful shopping experience and product catalog.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
      tags: ["E-commerce", "React", "Web Development", "Responsive Design"],
      liveUrl: "https://artisanalcoffee.vercel.app/",
      githubUrl:
        "https://github.com/josephkamau32/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl",
    },
    {
      title: "AI-Powered AquaPredict",
      description:
        "Advanced machine learning application for water quality prediction and aquatic ecosystem analysis using Streamlit, providing real-time insights and environmental monitoring.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
      tags: ["Python", "Machine Learning", "Streamlit", "Data Science", "AI"],
      liveUrl: "https://josephkamau32-ai-powered-aquapredict-streamlit-app-ibfkiy.streamlit.app/",
      githubUrl: "https://github.com/josephkamau32/AI-Powered-AquaPredict",
    },
    {
      title: "Smart To-Do List",
      description:
        "Modern task management application with intuitive UI, real-time updates, and smart features for organizing daily tasks efficiently with a clean, responsive interface.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      tags: ["React", "TypeScript", "Task Management", "Web App"],
      liveUrl: "https://to-do-list-phi-seven-14.vercel.app/",
      githubUrl: "https://github.com/josephkamau32/To-Do-List",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions built with modern technologies
            </p>
          </div>

          <div className="text-center mb-8">
            <p className="text-muted-foreground italic">
              More exciting projects coming soon! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary hover:opacity-90 transition-opacity text-white"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
