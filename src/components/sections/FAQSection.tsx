import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  data: FAQ[];
}

const FAQSection = ({ data }: FAQSectionProps) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-transparent via-accent/20 to-transparent">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tire suas dúvidas sobre o processo terapêutico
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <Accordion type="single" collapsible className="space-y-4">
            {data.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-2xl border border-border/50 px-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-heading font-semibold hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Prompt */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Entre em contato
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
