import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { User, Target, Heart, Shield } from "lucide-react";

const Sobre = () => {
  return (
    <Layout>
      <SEOHead
        title="Sobre Nós"
        description="Conheça o Melhores Hoverboards Skates Elétrico. Somos especialistas em análises de hoverboards e skates elétricos no Brasil."
        canonical="https://melhoreshoverboards.com.br/sobre"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Quem Somos e Nossa <span className="gradient-text">Missão</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos apaixonados por mobilidade elétrica e queremos ajudar você a encontrar o 
              <strong className="text-primary"> melhor hoverboard</strong> para suas necessidades.
            </p>
          </div>

          {/* About Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 mb-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Marcelo Barbosa
                  </h2>
                  <p className="text-primary font-semibold">Fundador & Revisor Principal</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  O <strong className="text-foreground">Melhores Hoverboards Skates Elétrico</strong> nasceu da paixão por 
                  tecnologia e mobilidade urbana. Após anos testando e analisando diversos modelos de 
                  <strong className="text-primary"> hoverboards</strong> e <strong className="text-primary">skates elétricos</strong>, 
                  decidimos criar este portal para compartilhar nosso conhecimento e ajudar milhares de brasileiros 
                  a fazer a escolha certa.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Nossa equipe analisa criteriosamente cada produto, considerando aspectos como 
                  <strong className="text-foreground"> qualidade de construção</strong>, 
                  <strong className="text-foreground"> segurança</strong>, 
                  <strong className="text-foreground"> autonomia</strong>, 
                  <strong className="text-foreground"> potência</strong> e 
                  <strong className="text-foreground"> custo-benefício</strong>. 
                  Trabalhamos incansavelmente para trazer as melhores análises e as melhores ofertas do mercado.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Somos <strong className="text-primary">afiliados do Mercado Livre</strong>, o que significa que 
                  recebemos uma pequena comissão quando você compra através dos nossos links — sem nenhum custo 
                  adicional para você. Isso nos permite manter o site funcionando e continuar trazendo conteúdo 
                  de qualidade.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Nossa Missão</h3>
                <p className="text-muted-foreground text-sm">
                  Ajudar você a encontrar o hoverboard perfeito com análises honestas e imparciais.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Heart className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Nossos Valores</h3>
                <p className="text-muted-foreground text-sm">
                  Transparência, honestidade e compromisso com a qualidade em tudo que fazemos.
                </p>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Shield className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">Nosso Compromisso</h3>
                <p className="text-muted-foreground text-sm">
                  Recomendar apenas produtos que realmente acreditamos e que atendam nossos padrões.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Tem alguma dúvida? Entre em contato conosco!
              </p>
              <Button variant="neon" size="lg" asChild>
                <a href="mailto:contato@melhoreshoverboards.com.br">
                  Enviar Mensagem
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sobre;
