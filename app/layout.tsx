import type { Metadata } from "next";
import { Archivo_Black, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const luxe = Cormorant_Garamond({ weight: ["500", "600", "700"], style: ["normal", "italic"], subsets: ["latin"], variable: "--font-luxe" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "So'Lit Candles — Luxury Candles for the Gen Z Glow-Up",
  description:
    "So'Lit Candles launches the White Collection: eight luxury 240g high-fragrance candles for £22.99 with free UK shipping. Trendy, vibrant, unapologetically lit.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${luxe.variable} ${body.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
