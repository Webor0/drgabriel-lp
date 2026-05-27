import { Star } from "lucide-react";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

const REVIEWS = [
  { name: "GD", text: "O Dr. Gabriel é um ótimo profissional e, com muita agilidade e excelência, conduziu o processo de consulta - cirurgia - pós operatório. Espero não vê-lo tão cedo hehehe mas se precisar de um urologista, com certeza retornarei." },
  { name: "Sidinei L. Pimentel", text: "Médico sério, responsável, interessado e dedicado aos problemas do seu paciente. Uma ótima pessoa e um excelente profissional." },
  { name: "Jesse Junior", text: "Profissional pontual e muito competente. Foi bastante atencioso durante a consulta, respondendo todas as minhas dúvidas de forma objetiva e esclarecedora. Recomendo muito o Dr. Gabriel." },
];

export function Testimonials() {
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
            {REVIEWS.map((r, i) => (
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
