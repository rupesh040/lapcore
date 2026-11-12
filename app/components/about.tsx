import Image from "next/image";
import type { SectionData } from "@/type";
import { FeatureRow, SectionHeading } from "./section-parts";

export function About({ data }: { data: SectionData["About"] }) {
  return (
    <section id={data.id} className="bg-white py-14 lg:py-[91px]">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[.78fr_1fr] lg:gap-[clamp(28px,3.65vw,55px)] xl:grid-cols-[.755fr_1fr] xl:items-start xl:pr-[44px] xl:pl-5">
        <Image data-animate="fade-left" src={data.mainImage} alt={data.imageAlt} width={531} height={537} sizes="(min-width: 1024px) 41vw, 94vw" className="order-last aspect-[531/537] w-full rounded-[3px] object-cover lg:order-first" />
        <div>
          <div data-animate="fade-right" className="xl:pt-1">
            <SectionHeading data={data} titleClass="lg:mt-8 xl:mt-10" descriptionClass="text-navy xl:mt-6" />
          </div>
          <ul className="mt-7 grid gap-5 sm:grid-cols-2 lg:mt-9 xl:mt-[55px] xl:gap-[43px]">
            {data.features.map((feature, i) => (
              <li key={feature.title} data-animate="fade-up" data-delay={`${200 + i * 150}ms`} className="sm:border-l sm:border-line sm:pl-5 sm:first:border-l-0 sm:first:pl-0 xl:pl-[43px]">
                <FeatureRow feature={feature} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
