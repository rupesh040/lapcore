import Image from "next/image";
import type { SectionData } from "@/type";
import { Icon } from "./icons";
import { MobileNavigation } from "./mobile-navigation";

export function Navbar({ data }: { data: SectionData["Header"] }) {
  return (
    <header className="relative z-10 bg-white motion-safe:animate-fade-down motion-safe:[animation-delay:150ms]">
      <div className="mx-auto flex min-h-[76px] w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-2.5 sm:px-8 lg:min-h-[94px] xl:gap-8 xl:px-[clamp(44px,3.8vw,56px)]">
        <a href={data.logoHref} className="shrink-0">
          <Image src={data.logo} alt={data.logoAlt} width={304} height={63} preload className="h-auto w-[205px] sm:w-[250px] lg:w-[235px] xl:w-[304px]" />
        </a>
        <nav aria-label={data.navigationLabel} className="hidden lg:block">
          <ul className="flex items-center gap-[clamp(14px,2.25vw,36px)] whitespace-nowrap text-[14px] font-semibold xl:text-[15px]">
            {data.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative inline-flex py-4 transition-colors hover:text-brand after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-brand after:transition-opacity ${link.active ? "text-brand" : "after:opacity-0 hover:after:opacity-100 focus-visible:after:opacity-100"}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href={data.buttonHref} className="hidden shrink-0 items-center justify-center gap-3.5 rounded-[9px] bg-[#0452a9] px-5 py-[14px] text-[15px] font-semibold text-white transition-colors hover:bg-brand-dark lg:inline-flex xl:min-w-[188px]">
          <Icon name="Phone" className="size-[19px]" />
          {data.button}
        </a>
        <MobileNavigation data={data} />
      </div>
    </header>
  );
}
