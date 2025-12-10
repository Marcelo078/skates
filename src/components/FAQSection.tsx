import { forwardRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual é a melhor marca de hoverboard?",
    answer: "As melhores marcas de hoverboard no Brasil incluem Brinovar, Smart Balance, Lurs e Purple Star. Cada marca oferece características únicas, como diferentes tamanhos de roda (6.5, 8.5 e 10 polegadas), recursos de LED, Bluetooth e designs exclusivos como Fogo e Gelo, Roxo Galáxia e Camuflado."
  },
  {
    question: "Qual a diferença entre hoverboards e skates elétricos?",
    answer: "O hoverboard é um veículo de duas rodas paralelas onde você fica em pé e se equilibra, controlando a direção com o peso do corpo. Já o skate elétrico possui quatro rodas em linha como um skate tradicional, mas com motor elétrico. Os hoverboards são mais fáceis de aprender, enquanto skates elétricos oferecem maior velocidade e autonomia."
  },
  {
    question: "Qual é a idade recomendada para andar de hoverboard?",
    answer: "A idade recomendada para andar de hoverboard é a partir de 6 anos, sempre com supervisão de um adulto. Para crianças, recomendamos modelos de 6.5 polegadas que são mais leves e fáceis de controlar. É essencial usar equipamentos de proteção como capacete, joelheiras e cotoveleiras."
  },
  {
    question: "Como saber se o hoverboard é bom?",
    answer: "Um bom hoverboard deve ter: certificação de segurança, bateria de qualidade (Samsung ou LG), motor potente (mínimo 500W para adultos), autonomia de pelo menos 10-15 km, capacidade de peso adequada (geralmente até 100-120kg), e recursos como Bluetooth e LED. Verifique também as avaliações de outros compradores e a garantia oferecida."
  },
  {
    question: "Hoverboard 6.5, 8.5 ou 10 polegadas: qual escolher?",
    answer: "O tamanho ideal depende do uso: 6.5 polegadas é perfeito para uso urbano em pisos lisos e para crianças; 8.5 polegadas (Offroad) é ideal para terrenos irregulares e adultos; 10 polegadas oferece maior estabilidade e conforto para uso intenso. Quanto maior a roda, melhor a absorção de impactos."
  },
  {
    question: "Os hoverboards têm garantia?",
    answer: "Sim, os hoverboards vendidos no Mercado Livre possuem garantia de fábrica e proteção de compra do Mercado Pago. É importante comprar de vendedores com boa reputação e verificar as condições de garantia antes da compra. Problemas com bateria, motor e componentes eletrônicos geralmente são cobertos."
  }
];

const FAQSection = forwardRef<HTMLElement, object>((_, ref) => {
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Perguntas sobre <span className="gradient-text">Hoverboards</span>
            </h2>
            <p className="text-muted-foreground mt-2">
              Tire suas dúvidas antes de comprar seu <strong>hoverboard</strong> ou <strong>skate elétrico</strong>
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* JSON-LD for FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })
      }} />
    </section>
  );
});

FAQSection.displayName = "FAQSection";

export default FAQSection;
