import surgery1 from "@/assets/surgery-1.jpg";
import surgery2 from "@/assets/surgery-2.jpg";
import surgery3 from "@/assets/surgery-3.jpg";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

export function WhatIs() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="relative md:min-h-0 order-2 md:order-2">
          <div className="h-[280px] md:h-auto md:absolute md:inset-0 grid grid-cols-2 grid-rows-2 gap-3">
            <div className="rounded-2xl overflow-hidden row-span-2">
              <img src={surgery1} alt="Cirurgia Urológica" className="w-full h-full object-cover scale-110 md:scale-125" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={surgery2} alt="Procedimento UroFill" className="w-full h-full object-cover scale-125 md:scale-100" loading="lazy" />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={surgery3} alt="Sala de Procedimento" className="w-full h-full object-cover scale-125 md:scale-100" loading="lazy" />
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
