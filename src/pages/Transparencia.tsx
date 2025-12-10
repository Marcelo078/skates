import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { AlertTriangle, Info, Shield, DollarSign } from "lucide-react";

const Transparencia = () => {
  return (
    <Layout>
      <SEOHead
        title="Transparência e Isenção de Responsabilidade"
        description="Transparência sobre nosso modelo de negócio e isenção de responsabilidade do Melhores Hoverboards Skates Elétrico."
        canonical="https://melhoreshoverboards.com.br/transparencia"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Transparência e <span className="gradient-text">Isenção de Responsabilidade</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                Valorizamos a transparência e queremos que você entenda como nosso site funciona.
              </p>

              <div className="space-y-8">
                {/* Affiliate Disclosure */}
                <section className="bg-card rounded-xl border border-primary/30 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        Divulgação de Afiliados
                      </h2>
                      <p className="text-muted-foreground">
                        O <strong className="text-primary">Melhores Hoverboards Skates Elétrico</strong> participa 
                        de programas de afiliados, incluindo o programa de afiliados do 
                        <strong className="text-foreground"> Mercado Livre</strong>.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        Isso significa que quando você clica em links de produtos em nosso site e realiza uma 
                        compra, podemos receber uma <strong className="text-foreground">pequena comissão</strong> — 
                        sem nenhum custo adicional para você.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        Essa comissão nos ajuda a manter o site funcionando e a continuar produzindo conteúdo 
                        de qualidade gratuito para você.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Editorial Independence */}
                <section className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        Independência Editorial
                      </h2>
                      <p className="text-muted-foreground">
                        Nossas análises e recomendações são baseadas em <strong className="text-foreground">pesquisa 
                        independente</strong> e não são influenciadas por comissões de afiliados.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        Recomendamos produtos que genuinamente acreditamos ser bons para nossos leitores, 
                        independentemente de ganharmos comissão ou não.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-card rounded-xl border border-neon-orange/30 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-neon-orange/10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-6 h-6 text-neon-orange" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        Isenção de Responsabilidade
                      </h2>
                      <ul className="text-muted-foreground space-y-4">
                        <li>
                          <strong className="text-foreground">Informações de Produtos:</strong> Preços, 
                          especificações e disponibilidade podem mudar a qualquer momento. Sempre verifique 
                          as informações diretamente no site do vendedor.
                        </li>
                        <li>
                          <strong className="text-foreground">Decisões de Compra:</strong> Não nos 
                          responsabilizamos por decisões de compra baseadas em nosso conteúdo. Recomendamos 
                          pesquisa adicional antes de qualquer compra.
                        </li>
                        <li>
                          <strong className="text-foreground">Garantias e Devoluções:</strong> Questões 
                          relacionadas a garantias, devoluções ou problemas com produtos devem ser tratadas 
                          diretamente com o vendedor (Mercado Livre).
                        </li>
                        <li>
                          <strong className="text-foreground">Segurança:</strong> Hoverboards são veículos 
                          elétricos e devem ser usados com equipamentos de proteção adequados. Sempre siga 
                          as instruções do fabricante.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Product Information */}
                <section className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Info className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-4">
                        Sobre Nossos Conteúdos
                      </h2>
                      <p className="text-muted-foreground">
                        Todos os nossos artigos e análises são escritos e revisados por 
                        <strong className="text-primary"> Marcelo Barbosa</strong>, especialista em mobilidade 
                        elétrica com anos de experiência no mercado brasileiro.
                      </p>
                      <p className="text-muted-foreground mt-4">
                        Nos esforçamos para manter todas as informações atualizadas e precisas, mas não podemos 
                        garantir 100% de exatidão em todos os momentos devido à natureza dinâmica do mercado.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    Dúvidas?
                  </h2>
                  <p className="text-muted-foreground">
                    Se você tiver qualquer dúvida sobre nossa política de transparência ou sobre nosso 
                    modelo de negócio, entre em contato:
                    <br /><br />
                    Email: <span className="text-primary">contato@melhoreshoverboards.com.br</span>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transparencia;
