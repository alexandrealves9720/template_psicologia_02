import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  data: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

const CTASection = ({ data }: CTASectionProps) => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-rose opacity-40" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-rose-delicate rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-champagne-soft rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* CTA Card */}
          <div className="glass rounded-[2.5rem] p-12 lg:p-16 shadow-strong text-center animate-scale-in">
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-rose flex items-center justify-center mx-auto mb-8 animate-pulse">
              <Sparkles className="text-primary-foreground" size={28} />
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
              {data.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              {data.subtitle}
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-7 rounded-full shadow-medium hover:shadow-strong hover:scale-105 transition-all duration-300 group"
            >
              {data.buttonText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>

            {/* Trust Elements */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10 pt-10 border-t border-border/50 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Sigilo garantido</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Primeira sessão sem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Atendimento presencial e online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
