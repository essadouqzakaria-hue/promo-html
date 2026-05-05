// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // انقل تنسيقات style.css إلى هنا
import { Poppins } from 'next/font/google'
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Agence immobilière à Marrakech : vente, location de biens – Promo Immo",
  description: "Promo Immo, agence immobilière à Marrakech vous accompagne...",
  // أضف باقي وسوم الـ Meta هنا
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <>
          <link href="asset/css/style.css" rel="stylesheet" />
        </>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Script rel="preload" src="asset/js/jquery.min.js"></Script>
        <Script src="asset/js/bootstrap.bundle.min.js"></Script>
      </body>
    </html>
  );
}
