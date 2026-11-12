import type { SectionData } from "@/type";
import { Icon } from "./icons";

export const sectionContainer = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 xl:px-[clamp(40px,3.15vw,48px)]";

type HeadingData = Pick<SectionData["About"], "cursiveText" | "headingPart1" | "headingPart2" | "description">;

function Eyebrow({ children, align = "left" }: { children: string; align?: "left" | "center" | "badge" }) {
  const line = <span aria-hidden="true" className="h-[2px] w-9 shrink-0 bg-brand/85 sm:w-12" />;

  return (
    <div className={`inline-flex items-center gap-2.5 font-bold uppercase ${align === "badge" ? "rounded-md border border-[#becde1] bg-white/35 px-3.5 py-2 text-xs text-[#0c2945] sm:text-sm" : "text-sm tracking-[.035em] text-brand-dark sm:gap-3 sm:text-[19px]"}`}>
      {align === "center" && line}
      <Icon name="Settings" className={align === "badge" ? "size-[17px] text-brand" : "size-5 text-brand sm:size-[25px]"} />
      <span>{children}</span>
      {align !== "badge" && line}
    </div>
  );
}

export function SectionHeading({
  data,
  align = "left",
  titleClass = "",
  descriptionClass = "",
}: {
  data: HeadingData;
  align?: "left" | "center" | "badge";
  titleClass?: string;
  descriptionClass?: string;
}) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <Eyebrow align={align}>{data.cursiveText}</Eyebrow>
      <h2 className={`mt-4 text-[clamp(2rem,4.05vw,3.5rem)] font-extrabold leading-[1.085] tracking-[-.041em] lg:mt-5 ${titleClass}`}>
        {data.headingPart1} <span className="text-brand">{data.headingPart2}</span>
      </h2>
      <p className={`mt-4 text-[clamp(1rem,1.52vw,1.3rem)] leading-[1.48] text-muted lg:mt-5 ${descriptionClass}`}>
        {data.description}
      </p>
    </div>
  );
}

type Feature = SectionData["Services"]["items"][number];

export function FeatureRow({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-3.5 xl:gap-[21px]">
      <span className="grid size-[58px] shrink-0 place-items-center rounded-[13px] bg-[#e2eefb] text-brand-dark xl:size-[77px]">
        <Icon name={feature.icon} className="size-9 xl:size-[46px]" />
      </span>
      <div className="pt-0.5">
        <h3 className="text-[17px] font-extrabold leading-tight tracking-[-.025em] xl:text-[21px]">{feature.title}</h3>
        <p className="mt-1 text-[14px] leading-[1.42] text-muted xl:text-[17px]">{feature.description}</p>
      </div>
    </div>
  );
}
