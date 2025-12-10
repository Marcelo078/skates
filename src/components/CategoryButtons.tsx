import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const CategoryButtons = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Explore Mais Categorias
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Outras <span className="gradient-text">Ofertas Exclusivas</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Confira as melhores ofertas em diversas categorias no Mercado Livre
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="h-auto py-3 px-4 flex flex-col items-center gap-2 hover:border-primary hover:bg-primary/5 transition-all"
              asChild
            >
              <a href={category.link} target="_blank" rel="noopener noreferrer">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-xs text-center leading-tight">{category.name}</span>
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryButtons;
