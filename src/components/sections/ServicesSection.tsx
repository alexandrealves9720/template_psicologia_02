import { Check } from "lucide-react";

interface Service {
  title: string;
  description: string;
  topics: string[];
}

interface ServicesSectionProps {
  data: Service[];
}

const ServicesSection = ({ data }: ServicesSectionProps) => {
  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent relative">
      {/* Decorative Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-champagne-soft rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Como posso te ajudar
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Abordagens personalizadas para suas necessidades únicas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {data.map((service, index) => (
            <div
              key={index}
              className="group hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="glass rounded-3xl p-8 lg:p-10 h-full shadow-soft hover:shadow-strong transition-all duration-300">
                {/* Title */}
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Topics */}
                <div className="space-y-3">
                  {service.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="text-primary" size={12} />
                      </div>
                      <span className="text-sm text-foreground/80">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
