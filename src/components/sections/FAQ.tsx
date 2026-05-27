import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { Chip } from "../common/Chip";
import { CTA } from "../common/CTA";
import { Section } from "../layout/Section";

const FAQ_ITEMS = [
  { q: "O resultado é imediato?", a: "Sim. O efeito de aumento de circunferência é percebido logo após o procedimento, com estabilização nos dias seguintes." },
  { q: "O UroFill™ é seguro?", a: "Sim. Utiliza ácido hialurônico patenteado, é realizado em consultório por urologista especializado e segue protocolo internacional da Perito Urology (EUA)." },
  { q: "O procedimento dói?", a: "Não. É realizado com anestesia local e tem duração média de 30 minutos." },
  { q: "Quanto tempo dura o resultado?", a: "Os resultados podem durar até 18 meses, com possibilidade de manutenção." },
  { q: "Quando posso voltar à rotina?", a: "A maioria dos pacientes retoma as atividades em poucos dias, com orientações específicas do Dr. Gabriel." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section>
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

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-3 items-start text-left">
        {FAQ_ITEMS.map((it, i) => {
          const isOpen = open === i;
          return (
            <div key={it.q} className="premium-card px-5 py-4">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-start md:justify-between gap-3 md:gap-4 text-left cursor-pointer"
              >
                <span className="text-[color:var(--brand-light)] shrink-0 order-first md:order-last">
                  {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                </span>
                <span className="text-[0.95rem] font-semibold text-[color:var(--brand-dark)]">{it.q}</span>
              </button>
              {isOpen && (
                <p className="mt-2 text-[0.82rem] text-[color:var(--text-secondary)] leading-snug">
                  {it.a}
                </p>
              )}
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
    </Section>
  );
}
