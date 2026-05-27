import heroDesktopBg from "@/assets/hero-desktop-bg.png";
import logoGabriel from "@/assets/logo-gabriel-veber.png";
import { CTA } from "../common/CTA";

export function Hero() {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 py-8 md:py-16 overflow-hidden h-[830px] md:h-auto flex flex-col items-center">
      <img
        src={heroDesktopBg}
        alt="Background Hero Desktop"
        aria-hidden="true"
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      <img
        src="https://qtbkvshbmqlszncxlcuc.supabase.co/storage/v1/object/public/dsl-uploads/i7jSnCDas3YIIdRJAnMZTTlCiDc2/48436b22-7194-4d0f-ab7a-d9223f9dd762.png"
        alt="Background Hero Mobile"
        aria-hidden="true"
        className="md:hidden absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none"
      />

      <div className="relative max-w-[var(--size-max-width)] mx-auto w-full flex-1 flex flex-col">
        <header className="flex items-center gap-4 md:gap-5 flex-nowrap mb-auto">
          <img src={logoGabriel} alt="Dr. Gabriel Veber Logo" className="h-14 md:h-16 w-auto" />
        </header>

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
