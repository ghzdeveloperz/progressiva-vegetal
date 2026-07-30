import { productContent } from "./data/product-content";
import { BenefitsSection } from "./sections/benefits/benefits-section";
import { CodProcessSection } from "./sections/cod-process/cod-process-section";
import { FaqSection } from "./sections/faq/faq-section";
import { FinalCtaSection } from "./sections/final-cta/final-cta-section";
import { FooterSection } from "./sections/footer/footer-section";
import { HeaderSection } from "./sections/header/header-section";
import { HeroSection } from "./sections/hero/hero-section";
import { OffersSection } from "./sections/offers/offers-section";
import { ProductShowcaseSection } from "./sections/product-showcase/product-showcase-section";
import { TestimonialsSection } from "./sections/testimonials/testimonials-section";
import { TrustBarSection } from "./sections/trust-bar/trust-bar-section";

export function ProductLandingPage() {
  return (
    <>
      <TrustBarSection items={productContent.trustItems} />
      <HeaderSection brandName={productContent.brandName} />
      <main>
        <HeroSection content={productContent} />
        <BenefitsSection items={productContent.benefits} />
        <ProductShowcaseSection content={productContent} />
        <TestimonialsSection items={productContent.testimonials} />
        <OffersSection offers={productContent.offers} />
        <CodProcessSection />
        <FaqSection items={productContent.faq} />
        <FinalCtaSection />
      </main>
      <FooterSection brandName={productContent.brandName} />
    </>
  );
}
