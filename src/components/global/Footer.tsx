import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useUniversalData } from "@/lib/useUniversalStore";

const Footer = () => {
  const { data } = useUniversalData();

  const phone = data?.site?.contact?.phone || data?.site?.phone;
  const whatsapp = data?.site?.contact?.whatsapp || data?.site?.whatsapp;
  const email = data?.site?.contact?.email || data?.site?.email;
  const address = data?.site?.contact?.address || data?.site?.address;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/30 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-semibold text-foreground">
              Dra. Ana Carolina Silva
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Psicologia Feminina com acolhimento, empatia e transformação genuína.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="#beneficios" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#servicos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#depoimentos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Depoimentos
              </a>
            </nav>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-heading font-semibold text-foreground">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={phone ? `tel:${phone}` : "#"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary" />
                {phone}
              </a>
              <a
                href={email ? `mailto:${email}` : "#"}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary" />
                {email}
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>{address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Dra. Ana Carolina Silva - Todos os direitos reservados
            <Heart size={14} className="text-primary fill-primary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
