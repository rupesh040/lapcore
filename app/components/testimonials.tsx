import type { SectionData } from "@/type";
import { TestimonialCarousel } from "./interactive";
import { SectionHeading } from "./section-parts";

export function Testimonials({ data }: { data: SectionData["Testimonial"] }) {
  return (
    <section id={data.id} className="bg-linear-to-b from-white to-[#fcfdfe] py-10 lg:pb-[69px]">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[34px]">
        <div data-animate="fade-up">
          <SectionHeading data={data} align="center" descriptionClass="mx-auto max-w-[935px]" />
        </div>
        <div data-animate="blur-in" data-delay="300ms" className="mt-8 lg:mt-[48px]">
          <TestimonialCarousel items={data.items} carouselLabels={data.carouselLabels} />
        </div>
      </div>
    </section>
  );
}
