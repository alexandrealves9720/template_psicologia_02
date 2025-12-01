import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const SecondaryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Mensagem enviada!",
      description: "Entrarei em contato em breve. Obrigada!",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contato" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Vamos conversar?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Preencha o formulário abaixo ou entre em contato pelo WhatsApp
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 lg:p-12 shadow-strong space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-foreground">
                Nome completo
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="h-12 rounded-2xl border-border/50 focus:border-primary bg-background/50"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-foreground">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12 rounded-2xl border-border/50 focus:border-primary bg-background/50"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground">
                Telefone / WhatsApp
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12 rounded-2xl border-border/50 focus:border-primary bg-background/50"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Mensagem
              </label>
              <Textarea
                id="message"
                placeholder="Conte um pouco sobre o que te trouxe até aqui..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 rounded-2xl border-border/50 focus:border-primary bg-background/50 resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full py-6 shadow-medium hover:shadow-strong hover:scale-[1.02] transition-all duration-300 group"
            >
              Enviar mensagem
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>

            {/* Privacy Note */}
            <p className="text-xs text-muted-foreground text-center pt-4">
              Suas informações estão seguras e serão tratadas com total confidencialidade
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SecondaryForm;
