import { productContent } from "./data/product-content";

import { BeforeAfterSection } from "./sections/before-after/before-after-section";
import { CodProcessSection } from "./sections/cod-process/cod-process-section";
import { CountdownSection } from "./sections/countdown/countdown-section";
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
      <TrustBarSection
        items={productContent.trustItems}
      />

      <div className="sticky top-0 z-50 w-full">
        <CountdownSection />

        <HeaderSection
          brandName={productContent.brandName}
          brandLogo={productContent.brandLogo}
        />
      </div>

      <main>
        <HeroSection content={productContent} />

        <TestimonialsSection
          items={productContent.testimonials}
        />

        <ProductShowcaseSection
          content={productContent}
        />

        <BeforeAfterSection />

        <OffersSection
          offers={productContent.offers}
        />

        <CodProcessSection />

        <FaqSection items={productContent.faq} />

        <FinalCtaSection />
      </main>

      <FooterSection
        brandName={productContent.brandName}
      />
    </>
  );
}
