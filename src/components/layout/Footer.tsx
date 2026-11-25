import { Logo } from "@/components/ui/Logo";
import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
            A five-founder technology company building websites, apps and digital solutions.
          </p>
        </div>
        <ul className="grid content-start gap-3 text-[13px]">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="grid content-start gap-3 text-[13px] text-muted">
          <li>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-ink">
              {site.email}
            </a>
          </li>
          <li>
            <a href={site.whatsappUrl()} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              WhatsApp {site.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-[11px] text-muted sm:px-8">
          © {new Date().getFullYear()} AVAPSTER Technologies. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
