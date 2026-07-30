import type { ProductPageContent } from "../model/product-page-content";

export const productContent = {
  brandName: "Progressiva Vegetal",
  productName: "Progressiva Vegetal Profissional 500 ml",
  productImage: "/images/products/progressiva-vegetal.png",
  hero: {
    eyebrow: "Cuidado capilar profissional",
    title: "Cabelos alinhados com acabamento",
    highlightedText: "profissional",
    description:
      "Uma experiência de cuidado pensada para quem busca praticidade, apresentação e uma rotina capilar mais organizada."
  },
  trustItems: [
    {
      id: "cash-on-delivery",
      label: "Pagamento somente na entrega",
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
        "Destaque principal do produto conforme as informações apresentadas no rótulo."
    },
    {
      id: "benefit-2",
      title: "Embalagem profissional",
      description:
        "Conteúdo de 500 ml para uma experiência de uso prática e bem apresentada."
    },
    {
      id: "benefit-3",
      title: "Compra sem antecipação",
      description:
        "Você confirma o pedido agora e realiza o pagamento somente quando receber."
    }
  ],
  productHighlights: [
    "Embalagem de 500 ml",
    "Uso profissional",
    "Fórmula sem formol",
    "Aplicação seguindo as instruções oficiais do fabricante"
  ],
  testimonials: [
    {
      id: "testimonial-1",
      title: "Avaliação em vídeo 01",
      quote:
        "Substitua este conteúdo por um depoimento verdadeiro, autorizado e sem promessas exageradas.",
      meta: "Espaço reservado para cliente real"
    },
    {
      id: "testimonial-2",
      title: "Avaliação em vídeo 02",
      quote:
        "Adicione um vídeo vertical mostrando a experiência real de recebimento e utilização.",
      meta: "Formato recomendado: 9:16"
    },
    {
      id: "testimonial-3",
      title: "Avaliação em vídeo 03",
      quote:
        "Use legendas, boa iluminação e autorização expressa da pessoa que aparece no vídeo.",
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
      benefits: ["1 unidade de 500 ml", "Pagamento na entrega"]
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
        "Não. Nos pedidos elegíveis, o pagamento acontece somente no momento da entrega."
    },
    {
      id: "faq-2",
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Os métodos disponíveis precisam ser confirmados conforme a transportadora e a região atendida."
    },
    {
      id: "faq-3",
      question: "O produto é enviado para qualquer região?",
      answer:
        "A disponibilidade deve ser validada pelo CEP antes da confirmação definitiva do pedido."
    },
    {
      id: "faq-4",
      question: "Como devo utilizar o produto?",
      answer:
        "Siga exclusivamente as instruções oficiais do fabricante e as orientações profissionais aplicáveis ao produto."
    }
  ]
} as const satisfies ProductPageContent;
