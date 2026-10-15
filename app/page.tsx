import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Collection, Scents, Why } from "@/components/SectionsA";
import { Amazon, Instagram, Reviews, CTA, Contact, Footer } from "@/components/SectionsB";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
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
