import type { Metadata } from "next";
import { Archivo_Black, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const luxe = Cormorant_Garamond({ weight: ["500", "600", "700"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-luxe" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "So'Lit Candles — Luxury Hand-Poured Candles from Belfast",
  description:
    "The White Collection: eight luxury 240g candles in four signature scents — Citrus Rituals, Velvet Coconut, Wild Berry Orchard and Fig Noir. £22.99 with complimentary shipping. Hand-poured in Northern Ireland with 100% soy wax.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${luxe.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
