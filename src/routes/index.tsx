import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { FAQ } from "@/components/sections/FAQ";
import { ContactFooter } from "@/components/layout/Footer";
import { WhatIs } from "@/components/sections/WhatIs";
import { Features } from "@/components/sections/Features";
import { Credentials } from "@/components/sections/Credentials";
import { Testimonials } from "@/components/sections/Testimonials";


const SITE_URL = "https://drgabrielveber.com.br";
const PAGE_TITLE = "Dr. Gabriel Veber — UroFill™ | Aumento Peniano com Excelência Médica";
const PAGE_DESCRIPTION =
  "Aumente sua confiança com o UroFill™, o procedimento de aumento peniano mais seguro e reconhecido mundialmente. Agende sua avaliação com o Dr. Gabriel Veber.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESCRIPTION },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESCRIPTION },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Gabriel Veber",
          medicalSpecialty: ["Urology", "Andrology"],
          url: SITE_URL,
          areaServed: "BR",
          description: PAGE_DESCRIPTION,
        }),
      },
    ],
  }),
  component: LandingPage,
});

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="w-full overflow-hidden leading-[0]" style={{ transform: flip ? "rotate(180deg)" : undefined }}>
      <svg viewBox="0 0 1440 80" className="w-full h-[60px] md:h-[80px]" preserveAspectRatio="none">
        <path d="M0,32 C360,96 1080,0 1440,48 L1440,80 L0,80 Z" fill="white" />
      </svg>
    </div>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-[color:var(--background)]">
      <Hero />
      <AboutDoctor />
      <WaveDivider />
      <WhatIs />
      <Features />
      <Credentials />
      <Testimonials />
      
      <FAQ />
      <ContactFooter />
    </main>
  );
}
