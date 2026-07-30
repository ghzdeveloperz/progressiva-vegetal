import type { ProductPageContent } from "../model/product-page-content";

export const productContent = {
  brandName: "Progressiva Vegetal Havana",

  brandLogo:
    "/images/brand/logo-progressiva-vegetal-horizontal.png",

  productName:
    "Progressiva Vegetal Profissional 500 ml",

  productImage:
    "/images/products/progressiva-vegetal.png",

  hero: {
    bannerImage:
      "/images/banners/progressiva-vegetal-ofc.png",

    mobileBannerImage:
      "/images/banners/progressiva-vegetal-mobile.png",

    eyebrow:
      "Progressiva vegetal · sem formol",

    title:
      "Liso impecável, com brilho intenso e aparência",

    highlightedText:
      "natural.",

    description:
      "A Progressiva Vegetal Havana alisa enquanto preserva o cuidado com os fios. Escolha seu kit e pague somente quando receber."
  },

  trustItems: [
    {
      id: "cash-on-delivery",
      label: "Pagamento na entrega",
      iconSrc: "/icons/trust/card-credit.svg"
    },
    {
      id: "tracked-delivery",
      label: "Pedido acompanhado",
      iconSrc: "/icons/trust/free-shipping.svg"
    },
    {
      id: "customer-support",
      label: "Atendimento ao cliente",
      iconSrc: "/icons/trust/whatsapp.svg"
    }
  ],

  benefits: [
    {
      id: "benefit-1",
      title: "Fórmula sem formol",
      description:
        "Destaque apresentado no rótulo do produto."
    },
    {
      id: "benefit-2",
      title: "Embalagem profissional",
      description:
        "Conteúdo de 500 ml para uma aplicação prática."
    },
    {
      id: "benefit-3",
      title: "Pagamento na entrega",
      description:
        "Confirme o pedido agora e pague somente ao receber."
    }
  ],

  productHighlights: [
    "Embalagem de 500 ml",
    "Uso profissional",
    "Fórmula sem formol",
    "Aplicação seguindo as instruções do fabricante"
  ],

  testimonials: [
    {
      id: "testimonial-1",
      title: "Avaliação em vídeo 01",
      quote:
        "Substitua por um depoimento verdadeiro e autorizado.",
      meta: "Espaço reservado para cliente real"
    },
    {
      id: "testimonial-2",
      title: "Avaliação em vídeo 02",
      quote:
        "Adicione um vídeo vertical mostrando a experiência real.",
      meta: "Formato recomendado: 9:16"
    },
    {
      id: "testimonial-3",
      title: "Avaliação em vídeo 03",
      quote:
        "Utilize legendas e autorização da pessoa apresentada.",
      meta: "Carregamento sob demanda"
    }
  ],

  offers: [
    {
      id: "offer-1",
      name: "Experimente",
      quantity: 1,
      originalPrice: "R$ 000,00",
      price: "Defina o preço",
      benefits: [
        "1 unidade de 500 ml",
        "Pagamento na entrega"
      ]
    },
    {
      id: "offer-2",
      name: "Kit mais escolhido",
      quantity: 2,
      originalPrice: "R$ 000,00",
      price: "Defina o preço",
      badge: "Mais escolhido",
      featured: true,
      benefits: [
        "2 unidades de 500 ml",
        "Melhor custo por unidade",
        "Pagamento na entrega"
      ]
    },
    {
      id: "offer-3",
      name: "Kit profissional",
      quantity: 3,
      originalPrice: "R$ 000,00",
      price: "Defina o preço",
      benefits: [
        "3 unidades de 500 ml",
        "Maior economia",
        "Pagamento na entrega"
      ]
    }
  ],

  faq: [
    {
      id: "faq-1",
      question: "Preciso pagar antes do envio?",
      answer:
        "Não. Nos pedidos elegíveis, o pagamento acontece somente na entrega."
    },
    {
      id: "faq-2",
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Os métodos disponíveis dependem da região e da transportadora."
    },
    {
      id: "faq-3",
      question: "O produto é enviado para qualquer região?",
      answer:
        "A disponibilidade deve ser validada pelo CEP."
    },
    {
      id: "faq-4",
      question: "Como devo utilizar o produto?",
      answer:
        "Siga as instruções oficiais do fabricante e as orientações profissionais aplicáveis."
    }
  ]
} as const satisfies ProductPageContent;
