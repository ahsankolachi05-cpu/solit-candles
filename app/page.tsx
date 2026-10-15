import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Marquee, Collection, Scents, Why } from "@/components/SectionsA";
import { Amazon, Instagram, Reviews, CTA, Contact, Footer } from "@/components/SectionsB";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Scents />
        <Why />
        <Amazon />
        <Instagram />
        <Reviews />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
