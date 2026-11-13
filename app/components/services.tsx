import type { SectionData } from "@/type";
import { Icon } from "./icons";
import { SectionHeading, sectionContainer } from "./section-parts";

export function Services({ data }: { data: SectionData["Services"] }) {
  return (
    <section id={data.id} className="bg-linear-to-br from-white via-[#fcfdfe] to-[#f4f8fc] py-12 lg:pb-9">
      <div className={sectionContainer}>
        <div data-animate="fade-up">
          <SectionHeading data={data} align="center" titleClass="lg:text-[clamp(2.3rem,3.7vw,3.25rem)]" descriptionClass="mx-auto max-w-[735px] lg:mt-3.5" />
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-3 min-[360px]:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {data.items.map((service, i) => (
            <li key={service.title} data-animate="scale-in" data-delay={`${150 + i * 120}ms`} className="flex min-h-[155px] flex-col items-center rounded-xl border border-[#d6dfe9] bg-white/50 px-3 py-10 text-center transition-[border-color,box-shadow,translate] duration-300 hover:border-brand/30 hover:shadow-md motion-safe:hover:-translate-y-1 sm:px-4 lg:min-h-[190px] xl:min-h-[199px]">
              <span className="grid h-[59px] w-[78px] place-items-center rounded-[13px] bg-[#e1eefc] text-brand-dark xl:h-[68px] xl:w-[96px]">
                <Icon name={service.icon} className="size-10 xl:size-[50px]" />
              </span>
              <h3 className="mt-3 text-[16px] font-extrabold leading-tight tracking-[-.025em] xl:text-[22px] ">{service.title}</h3>
              <p className="mt-1.5 max-w-[275px] text-[14px] leading-[1.4] text-muted xl:text-[17px]">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
