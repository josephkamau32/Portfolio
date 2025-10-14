import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechVision Inc",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "Joseph's expertise in full-stack development transformed our platform. His AI integration work was exceptional, delivering beyond our expectations.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, InnovateLabs",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      content: "Working with Joseph was a game-changer. His attention to detail and innovative approach to problem-solving made our project a huge success.",
    },
    {
      name: "Emily Watson",
      role: "Founder, HealthTech Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content: "Joseph built our AI-powered health platform from scratch. The result exceeded all expectations - scalable, efficient, and user-friendly.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              What People <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by professionals and teams worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 glass-effect hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
