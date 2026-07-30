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
      title: "Fios mais alinhados e com brilho",
      quote:
        "Veja no vídeo como ficou o alinhamento dos fios e o acabamento após a aplicação do produto.",
      meta: "Avaliação verificada",
      customerName: "Ângela S.",
      customerLocation: "São Paulo, SP",
      videoSrc: "/videos/testimonials/cliente-01.mp4",
      posterSrc: "/images/testimonials/cliente-01-poster.webp"
    },
    {
      id: "testimonial-2",
      title: "Resultado leve e com movimento",
      quote:
        "Uma experiência que mostra o resultado final dos cabelos, mantendo uma aparência mais natural e bem cuidada.",
      meta: "Avaliação verificada",
      customerName: "Rosineide M.",
      customerLocation: "Campinas, SP",
      videoSrc: "/videos/testimonials/cliente-02.mp4",
      posterSrc: "/images/testimonials/cliente-02-poster.webp"
    },
    {
      id: "testimonial-3",
      title: "Transformação visível dos fios",
      quote:
        "Confira a diferença percebida na aparência, no alinhamento e no acabamento dos cabelos após o procedimento.",
      meta: "Avaliação verificada",
      customerName: "Juliana A.",
      customerLocation: "Rio de Janeiro, RJ",
      videoSrc: "/videos/testimonials/cliente-03.mp4",
      posterSrc: "/images/testimonials/cliente-03-poster.webp"
    },
    {
      id: "testimonial-4",
      title: "Aplicação prática e resultado profissional",
      quote:
        "O vídeo apresenta a experiência durante a aplicação e o resultado alcançado ao final do processo.",
      meta: "Avaliação verificada",
      customerName: "Cleide P.",
      customerLocation: "Belo Horizonte, MG",
      videoSrc: "/videos/testimonials/cliente-04.mp4",
      posterSrc: "/images/testimonials/cliente-04-poster.webp"
    },
    {
      id: "testimonial-5",
      title: "Mais brilho e aparência renovada",
      quote:
        "Observe o acabamento dos fios e a aparência final após o uso da Progressiva Vegetal Havana.",
      meta: "Avaliação verificada",
      customerName: "Patrícia O.",
      customerLocation: "Curitiba, PR",
      videoSrc: "/videos/testimonials/cliente-05.mp4",
      posterSrc: "/images/testimonials/cliente-05-poster.webp"
    }
  ],

  offers: [
    {
      id: "offer-1",
      name: "Progressiva Vegetal Havana Sem Formol",
      quantity: 1,
      price: "R$198,00",
      eyebrow: "Ideal para experimentar",
      checkoutKey: "kit-1",
      benefits: [
        "Frasco de 500 ml",
        "Sem formol",
        "Rende diversas aplicações"
      ]
    },
    {
      id: "offer-2",
      name: "Progressiva Vegetal Havana Sem Formol",
      quantity: 2,
      price: "R$247,00",
      originalPrice: "R$298,00",
      badge: "Mais vendido",
      eyebrow: "Oferta por tempo limitado",
      savingsLabel: "Economize R$51",
      featured: true,
      checkoutKey: "kit-2",
      benefits: [
        "Dois frascos de 500 ml",
        "Melhor custo por frasco",
        "Ótimo para revenda inicial"
      ]
    },
    {
      id: "offer-3",
      name: "Progressiva Vegetal Havana Sem Formol",
      quantity: 3,
      price: "R$398,00",
      originalPrice: "R$450,00",
      badge: "Melhor custo-benefício",
      eyebrow: "Estoque para o salão",
      savingsLabel: "Economize R$52",
      checkoutKey: "kit-3",
      benefits: [
        "Três frascos de 500 ml",
        "Maior economia total",
        "Perfeito para profissionais"
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
