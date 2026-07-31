import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "./globals.css";

const META_PIXEL_ID = "1964090547589162";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Progressiva Vegetal Profissional",
    template: "%s | Progressiva Vegetal",
  },
  description:
    "Progressiva Vegetal Profissional de 500 ml com pagamento somente na entrega.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Progressiva Vegetal Profissional",
    description: "Peça agora e pague somente quando receber.",
    type: "website",
    locale: "pt_BR",
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-page font-sans text-content-primary antialiased">
        {children}

        <Script
          id="meta-pixel-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {
                if(f.fbq)return;

                n=f.fbq=function(){
                  n.callMethod
                    ? n.callMethod.apply(n,arguments)
                    : n.queue.push(arguments);
                };

                if(!f._fbq)f._fbq=n;

                n.push=n;
                n.loaded=!0;
                n.version='2.0';
                n.queue=[];

                t=b.createElement(e);
                t.async=!0;
                t.src=v;

                s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s);
              }(
                window,
                document,
                'script',
                'https://connect.facebook.net/en_US/fbevents.js'
              );

              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />

        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            style={{ display: "none" }}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
