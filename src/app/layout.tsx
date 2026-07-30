import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

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
      </body>
    </html>
  );
}
