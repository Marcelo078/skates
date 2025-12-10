import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import CategoryButtons from "@/components/CategoryButtons";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Award } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Melhores Hoverboards e Skates Elétricos 2024"
        description="Descubra os melhores hoverboards e skates elétricos do Brasil. Comparativos, análises detalhadas e as melhores ofertas. Guia completo por especialistas."
        canonical="https://melhoreshoverboards.com.br"
      />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Melhores Hoverboards Skates Elétrico",
          "url": "https://melhoreshoverboards.com.br",
          "description": "Guia completo dos melhores hoverboards e skates elétricos do Brasil",
          "publisher": {
            "@type": "Organization",
            "name": "Melhores Hoverboards",
            "logo": {
              "@type": "ImageObject",
              "url": "https://melhoreshoverboards.com.br/logo.png"
            }
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://melhoreshoverboards.com.br/busca?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }} />

      <HeroSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <p className="font-display text-3xl font-bold gradient-text">+50</p>
              <p className="text-muted-foreground text-sm">Produtos Analisados</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-secondary" />
              </div>
              <p className="font-display text-3xl font-bold gradient-galaxy">+10k</p>
              <p className="text-muted-foreground text-sm">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <p className="font-display text-3xl font-bold text-accent">100%</p>
              <p className="text-muted-foreground text-sm">Produtos Originais</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-neon-orange/10 flex items-center justify-center">
                <Star className="w-8 h-8 text-neon-orange" />
              </div>
              <p className="font-display text-3xl font-bold text-neon-orange">4.9★</p>
              <p className="text-muted-foreground text-sm">Avaliação Média</p>
            </div>
          </div>
        </div>
      </section>

      <ProductCarousel />

      {/* Article Preview Section */}
      <section id="artigos" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Blog & Artigos
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Guias Completos sobre <span className="gradient-text">Hoverboards</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
              Artigos detalhados para ajudar você a escolher o melhor <strong>hoverboard</strong> ou <strong>skate elétrico</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article Card 1 */}
            <article className="bg-background rounded-2xl border border-border overflow-hidden card-hover">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-6xl">🛹</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-primary font-semibold uppercase">Guia Completo</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                  Como Escolher o Melhor Hoverboard em 2024
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Tudo que você precisa saber sobre tamanhos, potência, autonomia e recursos dos melhores hoverboards.
                </p>
                <p className="text-xs text-muted-foreground">
                  Por <strong className="text-primary">Marcelo Barbosa</strong> • Dezembro 2024
                </p>
              </div>
            </article>

            {/* Article Card 2 */}
            <article className="bg-background rounded-2xl border border-border overflow-hidden card-hover">
              <div className="aspect-video bg-gradient-to-br from-fire-red/20 to-neon-orange/20 flex items-center justify-center">
                <span className="text-6xl">🔥</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-secondary font-semibold uppercase">Comparativo</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                  Hoverboard 6.5 vs 8.5 vs 10 Polegadas
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Descubra qual tamanho é ideal para você: urbano, offroad ou uso intenso.
                </p>
                <p className="text-xs text-muted-foreground">
                  Por <strong className="text-primary">Marcelo Barbosa</strong> • Dezembro 2024
                </p>
              </div>
            </article>

            {/* Article Card 3 */}
            <article className="bg-background rounded-2xl border border-border overflow-hidden card-hover">
              <div className="aspect-video bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                <span className="text-6xl">⚡</span>
              </div>
              <div className="p-6">
                <span className="text-xs text-accent font-semibold uppercase">Dicas</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">
                  Melhores Marcas de Hoverboard do Brasil
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Brinovar, Smart Balance, Lurs: conheça as marcas mais confiáveis do mercado.
                </p>
                <p className="text-xs text-muted-foreground">
                  Por <strong className="text-primary">Marcelo Barbosa</strong> • Dezembro 2024
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CategoryButtons />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Pronto para encontrar seu <span className="gradient-text">Hoverboard</span> ideal?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Acesse agora as <strong className="text-primary">melhores ofertas</strong> de hoverboards e skates elétricos 
            com <strong className="text-accent">frete grátis</strong> e <strong className="text-secondary">garantia</strong>.
          </p>
          <Button variant="neon" size="xl" asChild>
            <a href="https://mercadolivre.com/sec/28Ru8g8" target="_blank" rel="noopener noreferrer" className="gap-2">
              Ver Ofertas no Mercado Livre
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
