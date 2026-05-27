import doctorAbout from "@/assets/doctor-about.jpg";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

export function AboutDoctor() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="relative md:min-h-0 order-2 md:order-1">
          <div className="md:absolute md:inset-0 rounded-[2rem] overflow-hidden">
            <img 
              src={doctorAbout} 
              alt="Dr. Gabriel Veber" 
              className="w-full h-auto md:h-full object-cover object-top" 
              loading="lazy" 
            />
          </div>
        </div>
        <div className="space-y-5 max-w-xl order-1 md:order-2">
          <Chip>SOBRE O DOUTOR</Chip>
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Dr. Gabriel Veber:{" "}
            <span className="text-[color:var(--brand-light)]">Mestre e Visionário</span> em Saúde Masculina.
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
    </Section>
  );
}
