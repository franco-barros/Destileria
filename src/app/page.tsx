"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import BeerTypes from "../components/beertypes";
import BrewAreas from "../components/brewareas";
import { FAQSection } from "../components/FAQsection";
import ContactMe from "../components/contactme";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />

        <AboutUs />

        <BeerTypes />

        <BrewAreas />

        <FAQSection />

        <ContactMe />
      </main>
    </div>
  );
}
