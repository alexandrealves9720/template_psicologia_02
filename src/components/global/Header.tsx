import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-semibold text-foreground">
              Dra. Ana Carolina
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("beneficios")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Benefícios
            </button>
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Depoimentos
            </button>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft"
            >
              Agendar
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 animate-slide-up">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("beneficios")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Benefícios
              </button>
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-left text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                Depoimentos
              </button>
              <Button
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft w-full"
              >
                Agendar
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
