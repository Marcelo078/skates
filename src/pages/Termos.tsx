import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Termos = () => {
  return (
    <Layout>
      <SEOHead
        title="Termos de Uso"
        description="Termos de Uso do Melhores Hoverboards Skates Elétrico. Conheça as regras de uso do nosso site."
        canonical="https://melhoreshoverboards.com.br/termos"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Termos de <span className="gradient-text">Uso</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                <strong>Última atualização:</strong> Dezembro de 2024
              </p>

              <div className="space-y-8">
                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    1. Aceitação dos Termos
                  </h2>
                  <p className="text-muted-foreground">
                    Ao acessar e usar o site <strong className="text-primary">Melhores Hoverboards Skates Elétrico</strong>, 
                    você concorda com estes Termos de Uso. Se você não concordar com algum termo, por favor, 
                    não utilize nosso site.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    2. Descrição do Serviço
                  </h2>
                  <p className="text-muted-foreground">
                    Este site oferece informações, análises, comparativos e recomendações sobre 
                    <strong className="text-primary"> hoverboards</strong> e <strong className="text-primary">skates elétricos</strong>. 
                    O conteúdo é de natureza informativa e não substitui pesquisa pessoal ou aconselhamento 
                    profissional.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    3. Links de Afiliados
                  </h2>
                  <p className="text-muted-foreground">
                    Este site contém links de afiliados para o <strong className="text-primary">Mercado Livre</strong> e 
                    outras plataformas. Quando você clica nesses links e realiza uma compra, podemos receber 
                    uma comissão. Isso não afeta o preço que você paga pelos produtos.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    4. Propriedade Intelectual
                  </h2>
                  <p className="text-muted-foreground">
                    Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é protegido por 
                    direitos autorais e pertence ao Melhores Hoverboards Skates Elétrico. É proibida a 
                    reprodução sem autorização prévia.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    5. Limitação de Responsabilidade
                  </h2>
                  <p className="text-muted-foreground">
                    Não nos responsabilizamos por decisões de compra baseadas em nosso conteúdo. As informações 
                    são fornecidas "como estão" e podem estar sujeitas a alterações. Sempre verifique as 
                    informações diretamente com o vendedor antes de comprar.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    6. Conduta do Usuário
                  </h2>
                  <p className="text-muted-foreground">
                    Você concorda em não usar este site para atividades ilegais, não tentar acessar áreas 
                    restritas e não interferir no funcionamento do site.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    7. Modificações
                  </h2>
                  <p className="text-muted-foreground">
                    Reservamos o direito de modificar estes termos a qualquer momento. Alterações significativas 
                    serão comunicadas através do site. O uso contínuo após alterações implica aceitação dos 
                    novos termos.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    8. Lei Aplicável
                  </h2>
                  <p className="text-muted-foreground">
                    Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos 
                    tribunais competentes do Brasil.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    9. Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Para dúvidas sobre estes Termos de Uso:
                    <br /><br />
                    <strong className="text-foreground">Melhores Hoverboards Skates Elétrico</strong><br />
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

export default Termos;
