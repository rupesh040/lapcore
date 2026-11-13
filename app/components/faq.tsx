import Image from "next/image";
import type { SectionData } from "@/type";
import { FaqAccordion } from "./interactive";
import { SectionHeading } from "./section-parts";

export function FAQ({ data }: { data: SectionData["FAQ"] }) {
  return (
    <section id={data.id} className="bg-white py-10">
      <div className="mx-auto grid w-full max-w-[1440px] items-start gap-8 px-5 sm:px-8 lg:grid-cols-[.63fr_1fr] lg:grid-rows-[auto_1fr] lg:gap-x-[clamp(30px,3vw,46px)] lg:gap-y-0 xl:pr-8 xl:pl-[26px]">
        <div data-animate="fade-left" className="xl:pl-4">
          <SectionHeading data={data} titleClass="xl:text-[53px]" />
        </div>
        <div data-animate="fade-up" data-delay="200ms" className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-[14px]">
          <FaqAccordion items={data.items} />
        </div>
        <Image data-animate="fade-left" data-delay="350ms" src={data.image} alt={data.imageAlt} width={483} height={305} sizes="(min-width: 1024px) 38vw, 94vw" className="aspect-[483/305] w-full object-cover lg:mt-6 xl:mt-8" />
      </div>
    </section>
  );
}
