"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import GinTypes from "../components/gintypes";
import BrewAreas from "../components/brewareas";
import { FAQSection } from "../components/FAQsection";
import ContactMe from "../components/contactme";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <AboutUs />

        <GinTypes />

        <BrewAreas />

        <FAQSection />

        <ContactMe />
      </main>
    </div>
  );
}
