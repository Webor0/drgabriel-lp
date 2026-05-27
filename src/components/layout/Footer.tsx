export function ContactFooter() {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-4 bg-[color:var(--brand-dark)] text-white">
      <div className="max-w-[var(--size-max-width)] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <div className="flex items-center gap-3">
          <span className="text-xs">
            © {new Date().getFullYear()} Dr. Gabriel Veber — Andrologia Moinhos. <span className="whitespace-nowrap">Todos os direitos reservados.</span>
          </span>
        </div>
        <p className="text-xs">CRM/RQE | Urologia & Andrologia — UroFill™</p>
      </div>
    </footer>
  );
}
