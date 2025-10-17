import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Vue.js",
        "Sass",
        "Redux",
        "Webpack",
        "Vite",
        "Chakra UI",
        "Framer Motion",
        "Accessibility",
        "Cross-Browser Compatibility",
        "UI/UX Principles",
        "Performance Optimization",
        "Testing (Jest, React Testing Library)",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Python",
        "FastAPI",
        "REST APIs",
        "PostgreSQL",
        "Express.js",
        "Django",
        "Flask",
        "SQLite",
        "Redis",
        "GraphQL",
        "Apollo Server",
        "AWS",
        "Firebase",
        "Azure",
        "Heroku",
        "MongoDB",
        "MySQL",
        "Supabase",
        "Authentication",
      ],
    },
    {
      title: "AI & Data",
      skills: [
        "Machine Learning",
        "TensorFlow",
        "Streamlit",
        "Data Analysis",
        "AI Integration",
        "OpenAI API",
        "PyTorch",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "Keras",
        "Data Visualization",
        "SQL for Data Analysis",
        "Data Preprocessing",
        "Model Evaluation",
        "Deep Learning",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Vercel",
        "VS Code",
        "Figma",
        "CI/CD",
        "Agile",
        "Netlify",
        "Jest",
        "Cypress",
        "Postman",
        "Linux",
        "Command Line",
        "RESTful Services",
        "GraphQL",
        "WebSockets",
        "OAuth",
        "JWT",
        "Web Performance Optimization",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 glass-effect hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gradient">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
