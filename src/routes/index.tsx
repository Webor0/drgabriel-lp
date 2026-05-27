import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutDoctor } from "@/components/sections/AboutDoctor";
import { FAQ } from "@/components/sections/FAQ";
import { ContactFooter } from "@/components/layout/Footer";

// Temporary imports until all sections are extracted
import surgery1 from "@/assets/surgery-1.jpg";
import surgery2 from "@/assets/surgery-2.jpg";
import surgery3 from "@/assets/surgery-3.jpg";
import { Chip } from "@/components/common/Chip";
import { CTA } from "@/components/common/CTA";
import { Section } from "@/components/layout/Section";
import { Stethoscope, Smile, BadgeCheck, Heart, Activity, Trophy, Star, ArrowUpRight, CheckCircle2, Minus, Plus } from "lucide-react";
import conf1 from "@/assets/conf-1.jpg";
import conf3 from "@/assets/conf-3.jpg";
import doctorCredentials from "@/assets/doctor-credentials.jpg";
import { useState } from "react";
import formBg from "@/assets/form-bg.png";

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

function WhatIs() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="relative md:min-h-0 order-2 md:order-2">
          <div className="h-[280px] md:h-auto md:absolute md:inset-0 grid grid-cols-2 grid-rows-2 gap-3">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img src={surgery1} alt="Cirurgia 1" className="w-full h-full object-cover scale-110 md:scale-125" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={surgery2} alt="Cirurgia 2" className="w-full h-full object-cover scale-125 md:scale-100" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={surgery3} alt="Cirurgia 3" className="w-full h-full object-cover scale-125 md:scale-100" loading="lazy" />
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
    </Section>
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

function Features() {
  const items = [
    { icon: Stethoscope, title: "Procedimento em consultório", text: "Realizado em cerca de 30 minutos, sem internação." },
    { icon: Smile, title: "Anestesia local e indolor", text: "Máximo conforto durante todo o procedimento." },
    { icon: BadgeCheck, title: "Ácido hialurônico patenteado", text: "Produto seguro, com chancela internacional." },
    { icon: Heart, title: "Resultados naturais", text: "Estética harmônica, com efeito que pode durar até 18 meses." },
    { icon: Activity, title: "Retorno rápido à rotina", text: "Volta às atividades em poucos dias, com segurança médica." },
  ];
  return (
    <Section className="bg-white py-8 md:py-12">
      <div className="text-left md:text-center space-y-5">
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
    </Section>
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
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 min-h-[420px] md:min-h-0 order-2 md:order-1">
          <div className="space-y-3 row-span-3 flex flex-col">
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf1} alt="Congresso 1" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Dr. Gabriel Veber ao lado de referências mundiais em Andrologia em encontro internacional.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf3} alt="Congresso 2" className="w-full h-full object-cover scale-125" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Participação ativa nos principais congressos da especialidade.
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden">
            <img src={doctorCredentials} alt="Credenciais" className="w-full h-full object-cover scale-125" loading="lazy" />
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
    </Section>
  );
}

function Testimonials() {
  const reviews = [
    { name: "GD", text: "O Dr. Gabriel é um ótimo profissional e, com muita agilidade e excelência, conduziu o processo de consulta - cirurgia - pós operatório. Espero não vê-lo tão cedo hehehe mas se precisar de um urologista, com certeza retornarei." },
    { name: "Sidinei L. Pimentel", text: "Médico sério, responsável, interessado e dedicado aos problemas do seu paciente. Uma ótima pessoa e um excelente profissional." },
    { name: "Jesse Junior", text: "Profissional pontual e muito competente. Foi bastante atencioso durante a consulta, respondendo todas as minhas dúvidas de forma objetiva e esclarecedora. Recomendo muito o Dr. Gabriel." },
  ];

  return (
    <Section className="bg-white">
      <div className="text-left md:text-center space-y-4">
        <div className="flex justify-start md:justify-center">
          <Chip>DEPOIMENTOS DE PACIENTES</Chip>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
          Quem passou pelo UroFill™ fala por nós.
          <br />
          <span className="text-[color:var(--brand-light)]">Veja o que dizem:</span>
        </h2>

        <div className="mt-10 md:mt-12">
          <div className="flex flex-col md:flex-row gap-4 md:justify-center">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="premium-card p-5 md:p-6 text-left shrink-0 w-full md:w-[360px] space-y-3 md:space-y-4"
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

        <div className="flex justify-start md:justify-center pt-4">
          <CTA>Quero uma avaliação personalizada</CTA>
        </div>
      </div>
    </Section>
  );
}

function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [knows, setKnows] = useState<"sim" | "nao" | "">("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const formatPhone = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d.length ? `(${d}` : "";
    if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || name.length > 100) return setError("Informe seu nome (até 100 caracteres).");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setError("E-mail inválido.");
    const digits = whatsapp.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 11) return setError("WhatsApp inválido. Use DDD + número.");
    if (!knows) return setError("Responda se já conhece a técnica UroFill.");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative px-4 md:px-8 lg:px-16 py-8 md:py-16 scroll-mt-8 overflow-hidden flex justify-center">
      <img
        src={formBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none select-none"
      />
      <div className="relative max-w-5xl mx-auto w-full">
        <div className="text-left md:text-center space-y-4 mb-10">
          <div className="flex justify-start md:justify-center">
            <Chip>FALE COM O DR. GABRIEL</Chip>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Agende sua{" "}
            <span className="text-[color:var(--brand-light)]">avaliação personalizada</span>
          </h2>
          <p className="text-[color:var(--text-secondary)]">
            Preencha o formulário e nossa equipe entrará em contato com total discrição.
          </p>
        </div>

        {submitted ? (
          <div className="premium-card p-8 text-center space-y-3">
            <CheckCircle2 className="mx-auto text-[color:var(--brand-light)]" size={40} />
            <h3 className="text-xl font-semibold text-[color:var(--brand-dark)]">Recebemos seu contato!</h3>
            <p className="text-[color:var(--text-secondary)] text-sm">
              Em breve nossa equipe falará com você pelo WhatsApp informado.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="premium-card px-5 py-4 md:px-6 md:py-5 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="lf-name" className="text-sm font-medium text-[color:var(--brand-dark)]">Nome completo</label>
                <input
                  id="lf-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="premium-card w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-light)]/40 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lf-email" className="text-sm font-medium text-[color:var(--brand-dark)]">E-mail</label>
                <input
                  id="lf-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="premium-card w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-light)]/40 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="lf-wpp" className="text-sm font-medium text-[color:var(--brand-dark)]">WhatsApp</label>
                <input
                  id="lf-wpp"
                  type="tel"
                  inputMode="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(formatPhone(e.target.value))}
                  required
                  className="premium-card w-full px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[color:var(--brand-light)]/40 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-[color:var(--brand-dark)]">Já conhece a técnica UroFill™?</p>
                <div className="flex gap-3">
                  {(["sim", "nao"] as const).map((opt) => (
                    <label
                      key={opt}
                      className={`premium-card flex-1 cursor-pointer px-4 py-3 text-sm text-center transition-all ${
                        knows === opt
                          ? "ring-2 ring-[color:var(--brand-light)] text-[color:var(--brand-dark)] font-medium"
                          : "text-[color:var(--text-secondary)]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="knows-urofill"
                        value={opt}
                        checked={knows === opt}
                        onChange={() => setKnows(opt)}
                        className="sr-only"
                      />
                      {opt === "sim" ? "Sim" : "Não"}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button type="submit" className="btn-cta w-full justify-center whitespace-nowrap text-[0.8rem] sm:text-[0.95rem] !px-3 sm:!px-6">
              <span className="whitespace-nowrap">Quero minha avaliação personalizada</span>
              <span className="btn-icon">
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
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
      <LeadForm />
      <FAQ />
      <ContactFooter />
    </main>
  );
}
