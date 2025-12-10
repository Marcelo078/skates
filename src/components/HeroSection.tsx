import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Guia Completo 2024 • Atualizado Dezembro
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text">Melhores Hoverboards</span>
            <br />
            <span className="text-foreground">& Skates Elétricos</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Descubra as <strong className="text-primary">melhores marcas</strong>, 
            <strong className="text-secondary"> melhores preços</strong> e 
            <strong className="text-accent"> melhores ofertas</strong> em hoverboards e skates elétricos do Brasil.
            Análises detalhadas por especialistas.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="neon" size="xl" asChild>
              <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer" className="gap-2">
                Ver Melhores Ofertas
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#produtos">
                Explorar Produtos
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <Shield className="w-8 h-8 text-accent" />
              <div className="text-left">
                <p className="font-semibold text-foreground">100% Seguro</p>
                <p className="text-xs text-muted-foreground">Compra Protegida</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <Zap className="w-8 h-8 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Entrega Rápida</p>
                <p className="text-xs text-muted-foreground">Em Todo Brasil</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border">
              <Sparkles className="w-8 h-8 text-secondary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Garantia</p>
                <p className="text-xs text-muted-foreground">Produtos Originais</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
