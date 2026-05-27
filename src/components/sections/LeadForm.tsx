import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import formBg from "@/assets/form-bg.png";
import { Chip } from "../common/Chip";

export function LeadForm() {
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
        alt="Background Form"
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
