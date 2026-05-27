import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Star,
  Heart,
  CheckCircle2,
  Trophy,
  Stethoscope,
  Smile,
  BadgeCheck,
  Activity,
  Plus,
  Minus,
  type LucideIcon,
} from "lucide-react";

import drGabrielHero from "@/assets/dr-gabriel-hero.png";
import heroMobileBg from "@/assets/hero-mobile-bg.png";
import heroTabletBg from "@/assets/hero-tablet-bg.png";
import heroDesktopBg from "@/assets/hero-desktop-bg.png";
import doctorAbout from "@/assets/doctor-about.jpg";
import doctorCredentials from "@/assets/doctor-credentials.jpg";
import surgery1 from "@/assets/surgery-1.jpg";
import surgery2 from "@/assets/surgery-2.jpg";
import surgery3 from "@/assets/surgery-3.jpg";
import conf1 from "@/assets/conf-1.jpg";
import conf3 from "@/assets/conf-3.jpg";

import logoGabriel from "@/assets/logo-gabriel-veber.png";


const SITE_URL = "https://drgabrielveberlp.lovable.app";
const PAGE_TITLE = "Dr. Gabriel Veber — UroFill™ | Aumento Peniano com Excelência Médica";
const PAGE_DESCRIPTION =
  "UroFill™: aumento de circunferência peniana com segurança médica e reconhecimento internacional. Agende uma avaliação personalizada com o Dr. Gabriel Veber.";

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
      { rel: "preload", as: "image", href: drGabrielHero, fetchpriority: "high" } as never,
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

/* ---------- Reusable bits ---------- */

function CTA({ children, variant = "blue" }: { children: React.ReactNode; variant?: "blue" | "green" }) {
  return (
    <a href="https://wa.me/5551997157737?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20UroFill%E2%84%A2%20e%20entender%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%20personalizada." target="_blank" rel="noopener noreferrer" className={`btn-cta whitespace-nowrap ${variant === "green" ? "btn-cta-green" : ""}`}>
      <span className="whitespace-nowrap">{children}</span>
      <span className="btn-icon">
        <ArrowUpRight size={16} strokeWidth={2.4} />
      </span>
    </a>
  );
}

function Chip({ children, icon: Icon, emoji }: { children: React.ReactNode; icon?: LucideIcon; emoji?: string }) {
  return (
    <span className="chip">
      {emoji ? (
        <span className="text-base leading-none" aria-hidden="true">{emoji}</span>
      ) : Icon ? (
        <Icon size={14} className="text-[color:var(--brand-light)]" />
      ) : null}
      {children}
    </span>
  );
}

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className="w-full overflow-hidden leading-[0]" style={{ transform: flip ? "rotate(180deg)" : undefined }}>
      <svg viewBox="0 0 1440 80" className="w-full h-[60px] md:h-[80px]" preserveAspectRatio="none">
        <path d="M0,32 C360,96 1080,0 1440,48 L1440,80 L0,80 Z" fill="white" />
      </svg>
    </div>
  );
}

/* ---------- Sections ---------- */

function Hero() {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-8 md:py-16 overflow-hidden h-[860px] md:h-auto flex flex-col items-center">
      <img
        src={heroDesktopBg}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <img
        src={heroTabletBg}
        alt=""
        aria-hidden="true"
        className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <img
        src="https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/i7jSnCDas3YIIdRJAnMZTTlCiDc2/48436b22-7194-4d0f-ab7a-d9223f9dd762.png"
        alt=""
        aria-hidden="true"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />
      

      <div className="relative max-w-[var(--size-max-width)] mx-auto w-full flex-1 flex flex-col">
        <div className="flex items-center gap-4 md:gap-5 flex-nowrap mb-auto">
          <img src={logoGabriel} alt="Dr. Gabriel Veber" className="h-14 md:h-16 w-auto" />
        </div>

        <div className="space-y-5 max-w-2xl md:max-w-3xl lg:max-w-4xl mt-8 md:mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.1] font-semibold">
            UroFill™: <span className="text-[color:var(--brand-light)]">Aumento</span> <br className="hidden lg:block" />
            <span className="text-[color:var(--brand-light)]">Peniano</span> com <br className="hidden lg:block" />
            Excelência Médica e <br className="hidden lg:block" />
            Reconhecimento <br className="hidden lg:block" />
            <span className="text-[color:var(--brand-light)]">Internacional</span>
          </h1>

          <p className="text-[color:var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-xl md:max-w-2xl">
            Recupere sua confiança com o procedimento de preenchimento <br className="hidden lg:block" />
            peniano mais seguro do mundo, realizado pelo Dr. Gabriel Veber, <br className="hidden lg:block" />
            premiado internacionalmente como referência na técnica.
          </p>

          <div>
            <CTA>Quero uma avaliação personalizada</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-white flex justify-center">
      <div className="max-w-[var(--size-max-width)] mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Mosaic */}
        <div className="relative md:min-h-0 order-2 md:order-2">
          <div className="h-[280px] md:h-auto md:absolute md:inset-0 grid grid-cols-2 grid-rows-2 gap-3">
            <div className="rounded-2xl overflow-hidden row-span-2 p-3 md:p-0">
              <img src={surgery1} alt="" className="w-full h-full object-cover rounded-xl md:rounded-none scale-110 md:scale-125" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden p-3 md:p-0">
              <img src={surgery2} alt="" className="w-full h-full object-cover rounded-xl md:rounded-none scale-125 md:scale-100" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden p-3 md:p-0">
              <img src={surgery3} alt="" className="w-full h-full object-cover rounded-xl md:rounded-none scale-125 md:scale-100" loading="lazy" />
            </div>
          </div>
        </div>

        <div className="space-y-5 order-1 md:order-1">
          <Chip>O QUE É O PROCEDIMENTO</Chip>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            O que é o <span className="text-[color:var(--brand-light)]">UroFill™</span> e por que
            ele é referência mundial em aumento peniano
          </h2>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            O UroFill™ é um procedimento de aumento de circunferência peniana realizado em
            consultório, com ácido hialurônico patenteado, anestesia local e resultados naturais.
          </p>
          <p className="text-[color:var(--brand-dark)] leading-relaxed">
            A técnica é executada com{" "}
            <span className="underline decoration-[color:var(--brand-light)] underline-offset-4">
              protocolo internacional, de forma personalizada, segura e indolor.
            </span>
          </p>
          <p className="text-[color:var(--brand-dark)] text-lg leading-relaxed">
            Tempo médio de procedimento de aproximadamente{" "}
            <span className="font-semibold">30 minutos.</span>
          </p>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            O protocolo ideal é definido em avaliação personalizada, conforme o perfil e os
            objetivos de cada paciente.
          </p>
          <div className="pt-2">
            <CTA>Quero uma avaliação personalizada</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Stethoscope, title: "Procedimento em consultório", text: "Realizado em cerca de 30 minutos, sem internação." },
    { icon: Smile, title: "Anestesia local e indolor", text: "Máximo conforto durante todo o procedimento." },
    { icon: BadgeCheck, title: "Ácido hialurônico patenteado", text: "Produto seguro, com chancela internacional." },
    { icon: Heart, title: "Resultados naturais", text: "Estética harmônica, com efeito que pode durar até 18 meses." },
    { icon: Activity, title: "Retorno rápido à rotina", text: "Volta às atividades em poucos dias, com segurança médica." },
  ];
  return (
    <section className="bg-white px-4 md:px-8 lg:px-16 py-8 md:py-12 flex justify-center">
      <div className="max-w-[var(--size-max-width)] mx-auto text-left md:text-center space-y-5">
        <div className="flex justify-start md:justify-center">
          <Chip>CARACTERÍSTICAS DO UROFILL™</Chip>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold max-w-2xl md:mx-auto leading-tight">
          Mais confiança. Mais{" "}
          <span className="text-[color:var(--brand-light)]">segurança, autoestima e resultado.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-10 text-left">
          {items.slice(0, 3).map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-left max-w-4xl mx-auto">
          {items.slice(3).map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>

        <p className="mt-12 text-[color:var(--text-secondary)]">
          Agende sua avaliação personalizada e{" "}
          <span className="text-[color:var(--brand-dark)] font-medium underline decoration-[color:var(--brand-light)] underline-offset-4">
            descubra se o UroFill™ é indicado para você.
          </span>
        </p>
        <div className="flex justify-center pt-4">
          <CTA>Quero uma avaliação personalizada</CTA>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="premium-card px-5 py-4">
      <Icon size={20} strokeWidth={1.5} className="text-[color:var(--brand-light)] mb-3 mt-1" />
      <h4 className="text-[0.95rem] font-semibold text-[color:var(--brand-dark)] mb-1">{title}:</h4>
      <p className="text-[0.82rem] text-[color:var(--text-secondary)] leading-snug">{text}</p>
    </div>
  );
}

function AboutDoctor() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 flex justify-center">
      <div className="max-w-[var(--size-max-width)] mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        <div className="relative md:min-h-0 order-2 md:order-1">
          <div className="md:absolute md:inset-0 rounded-[2rem] overflow-hidden">
            <img src={doctorAbout} alt="" className="w-full h-auto md:h-full object-cover object-top" loading="lazy" />
          </div>
        </div>
        <div className="space-y-5 max-w-xl order-1 md:order-2">
          <Chip>SOBRE O DOUTOR</Chip>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Dr. Gabriel Veber:{" "}
            <span className="text-[color:var(--brand-light)]">Mestre e Visionário</span> em Saúde
            Masculina.
          </h2>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            Urologista formado pela{" "}
            <span className="text-[color:var(--brand-dark)] font-medium">UFRGS</span>, com{" "}
            <span className="text-[color:var(--brand-dark)] font-medium">
              Fellowship em Andrologia
            </span>{" "}
            e títulos de Mestrado, além de membro de sociedades internacionais da especialidade.
          </p>
          <p className="text-[color:var(--text-secondary)] leading-relaxed">
            Sua expertise técnica elevou o UroFill™ a um novo patamar no Brasil, sempre aliando
            rigor científico, atendimento humano e total discrição.
          </p>
          <div className="pt-2">
            <CTA>Quero uma avaliação personalizada</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const items = [
    "Premiado na Gala UroFill no Rio de Janeiro pela excelência em resultados",
    "Centro de Excelência em UroFill™ — selo internacional",
    "Parceria exclusiva com a Perito Urology (EUA), referência mundial em Andrologia",
    "Mestrado em Urologia e formação pela UFRGS",
    "Membro de sociedades internacionais de Urologia e Andrologia",
    "Atuação na Clínica Andrologia Moinhos — Porto Alegre/RS",
  ];
  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 flex justify-center">
      <div className="max-w-[var(--size-max-width)] mx-auto grid md:grid-cols-2 gap-10 items-stretch">
        {/* Photo collage */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 min-h-[420px] md:min-h-0 order-2 md:order-1">
          <div className="space-y-3 row-span-3 flex flex-col">
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf1} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Dr. Gabriel Veber ao lado de referências mundiais em Andrologia em encontro internacional.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf3} alt="" className="w-full h-full object-cover scale-125" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Participação ativa nos principais congressos da especialidade.
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden">
            <img src={doctorCredentials} alt="" className="w-full h-full object-cover scale-125" loading="lazy" />
          </div>
        </div>

        <div className="space-y-5 order-1 md:order-2">
          <Chip>AUTORIDADE E PRÊMIOS</Chip>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Um dos principais nomes da Andrologia mundial
          </h2>
          <p className="text-[0.95rem] text-[color:var(--text-secondary)] leading-snug">
            Único urologista da América do Sul com parceria exclusiva com a Perito Urology (EUA), referência mundial em cirurgia peniana e saúde masculina.
          </p>
          <div className="grid sm:grid-cols-2 gap-3 items-start">
            {items.map((it) => (
              <div key={it} className="premium-card px-4 py-3 flex items-start gap-3">
                <Trophy size={18} strokeWidth={1.5} className="text-[color:var(--brand-light)] mt-1 shrink-0" />
                <p className="text-[0.82rem] text-[color:var(--text-secondary)] leading-snug">{it}</p>
              </div>
            ))}
          </div>
          <div className="pt-2">
            <CTA>Quero uma avaliação personalizada</CTA>
          </div>
        </div>
      </div>

    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "GD", text: "O Dr. Gabriel é um ótimo profissional e, com muita agilidade e excelência, conduziu o processo de consulta - cirurgia - pós operatório. Espero não vê-lo tão cedo hehehe mas se precisar de um urologista, com certeza retornarei." },
    { name: "Sidinei L. Pimentel", text: "Médico sério, responsável, interessado e dedicado aos problemas do seu paciente. Uma ótima pessoa e um excelente profissional." },
    { name: "Jesse Junior", text: "Profissional pontual e muito competente. Foi bastante atencioso durante a consulta, respondendo todas as minhas dúvidas de forma objetiva e esclarecedora. Recomendo muito o Dr. Gabriel." },
  ];

  const [idx, setIdx] = useState(0);
  const max = reviews.length - 1;

  const next = () => setIdx((current) => (current === max ? 0 : current + 1));
  const prev = () => setIdx((current) => (current === 0 ? max : current - 1));

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16 bg-white flex justify-center overflow-hidden">
      <div className="max-w-[var(--size-max-width)] mx-auto text-left md:text-center space-y-4 w-full relative">
        <div className="flex justify-start md:justify-center">
          <Chip>DEPOIMENTOS DE PACIENTES</Chip>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Quem passou pelo UroFill™ fala por nós.
          <br />
          <span className="text-[color:var(--brand-light)]">Veja o que dizem:</span>
        </h2>

        <div className="relative mt-10 md:mt-12 group">
          {/* Desktop/Tablet Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-[color:var(--brand-dark)] hover:text-[color:var(--brand-light)] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Depoimento anterior"
          >
            <Plus size={20} className="rotate-45" /> {/* Using Plus rotated as a simple arrow or could use Chevron if imported */}
          </button>
          
          <button 
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-100 text-[color:var(--brand-dark)] hover:text-[color:var(--brand-light)] transition-all opacity-0 group-hover:opacity-100 hidden md:flex"
            aria-label="Próximo depoimento"
          >
            <ArrowUpRight size={20} />
          </button>

          <div className="overflow-x-auto md:overflow-hidden pb-4 no-scrollbar">
            <div
              className="flex flex-row md:justify-center gap-4 px-1 transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(calc(-${idx} * (min(360px, 85%) + 1rem)))` 
              }}
            >
              {reviews.map((r, i) => (
                <div
                  key={i}
                  className="premium-card p-5 md:p-6 text-left shrink-0 w-[85%] sm:w-[360px] md:w-[360px] space-y-3 md:space-y-4"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold text-[color:var(--brand-dark)] leading-tight">{r.name}</p>
                    <div className="flex">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={14} className="fill-[#F4B400] text-[#F4B400]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-[0.85rem] md:text-sm text-[color:var(--text-secondary)] leading-relaxed">
                    {r.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile/Tablet indicators */}
          <div className="flex justify-center gap-2 mt-4 md:hidden">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all ${idx === i ? "bg-[color:var(--brand-light)] w-4" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>




        <div className="flex justify-start md:justify-center pt-4">
          <CTA>Quero uma avaliação personalizada</CTA>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "O resultado é imediato?", a: "Sim. O efeito de aumento de circunferência é percebido logo após o procedimento, com estabilização nos dias seguintes." },
  { q: "O UroFill™ é seguro?", a: "Sim. Utiliza ácido hialurônico patenteado, é realizado em consultório por urologista especializado e segue protocolo internacional da Perito Urology (EUA)." },
  { q: "O procedimento dói?", a: "Não. É realizado com anestesia local e tem duração média de 30 minutos." },
  { q: "Quanto tempo dura o resultado?", a: "Os resultados podem durar até 18 meses, com possibilidade de manutenção." },
  { q: "Quando posso voltar à rotina?", a: "A maioria dos pacientes retoma as atividades em poucos dias, com orientações específicas do Dr. Gabriel." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 md:px-8 lg:px-16 py-8 md:py-16">
      <div className="max-w-3xl mx-auto text-left md:text-center space-y-4">
        <div className="flex justify-start md:justify-center">
          <Chip>PERGUNTAS FREQUENTES</Chip>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Tire suas <span className="text-[color:var(--brand-light)]">dúvidas</span>
        </h2>
        <p className="text-[0.95rem] text-[color:var(--text-secondary)] leading-snug">
          As respostas para as principais perguntas sobre o UroFill™ e o atendimento com o Dr. Gabriel Veber.
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-4 items-start">
        {FAQ_ITEMS.map((it, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="premium-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(prev => prev === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-black/[0.01] cursor-pointer"
              >
                <span className="text-[0.95rem] font-semibold text-[color:var(--brand-dark)] leading-tight">{it.q}</span>
                <span className="text-[color:var(--brand-light)] shrink-0">
                  {isOpen ? <Minus size={18} strokeWidth={2} /> : <Plus size={18} strokeWidth={2} />}
                </span>
              </button>
              <div 
                className={`grid transition-[grid-template-rows,opacity,padding] duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100 pb-5 px-5" : "grid-rows-[0fr] opacity-0 pb-0 px-5"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[0.85rem] text-[color:var(--text-secondary)] leading-relaxed">
                    {it.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-3xl mx-auto mt-10 flex flex-col items-center text-center gap-3">
        <p className="text-[0.95rem] text-[color:var(--text-secondary)]">
          Ainda com dúvidas? Fale com nosso atendimento exclusivo, discreto e sem compromisso.
        </p>
        <CTA variant="green">Falar no WhatsApp</CTA>
      </div>
    </section>
  );
}


function ContactFooter() {
  return (
    <section className="px-4 md:px-8 lg:px-16 py-4 bg-[color:var(--brand-dark)]">
      <div className="max-w-[var(--size-max-width)] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-3">
          
          <span className="text-xs text-[#ffffff]">
            © {new Date().getFullYear()} Dr. Gabriel Veber — Andrologia Moinhos. <span className="whitespace-nowrap">Todos os direitos reservados.</span>
          </span>
        </div>
        <p className="text-xs text-[#ffffff]">CRM/RQE | Urologia & Andrologia — UroFill™</p>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */

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
