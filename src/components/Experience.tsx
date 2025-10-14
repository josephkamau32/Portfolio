import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Experience() {
  const education = [
    {
      degree: "Bachelor of Science",
      institution: "University of Nairobi",
      period: "Current",
      status: "In Progress",
    },
    {
      degree: "Software Engineering (AI Specialization)",
      institution: "PLP Academy",
      period: "Completed",
      status: "Specialized in AI for Software Engineering",
    },
    {
      degree: "Secondary Education",
      institution: "Kikelelwa Secondary School",
      period: "2013",
      status: "Completed",
    },
  ];

  const workExperience = [
    {
      position: "Freelance Web Developer / Software Engineer",
      company: "Self-Employed",
      location: "Nairobi, Kenya",
      period: "March 2025 - Present",
      description:
        "Building modern web applications and AI-powered solutions for clients worldwide, specializing in React, TypeScript, and full-stack development.",
    },
    {
      position: "IT Specialist",
      company: "Jubilee Party",
      location: "Nairobi, Kenya",
      period: "September 2016 - February 2025",
      description:
        "Managed IT infrastructure, provided technical support, and implemented digital solutions to streamline organizational operations.",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <Card
                  key={index}
                  className="p-6 glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{job.position}</h4>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{job.location}</p>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/10">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="p-6 glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">{edu.degree}</h4>
                    <p className="text-primary text-sm font-medium mb-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-sm text-muted-foreground">{edu.status}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
