import Image from "next/image";
import type { SectionData } from "@/type";
import { Icon } from "./icons";
import { sectionContainer } from "./section-parts";

export function Hero({ data }: { data: SectionData["Banner"] }) {
  return (
    <section id={data.id} data-hero="" className="relative isolate flex min-h-[535px] scroll-mt-40 items-center overflow-hidden bg-deep text-white lg:min-h-[551px]">
      <Image src={data.banners[0]} alt="" fill sizes="100vw" preload className="-z-20 object-cover object-[73%_center] lg:object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-[#061522]/95 via-[#061522]/65 to-[#061522]/30 lg:from-[#061522]/15 lg:via-transparent lg:to-transparent" />
      <div className={`${sectionContainer} py-13 sm:py-16 xl:px-[clamp(46px,3.4vw,52px)]`}>
        <p data-animate="fade-left" data-delay="200ms" className="mb-5 inline-flex items-center gap-2.5 border border-white/30 bg-navy/25 px-3.5 py-2 text-[13px] font-medium sm:px-5 sm:text-[16px]">
          <Icon name="LaptopRepair" className="size-5 shrink-0 text-accent sm:size-6" />
          <span><strong className="font-extrabold text-accent">{data.brand}</strong> {data.cursiveText}</span>
        </p>
        <h1 data-animate="fade-up" data-delay="400ms" className="max-w-[810px] text-[clamp(1.95rem,8.4vw,2.6rem)] font-extrabold leading-[.98] tracking-[-.033em] text-[#edf5ff] sm:text-[clamp(2.6rem,5.25vw,3.72rem)] sm:whitespace-pre-line">
          <span className="block text-balance sm:text-wrap">{data.heading}</span>{" "}
          <span className="block text-balance text-accent sm:text-wrap">{data.headingPart2}</span>
        </h1>
        <ul data-animate="fade-up" data-delay="600ms" className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 text-[13px] font-semibold sm:mt-8 sm:text-[14px] lg:gap-x-0">
          {data.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2.5 lg:border-l lg:border-white/60 lg:px-6 lg:first:border-0 lg:first:pl-0">
              <Icon name="Check" className="size-5 shrink-0 text-accent" />
              {feature}
            </li>
          ))}
        </ul>
        <a data-animate="fade-up" data-delay="800ms" href={data.buttonHref} className="mt-8 inline-flex min-h-12 items-center gap-2.5 border border-white bg-navy/25 px-4 text-[10px] font-extrabold tracking-[.2em] uppercase transition-[background-color,color,translate] hover:bg-white hover:text-deep motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 sm:mt-9 sm:px-7 sm:text-[12px] sm:tracking-[.28em]">
          <Icon name="ArrowRight" className="size-5 shrink-0 sm:size-6" />
          {data.buttonText}
        </a>
      </div>
    </section>
  );
}
