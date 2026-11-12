import { contactLink } from "@/contact-link";
import type { BusinessContact, SectionData } from "@/type";
import { Icon } from "./icons";

export function Topbar({ data, contact }: { data: SectionData["Topbar"]; contact: BusinessContact }) {
  return (
    <div className="bg-[#edf2f7] text-navy motion-safe:animate-fade-down">
      <div className="mx-auto flex min-h-[45px] w-full max-w-[1440px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-2 text-xs font-medium sm:justify-between sm:px-8 sm:text-[13px] xl:px-[clamp(44px,3.8vw,56px)] xl:text-[15px]">
        <p className="flex items-center gap-2.5">
          <Icon name="Pin" className="size-4 shrink-0 text-[#062650] sm:size-[18px]" />
          <span className="text-balance">{data.locationLabel} {contact.address}</span>
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:gap-x-6">
          <a href={contactLink(contact, "email")} className="flex items-center gap-2 hover:text-brand sm:gap-2.5">
            <Icon name="Mail" className="size-3.5 text-[#062650] sm:size-[18px]" />
            {contact.email}
          </a>
          <a href={contactLink(contact, "phone")} className="flex items-center gap-2 border-l border-[#29415d]/70 pl-4 font-bold hover:text-brand sm:gap-2.5 sm:pl-6">
            <Icon name="Phone" className="size-3.5 text-[#062650] sm:size-[17px]" />
            {contact.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
