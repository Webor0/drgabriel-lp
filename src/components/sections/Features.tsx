import { Stethoscope, Smile, BadgeCheck, Heart, Activity } from "lucide-react";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

interface FeatureCardProps {
  icon: any;
  title: string;
  text: string;
}

function FeatureCard({ icon: Icon, title, text }: FeatureCardProps) {
  return (
    <div className="premium-card px-5 py-4">
      <Icon size={20} strokeWidth={1.5} className="text-[color:var(--brand-light)] mb-3 mt-1" />
      <h4 className="text-[0.95rem] font-semibold text-[color:var(--brand-dark)] mb-1">{title}:</h4>
      <p className="text-[0.82rem] text-[color:var(--text-secondary)] leading-snug">{text}</p>
    </div>
  );
}

const FEATURES = [
  { icon: Stethoscope, title: "Procedimento em consultório", text: "Realizado em cerca de 30 minutos, sem internação." },
  { icon: Smile, title: "Anestesia local e indolor", text: "Máximo conforto durante todo o procedimento." },
  { icon: BadgeCheck, title: "Ácido hialurônico patenteado", text: "Produto seguro, com chancela internacional." },
  { icon: Heart, title: "Resultados naturais", text: "Estética harmônica, com efeito que pode durar até 18 meses." },
  { icon: Activity, title: "Retorno rápido à rotina", text: "Volta às atividades em poucos dias, com segurança médica." },
];

export function Features() {
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
          {FEATURES.slice(0, 3).map((it) => (
            <FeatureCard key={it.title} {...it} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-left max-w-4xl mx-auto">
          {FEATURES.slice(3).map((it) => (
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
