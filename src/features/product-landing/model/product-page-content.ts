export type TrustItem = Readonly<{
  id: string;
  label: string;
  iconSrc: string;
}>;

export type Benefit = Readonly<{
  id: string;
  title: string;
  description: string;
}>;

export type Testimonial = Readonly<{
  id: string;
  title: string;
  quote: string;
  meta: string;

  /**
   * Caminho público do vídeo.
   * Exemplo: /videos/testimonials/cliente-01.mp4
   */
  videoSrc?: string;

  /**
   * Imagem exibida antes de o vídeo iniciar.
   * Exemplo: /images/testimonials/cliente-01-poster.webp
   */
  posterSrc?: string;

  /**
   * Nome da pessoa, quando houver autorização.
   */
  customerName?: string;

  /**
   * Informação complementar, como cidade e estado.
   */
  customerLocation?: string;
}>;

export type Offer = Readonly<{
  id: string;
  name: string;
  quantity: number;
  price: string;
  originalPrice?: string;
  badge?: string;
  eyebrow?: string;
  savingsLabel?: string;
  featured?: boolean;

  /**
   * Tags curtas exibidas no card.
   * Exemplos: "Tiara", "Brinco", "Pulseira".
   */
  tags?: readonly string[];

  checkoutKey: "kit-1" | "kit-2" | "kit-3";
  benefits: readonly string[];
}>;

export type FaqItem = Readonly<{
  id: string;
  question: string;
  answer: string;
}>;

export type ProductPageContent = Readonly<{
  brandName: string;
  brandLogo: string;
  productName: string;
  productImage: string;

  hero: Readonly<{
    bannerImage: string;
    mobileBannerImage: string;
    eyebrow: string;
    title: string;
    highlightedText: string;
    description: string;
  }>;

  trustItems: readonly TrustItem[];
  benefits: readonly Benefit[];
  productHighlights: readonly string[];
  testimonials: readonly Testimonial[];
  offers: readonly Offer[];
  faq: readonly FaqItem[];
}>;
