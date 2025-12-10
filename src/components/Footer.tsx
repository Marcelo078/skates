import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Zap, Mail, MapPin } from "lucide-react";

const Footer = forwardRef<HTMLElement, object>((_, ref) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold gradient-text">Melhores Hoverboards</h3>
                <p className="text-xs text-muted-foreground">Skates Elétricos</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Seu guia definitivo para escolher o melhor <strong>hoverboard</strong> e <strong>skate elétrico</strong>. 
              Análises completas, comparativos e as melhores ofertas do mercado.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <a href="/#produtos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Produtos
                </a>
              </li>
              <li>
                <a href="/#artigos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Artigos
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/transparencia" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Transparência e Isenção
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                contato@melhoreshoverboards.com.br
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                São Paulo, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} Melhores Hoverboards Skates Elétrico. Todos os direitos reservados.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right">
              Revisor: <strong className="text-primary">Marcelo Barbosa</strong> | 
              Este site participa de programas de afiliados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
