import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const Privacidade = () => {
  return (
    <Layout>
      <SEOHead
        title="Política de Privacidade"
        description="Política de Privacidade do Melhores Hoverboards Skates Elétrico. Saiba como tratamos seus dados pessoais."
        canonical="https://melhoreshoverboards.com.br/privacidade"
      />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl font-bold text-foreground mb-8">
              Política de <span className="gradient-text">Privacidade</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg mb-8">
                <strong>Última atualização:</strong> Dezembro de 2024
              </p>

              <div className="space-y-8">
                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    1. Informações que Coletamos
                  </h2>
                  <p className="text-muted-foreground">
                    O <strong className="text-primary">Melhores Hoverboards Skates Elétrico</strong> pode coletar 
                    informações não pessoais automaticamente quando você visita nosso site, incluindo:
                  </p>
                  <ul className="text-muted-foreground mt-4 space-y-2">
                    <li>• Endereço IP</li>
                    <li>• Tipo de navegador</li>
                    <li>• Páginas visitadas</li>
                    <li>• Tempo de permanência</li>
                    <li>• Dispositivo utilizado</li>
                  </ul>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    2. Uso de Cookies
                  </h2>
                  <p className="text-muted-foreground">
                    Utilizamos cookies para melhorar sua experiência de navegação, analisar o tráfego do site e 
                    personalizar conteúdo. Você pode configurar seu navegador para recusar cookies, mas isso pode 
                    afetar algumas funcionalidades do site.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    3. Links de Afiliados
                  </h2>
                  <p className="text-muted-foreground">
                    Este site participa de programas de afiliados, incluindo o programa de afiliados do 
                    <strong className="text-primary"> Mercado Livre</strong>. Quando você clica em links de 
                    produtos e realiza uma compra, podemos receber uma comissão sem custo adicional para você.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    4. Serviços de Terceiros
                  </h2>
                  <p className="text-muted-foreground">
                    Utilizamos serviços de terceiros para análise de tráfego (como Google Analytics) que podem 
                    coletar informações sobre seu uso do site. Esses serviços têm suas próprias políticas de 
                    privacidade.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    5. Proteção de Dados
                  </h2>
                  <p className="text-muted-foreground">
                    Implementamos medidas de segurança adequadas para proteger suas informações contra acesso 
                    não autorizado, alteração, divulgação ou destruição. No entanto, nenhuma transmissão pela 
                    internet é 100% segura.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    6. Seus Direitos
                  </h2>
                  <p className="text-muted-foreground">
                    Você tem direito a acessar, corrigir ou excluir suas informações pessoais. Para exercer 
                    esses direitos, entre em contato conosco através do email: 
                    <strong className="text-primary"> contato@melhoreshoverboards.com.br</strong>
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    7. Alterações nesta Política
                  </h2>
                  <p className="text-muted-foreground">
                    Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
                    regularmente para estar ciente de quaisquer alterações.
                  </p>
                </section>

                <section className="bg-card rounded-xl border border-border p-6">
                  <h2 className="font-display text-xl font-bold text-foreground mb-4">
                    8. Contato
                  </h2>
                  <p className="text-muted-foreground">
                    Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:
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

export default Privacidade;
