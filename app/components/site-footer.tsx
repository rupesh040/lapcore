import Image from "next/image";
import { contactLink } from "@/contact-link";
import type { BusinessContact, SectionData } from "@/type";
import { Icon } from "./icons";

function FooterTitle({ children }: { children: string }) {
  return (
    <h2 className="mb-5 text-[21px] font-bold after:mt-2 after:block after:h-[2px] after:w-[51px] after:bg-accent">
      {children}
    </h2>
  );
}

export function SiteFooter({ data, contact }: { data: SectionData["Footer"]; contact: BusinessContact }) {
  return (
    <footer className="bg-[#031b2d] text-white">
      <div className="mx-auto w-full max-w-[1440px] px-5 pt-13 pb-9 sm:px-8 sm:pt-[75px] sm:pb-[49px] xl:px-[clamp(44px,3.8vw,56px)]">
        <div className="grid gap-x-8 gap-y-10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.44fr_0.82fr_1.27fr_auto] lg:gap-0 lg:pb-[51px]">
          <div data-animate="fade-up" className="lg:pr-7">
            <a href={data.logoHref} className="block w-full max-w-[370px]">
              <Image src={data.logo} alt={data.logoAlt} width={370} height={80} className="h-auto w-full" />
            </a>
            <p className="mt-5 max-w-[365px] text-[16px] leading-[1.5] sm:text-[17px]">{data.description}</p>
          </div>
          <div data-animate="fade-up" data-delay="150ms" className="lg:border-l lg:border-white/25 lg:px-[clamp(20px,3.4vw,49px)]">
            <FooterTitle>{data.quickLinksTitle}</FooterTitle>
            <ul className="grid gap-1.5 text-[16px]">
              {data.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-accent">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div data-animate="fade-up" data-delay="300ms" className="lg:border-l lg:border-white/25 lg:px-[clamp(20px,3.5vw,49px)]">
            <FooterTitle>{data.contactTitle}</FooterTitle>
            <ul className="grid gap-4 text-[15px] xl:text-[16px]">
              <li>
                <a href={contactLink(contact, "phone")} className="flex items-center gap-3.5 hover:text-accent">
                  <Icon name="Phone" className="size-5 shrink-0 text-accent" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contactLink(contact, "email")} className="flex items-center gap-3.5 hover:text-accent">
                  <Icon name="Mail" className="size-5 shrink-0 text-accent" />
                  <span className="wrap-anywhere">{contact.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Icon name="Pin" className="size-5 shrink-0 text-accent" />
                {contact.address}
              </li>
            </ul>
          </div>
          <div data-animate="fade-up" data-delay="450ms" className="lg:border-l lg:border-white/25 lg:pl-[clamp(20px,3.4vw,49px)]">
            <FooterTitle>{data.socialTitle}</FooterTitle>
            <ul className="flex flex-wrap gap-2.5">
              {data.social.map(({ name, icon }) => (
                <li key={name} title={name} className="grid size-[37px] place-items-center rounded-lg border border-white/35">
                  <span className="sr-only">{name}</span>
                  <Icon name={icon} className="size-[19px]" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p data-animate="fade-up" data-delay="500ms" className="border-t border-white/65 pt-6 text-center text-[15px] sm:pt-7 sm:text-[18px]">{data.bottomBar.copyright}</p>
      </div>
    </footer>
  );
}
