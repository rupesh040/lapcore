import Image from "next/image";
import { contactLink } from "@/contact-link";
import type { BusinessContact, SectionData } from "@/type";
import { Icon } from "./icons";
import { RepairForm } from "./interactive";
import { SectionHeading, sectionContainer } from "./section-parts";

export function Contact({
  data,
  contact,
  serviceOptions,
}: {
  data: SectionData["Contact"];
  contact: BusinessContact;
  serviceOptions: string[];
}) {
  const emailHref = contactLink(contact, "email");
  const form = {
    ...data.form,
    fields: data.form.fields.map((field) =>
      field.name === "service" ? { ...field, options: serviceOptions } : field
    ),
  };

  return (
    <section id={data.id} className="relative isolate overflow-hidden bg-[#f1f5fb] py-14 lg:min-h-[846px] lg:bg-linear-to-b lg:from-[#d4deed] lg:via-[#ebf1f9] lg:to-[#f5f8fd] lg:py-[70px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[510px] lg:inset-y-0 lg:right-auto lg:left-0 lg:h-full lg:w-1/2">
        <Image src={data.backgroundImage} alt="" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover object-[center_43%] lg:object-[right_center]" />
        <div className="absolute inset-0 bg-linear-to-b from-white/60 via-white/10 to-[#f1f5fb] lg:hidden" />
      </div>
      <div className={`${sectionContainer} grid gap-8 lg:grid-cols-[.9fr_1fr] lg:gap-[clamp(30px,3vw,42px)] xl:px-[clamp(44px,3.8vw,56px)]`}>
        <div className="flex min-w-0 flex-col">
          <div data-animate="fade-left">
            <SectionHeading data={data} align="badge" titleClass="text-[#0a253c] lg:mt-7 xl:text-[51px]" descriptionClass="max-w-[520px] text-[#17334e] xl:mt-5 xl:text-[18px]" />
          </div>
          <ul className="mt-[142px] grid gap-3 sm:mt-[120px] sm:grid-cols-2 lg:mt-auto lg:grid-cols-1 lg:gap-5 lg:pt-[190px] lg:pb-[26px]">
            {data.infoCards.map(({ icon, method, title }, i) => (
              <li key={method} data-animate="fade-up" data-delay={`${300 + i * 150}ms`} className="flex items-center gap-3 rounded-[17px] border border-[#d1deee] bg-[#f8faff]/80 px-3 py-3 sm:px-4 xl:gap-5 xl:px-5 xl:py-[17px]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white xl:size-[55px]">
                  <Icon name={icon} className="size-[23px] xl:size-[27px]" />
                </span>
                <div className="min-w-0 border-l border-[#a4b4ca] pl-3 xl:pl-5">
                  <h3 className="text-[13px] leading-tight font-extrabold sm:text-[15px] xl:text-[17px]">{title}</h3>
                  <a href={contactLink(contact, method)} className="mt-1 block wrap-anywhere text-[13px] leading-tight text-[#1f3852] hover:text-brand hover:underline xl:text-[clamp(.85rem,1.2vw,1rem)]">
                    {contact[method]}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div data-animate="fade-right" data-delay="200ms">
          <RepairForm form={form} emailHref={emailHref} />
        </div>
      </div>
    </section>
  );
}
