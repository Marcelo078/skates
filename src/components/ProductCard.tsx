import { ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="group bg-card rounded-2xl border border-border overflow-hidden card-hover">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={`${product.name} - Melhor Hoverboard Skate Elétrico`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
            {product.category}
          </span>
        </div>
        {/* Size Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-semibold rounded-full">
            {product.size}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.shortName}
        </h3>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-2 py-0.5 bg-muted text-muted-foreground text-xs rounded-md"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1" asChild>
            <Link to={`/produto/${product.slug}`}>
              <Info className="w-4 h-4 mr-1" />
              Saiba Mais
            </Link>
          </Button>
          <Button variant="neon" size="sm" className="flex-1" asChild>
            <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer">
              Comprar
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
