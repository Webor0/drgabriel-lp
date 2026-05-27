import { Trophy } from "lucide-react";
import conf1 from "@/assets/conf-1.jpg";
import conf3 from "@/assets/conf-3.jpg";
import doctorCredentials from "@/assets/doctor-credentials.jpg";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

const CREDENTIALS_ITEMS = [
  "Premiado na Gala UroFill no Rio de Janeiro pela excelência em resultados",
  "Centro de Excelência em UroFill™ — selo internacional",
  "Parceria exclusiva com a Perito Urology (EUA), referência mundial em Andrologia",
  "Mestrado em Urologia e formação pela UFRGS",
  "Membro de sociedades internacionais de Urologia e Andrologia",
  "Atuação na Clínica Andrologia Moinhos — Porto Alegre/RS",
];

export function Credentials() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        <div className="grid grid-cols-3 grid-rows-3 gap-3 min-h-[420px] md:min-h-0 order-2 md:order-1">
          <div className="space-y-3 row-span-3 flex flex-col">
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf1} alt="Dr. Gabriel Veber com referências mundiais" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Dr. Gabriel Veber ao lado de referências mundiais em Andrologia em encontro internacional.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="rounded-2xl overflow-hidden flex-1">
                <img src={conf3} alt="Congresso de especialidade" className="w-full h-full object-cover scale-125" loading="lazy" />
              </div>
              <p className="text-xs text-black leading-snug px-1">
                Participação ativa nos principais congressos da especialidade.
              </p>
            </div>
          </div>
          <div className="col-span-2 row-span-3 rounded-2xl overflow-hidden">
            <img src={doctorCredentials} alt="Certificações do Dr. Gabriel Veber" className="w-full h-full object-cover scale-125" loading="lazy" />
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
            {CREDENTIALS_ITEMS.map((it) => (
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
