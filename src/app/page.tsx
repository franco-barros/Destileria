"use client";

import Hero from "../components/hero";
import AboutUs from "../components/aboutus";
import GinTypes from "../components/gintypes";
import BrewAreas from "../components/brewareas";
import { FAQSection } from "../components/FAQsection";
import ContactMe from "../components/contactme";
import BackToTopButton from "../components/backtotopbutton";
import WhatsappButton from "../components/whatsappbutton";

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

        <BackToTopButton />

        <WhatsappButton phoneNumber="+1234567890" />
      </main>
    </div>
  );
}
