import { MessageCircle } from "lucide-react";
import { useState } from "react";

const FloatingWhatsApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "5511999999999";
  const message = "Olá! Gostaria de agendar uma sessão.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 whitespace-nowrap animate-fade-in">
            <div className="bg-foreground text-background px-4 py-2 rounded-2xl text-sm font-medium shadow-strong">
              Fale comigo no WhatsApp
              <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-foreground" />
            </div>
          </div>
        )}

        {/* Button */}
        <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-strong hover:scale-110 transition-transform duration-300 cursor-pointer">
          <MessageCircle size={32} className="text-white" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
