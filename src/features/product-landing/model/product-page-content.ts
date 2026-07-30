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
}>;

export type Offer = Readonly<{
  id: string;
  name: string;
  quantity: number;
  price: string;
  originalPrice?: string;
  badge?: string;
  featured?: boolean;
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
