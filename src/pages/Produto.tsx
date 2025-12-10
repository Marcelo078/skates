import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, ExternalLink, Star, Shield, Zap, Check } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const Produto = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <Layout>
        <SEOHead
          title="Produto não encontrado"
          description="O produto que você está procurando não foi encontrado."
        />
        <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-foreground mb-4">
              Produto não encontrado
            </h1>
            <p className="text-muted-foreground mb-8">
              O produto que você está procurando não existe ou foi removido.
            </p>
            <Button variant="neon" asChild>
              <Link to="/">Voltar ao Início</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <Layout>
      <SEOHead
        title={`${product.name} - Análise Completa`}
        description={`Análise detalhada do ${product.name}. Confira especificações, recursos, pontos positivos e negativos. Melhores preços e ofertas.`}
        canonical={`https://melhoreshoverboards.com.br/produto/${product.slug}`}
        ogType="product"
        article={{
          author: "Marcelo Barbosa",
          publishedTime: "2024-12-01T00:00:00Z",
          modifiedTime: new Date().toISOString(),
          section: "Análise de Produto",
          tags: product.keywords,
        }}
      />

      {/* JSON-LD Product Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": `${product.name} - ${product.features.join(", ")}`,
          "image": product.image,
          "brand": {
            "@type": "Brand",
            "name": "Hoverboard"
          },
          "category": product.category,
          "offers": {
            "@type": "Offer",
            "url": product.affiliateLink,
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Mercado Livre"
            }
          },
          "review": {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Marcelo Barbosa"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4.5",
              "bestRating": "5"
            }
          }
        })
      }} />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Produtos
            </Link>
          </nav>

          {/* Product Header */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-card border border-border">
                <img
                  src={product.image}
                  alt={`${product.name} - Melhor Hoverboard Skate Elétrico`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full">
                  {product.category}
                </span>
                <span className="px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-full">
                  {product.size}
                </span>
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < 4 ? "text-neon-orange fill-neon-orange" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">4.5/5 (baseado em avaliações)</span>
              </div>

              <p className="text-muted-foreground text-lg mb-8">
                O <strong className="text-primary">{product.shortName}</strong> é uma excelente opção para quem 
                busca qualidade e desempenho em um <strong>hoverboard</strong>. Com recursos como{" "}
                {product.features.slice(0, 3).join(", ")}, este modelo oferece uma experiência completa de 
                mobilidade elétrica.
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-display font-semibold text-foreground mb-4">Recursos Principais:</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">Compra Segura</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm">Entrega Rápida</span>
                </div>
              </div>

              {/* CTA */}
              <Button variant="neon" size="xl" className="w-full sm:w-auto" asChild>
                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
                  Comprar no Mercado Livre
                  <ExternalLink className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <article className="max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Análise Completa: {product.shortName}
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Se você está em busca do <strong className="text-primary">melhor hoverboard</strong> para suas 
                  necessidades, o <strong>{product.name}</strong> é uma opção que merece sua atenção. 
                  Este modelo combina tecnologia, design e desempenho em um único produto.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                  Por que escolher este Hoverboard?
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Com rodas de <strong className="text-foreground">{product.size}</strong>, este 
                  <strong className="text-primary"> hoverboard</strong> oferece excelente estabilidade e conforto. 
                  É ideal para uso {product.category === "Offroad" ? "em terrenos irregulares e aventuras ao ar livre" : 
                  product.category === "Infantil" ? "por crianças e iniciantes" : "urbano e deslocamentos do dia a dia"}.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os recursos de <strong className="text-foreground">{product.features.slice(0, 2).join(" e ")}</strong> 
                  tornam a experiência ainda mais divertida e prática. Você pode conectar seu smartphone via 
                  Bluetooth para ouvir suas músicas favoritas enquanto anda.
                </p>

                <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                  Especificações Técnicas
                </h3>

                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li>• <strong className="text-foreground">Tamanho da Roda:</strong> {product.size}</li>
                  <li>• <strong className="text-foreground">Categoria:</strong> {product.category}</li>
                  <li>• <strong className="text-foreground">Recursos:</strong> {product.features.join(", ")}</li>
                  <li>• <strong className="text-foreground">Indicado para:</strong> Adultos e adolescentes</li>
                </ul>

                <h3 className="font-display text-xl font-bold text-foreground mt-8 mb-4">
                  Onde Comprar com as Melhores Ofertas
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  Você pode encontrar o <strong className="text-primary">{product.shortName}</strong> no 
                  <strong className="text-foreground"> Mercado Livre</strong> com 
                  <strong className="text-accent"> frete grátis</strong> e 
                  <strong className="text-secondary"> garantia de compra protegida</strong>. 
                  Clique no botão abaixo para conferir as 
                  <strong className="text-primary"> melhores ofertas</strong> disponíveis.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Revisado por <strong className="text-primary">Marcelo Barbosa</strong> • 
                  Atualizado em Dezembro de 2024
                </p>
              </div>
            </div>
          </article>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                Produtos Relacionados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Produto;
