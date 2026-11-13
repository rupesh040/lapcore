import Image from "next/image";
import type { SectionData } from "@/type";
import { FeatureRow, SectionHeading } from "./section-parts";

export function WhyChooseUs({ data }: { data: SectionData["WhyChooseUs"] }) {
  return (
    <section id={data.id} className="bg-white py-10">
      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-6 xl:pr-[23px] xl:pl-[clamp(42px,4vw,58px)]">
        <div className="min-w-0">
          <div data-animate="fade-left">
            <SectionHeading data={data} titleClass="xl:text-[52px]" descriptionClass="max-w-[605px] xl:mt-6" />
          </div>
          <ul className="mt-7 grid gap-x-4 gap-y-5 sm:grid-cols-2 lg:mt-9 xl:mt-[43px] xl:gap-x-5 xl:gap-y-6">
            {data.features.map((feature, index) => (
              <li key={feature.title} data-animate="fade-up" data-delay={`${200 + index * 130}ms`} className={`sm:even:border-l sm:even:border-line sm:even:pl-4 xl:even:pl-5 ${index >= 2 ? "sm:pt-2 xl:pt-[17px]" : ""}`}>
                <FeatureRow feature={feature} />
              </li>
            ))}
          </ul>
        </div>
        <Image data-animate="fade-right" data-delay="200ms" src={data.image1} alt={data.imageAlt} width={614} height={551} sizes="(min-width: 1024px) 46vw, 94vw" className="aspect-[614/551] w-full rounded-[4px] object-cover" />
      </div>
    </section>
  );
}
