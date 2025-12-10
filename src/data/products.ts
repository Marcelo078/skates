export interface Product {
  id: string;
  name: string;
  slug: string;
  shortName: string;
  category: string;
  size: string;
  features: string[];
  keywords: string[];
  image: string;
  affiliateLink: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hoverboard 8.5 Offroad Skate Elétrico Bluetooth Fogo E Gelo",
    slug: "hoverboard-8-5-offroad-fogo-gelo",
    shortName: "Hoverboard Offroad Fogo e Gelo",
    category: "Offroad",
    size: "8.5 polegadas",
    features: ["Bluetooth", "LED", "Offroad", "Design Fogo e Gelo"],
    keywords: ["hoverboard offroad", "skate elétrico 8.5", "hoverboard fogo e gelo", "melhor hoverboard offroad"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "2",
    name: "Hoverboard Original Skate Elétrico 6.5 Roxo Purple Space Led",
    slug: "hoverboard-6-5-roxo-purple-space",
    shortName: "Hoverboard Roxo Purple Space",
    category: "Urbano",
    size: "6.5 polegadas",
    features: ["LED", "Design Purple Space", "Original"],
    keywords: ["hoverboard roxo", "skate elétrico 6.5", "hoverboard purple space", "hoverboard led"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "3",
    name: "Hoverboard Skate Elétrico 8.5'' Offroad Led Bluetooth Preto",
    slug: "hoverboard-8-5-offroad-preto",
    shortName: "Hoverboard Offroad Preto",
    category: "Offroad",
    size: "8.5 polegadas",
    features: ["Bluetooth", "LED", "Offroad", "Preto"],
    keywords: ["hoverboard preto", "hoverboard offroad preto", "skate elétrico 8.5 preto"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "4",
    name: "Hoverboard Masculino Azul Menino Criança Skate Eletrico Bluetooth",
    slug: "hoverboard-azul-infantil-bluetooth",
    shortName: "Hoverboard Azul Infantil",
    category: "Infantil",
    size: "6.5 polegadas",
    features: ["Bluetooth", "LED RGB 360°", "500W", "Até 120kg", "14 km/h", "Autonomia 15km"],
    keywords: ["hoverboard infantil", "hoverboard azul", "hoverboard criança", "presente natal hoverboard"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "5",
    name: "Hoverboard Original Skate Elétrico 8.5 Offroad Led Bluetooth",
    slug: "hoverboard-original-8-5-offroad",
    shortName: "Hoverboard Original Offroad",
    category: "Offroad",
    size: "8.5 polegadas",
    features: ["Original", "LED", "Bluetooth", "Offroad"],
    keywords: ["hoverboard original", "hoverboard offroad original", "melhor hoverboard 8.5"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "6",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Azul Camuflado",
    slug: "hoverboard-6-5-azul-camuflado",
    shortName: "Hoverboard Azul Camuflado",
    category: "Urbano",
    size: "6.5 polegadas",
    features: ["LED", "Bluetooth", "Design Camuflado"],
    keywords: ["hoverboard camuflado", "hoverboard azul camuflado", "skate elétrico camuflado"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "7",
    name: "Hoverboard Elétrico Skate Overboard 6.5 Led Bluetooth Fogo Gelo",
    slug: "hoverboard-6-5-fogo-gelo-led",
    shortName: "Hoverboard Fogo e Gelo 6.5",
    category: "Urbano",
    size: "6.5 polegadas",
    features: ["LED", "Bluetooth", "Design Fogo e Gelo", "110v-220v"],
    keywords: ["hoverboard fogo gelo", "overboard fogo gelo", "hoverboard 6.5 led"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "8",
    name: "Skate Elétrico Hoverboard 6.5 Vermelho Fogo Brinovar",
    slug: "hoverboard-6-5-vermelho-fogo-brinovar",
    shortName: "Hoverboard Vermelho Fogo",
    category: "Urbano",
    size: "6.5 polegadas",
    features: ["LED", "Design Vermelho Fogo", "Brinovar"],
    keywords: ["hoverboard vermelho", "hoverboard fogo", "brinovar hoverboard"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "9",
    name: "Hoverboard Skate Elétrico 6.5 Led Bluetooth Roxo Galáxia",
    slug: "hoverboard-6-5-roxo-galaxia",
    shortName: "Hoverboard Roxo Galáxia",
    category: "Premium",
    size: "6.5 polegadas",
    features: ["LED", "Bluetooth", "Design Roxo Galáxia"],
    keywords: ["hoverboard roxo galaxia", "hoverboard galaxia", "skate elétrico roxo"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "10",
    name: "Hoverboard Skate Elétrico 6.5 Bluetooth Led Diversas Cores",
    slug: "hoverboard-6-5-diversas-cores",
    shortName: "Hoverboard Diversas Cores",
    category: "Urbano",
    size: "6.5 polegadas",
    features: ["LED", "Bluetooth", "Várias Cores Disponíveis"],
    keywords: ["hoverboard colorido", "hoverboard diversas cores", "skate elétrico cores"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "11",
    name: "Hoverboard Skate Elétrico 8.5'' Com Led E Bluetooth Brinovar",
    slug: "hoverboard-8-5-brinovar-led",
    shortName: "Hoverboard 8.5 Brinovar",
    category: "Offroad",
    size: "8.5 polegadas",
    features: ["LED", "Bluetooth", "Brinovar", "8.5 polegadas"],
    keywords: ["hoverboard brinovar 8.5", "hoverboard grande", "melhor hoverboard brinovar"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "12",
    name: "Skate Elétrico Hoverboard 6.5 Rosa Liso Brinovar",
    slug: "hoverboard-6-5-rosa-brinovar",
    shortName: "Hoverboard Rosa Brinovar",
    category: "Infantil",
    size: "6.5 polegadas",
    features: ["Rosa Liso", "Brinovar", "Feminino"],
    keywords: ["hoverboard rosa", "hoverboard feminino", "hoverboard menina"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "13",
    name: "Hoverboard 6.5 Elétrico Para Crianças Skate Fogo E Água Purple Star",
    slug: "hoverboard-6-5-criancas-purple-star",
    shortName: "Hoverboard Infantil Purple Star",
    category: "Infantil",
    size: "6.5 polegadas",
    features: ["Infantil", "Fogo e Água", "Purple Star"],
    keywords: ["hoverboard infantil", "hoverboard criança", "purple star hoverboard"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "14",
    name: "Hoverboard Roxo Galáxia Skate Elétrico 10'' Bluetooth E Led",
    slug: "hoverboard-10-roxo-galaxia-premium",
    shortName: "Hoverboard 10 Polegadas Galáxia",
    category: "Premium",
    size: "10 polegadas",
    features: ["10 polegadas", "LED", "Bluetooth", "Roxo Galáxia"],
    keywords: ["hoverboard 10 polegadas", "hoverboard grande", "hoverboard premium"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "15",
    name: "Hoverboard Smart Balance Rosa Galáxia 6.5 Bluetooth",
    slug: "hoverboard-smart-balance-rosa-galaxia",
    shortName: "Smart Balance Rosa Galáxia",
    category: "Premium",
    size: "6.5 polegadas",
    features: ["Smart Balance", "Bluetooth", "Rosa Galáxia"],
    keywords: ["smart balance hoverboard", "hoverboard rosa galaxia", "hoverboard feminino premium"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  },
  {
    id: "16",
    name: "Hoverboard Elétrico Para Crianças Lurs HB65 Galáxia",
    slug: "hoverboard-lurs-hb65-galaxia",
    shortName: "Lurs HB65 Galáxia",
    category: "Infantil",
    size: "6.5 polegadas",
    features: ["Lurs", "Infantil", "Design Galáxia"],
    keywords: ["lurs hoverboard", "hoverboard infantil galaxia", "hb65 lurs"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    affiliateLink: "https://mercadolivre.com/sec/28Ru8g8"
  }
];

export const affiliateLinks = {
  hoverboards: "https://mercadolivre.com/sec/28Ru8g8",
  suplementos: "https://mercadolivre.com/sec/1WqdDGr",
  ofertas: "https://mercadolivre.com/sec/14GQgfK",
  petshop: "https://mercadolivre.com/sec/2w3WCFN",
  tratores: "https://mercadolivre.com/sec/2d6sMcw",
  notebooks: "https://mercadolivre.com/sec/2cQ33FV",
  tvs: "https://mercadolivre.com/sec/2DLVWrw",
  construcao: "https://mercadolivre.com/sec/23DZvGp",
  creatina: "https://mercadolivre.com/sec/1e23ygz",
  smartHome: "https://mercadolivre.com/sec/32Q9odi",
  carrinhosBebe: "https://mercadolivre.com/sec/1RdnycU",
  bebedouros: "https://mercadolivre.com/sec/2CjPSqn",
  motosInfantil: "https://mercadolivre.com/sec/18DzYmU",
  triciclos: "https://mercadolivre.com/sec/2bb6TRL",
  espelhos: "https://mercadolivre.com/sec/1MEENov",
  placasVideo: "https://mercadolivre.com/sec/1HnRJHj",
  bicicletas: "https://mercadolivre.com/sec/2nKZmda"
};

export const categories = [
  { name: "Suplementos", link: affiliateLinks.suplementos, icon: "💪" },
  { name: "Ofertas Limitadas", link: affiliateLinks.ofertas, icon: "🔥" },
  { name: "Pet Shop", link: affiliateLinks.petshop, icon: "🐾" },
  { name: "Peças de Trator", link: affiliateLinks.tratores, icon: "🚜" },
  { name: "Notebooks", link: affiliateLinks.notebooks, icon: "💻" },
  { name: "TVs", link: affiliateLinks.tvs, icon: "📺" },
  { name: "Construção", link: affiliateLinks.construcao, icon: "🔨" },
  { name: "Creatina", link: affiliateLinks.creatina, icon: "🏋️" },
  { name: "Smart Home", link: affiliateLinks.smartHome, icon: "🏠" },
  { name: "Carrinhos de Bebê", link: affiliateLinks.carrinhosBebe, icon: "👶" },
  { name: "Bebedouros", link: affiliateLinks.bebedouros, icon: "💧" },
  { name: "Motos Infantil", link: affiliateLinks.motosInfantil, icon: "🏍️" },
  { name: "Triciclos Adulto", link: affiliateLinks.triciclos, icon: "🚲" },
  { name: "Espelhos Orgânicos", link: affiliateLinks.espelhos, icon: "🪞" },
  { name: "Placas de Vídeo", link: affiliateLinks.placasVideo, icon: "🎮" },
  { name: "Bicicletas Ergométricas", link: affiliateLinks.bicicletas, icon: "🚴" },
  { name: "Hoverboards", link: affiliateLinks.hoverboards, icon: "🛹" }
];
