"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import type { SectionData } from "@/type";
import { Icon } from "./icons";

type Testimonial = SectionData["Testimonial"]["items"][number];
type RepairFormData = SectionData["Contact"]["form"];

function formatLabel(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (token, key: string) => String(values[key] ?? token));
}

function Chevron({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

function Star({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 1.8 3.13 6.34 7 .99-5.07 4.94 1.2 6.98L12 17.75l-6.26 3.3 1.2-6.98-5.07-4.94 7-.99L12 1.8Z" />
    </svg>
  );
}

function Rating({ value, label }: { value: number; label: string }) {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;

  return (
    <span className="flex shrink-0 items-center gap-1 text-brand" role="img" aria-label={formatLabel(label, { rating: value })}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="relative block">
          <Star className={index < fullStars ? "size-5 xl:size-6" : "size-5 text-slate-300 xl:size-6"} />
          {hasHalfStar && index === fullStars && (
            <span className="absolute inset-y-0 left-0 w-1/2 overflow-hidden">
              <Star className="size-5 max-w-none xl:size-6" />
            </span>
          )}
        </span>
      ))}
    </span>
  );
}

function TestimonialCard({ item, ratingLabel, className }: { item: Testimonial; ratingLabel: string; className?: string }) {
  return (
    <figure className={`min-h-[300px] flex-col rounded-[18px] border border-line bg-white px-6 py-6 shadow-[0_12px_36px_rgba(15,52,94,0.06)] sm:px-8 xl:min-h-[335px] xl:px-10 xl:py-7 ${className ?? "flex"}`}>
      <svg aria-hidden="true" className="mb-3 h-7 w-11 shrink-0 text-brand" viewBox="0 0 44 30" fill="currentColor">
        <path d="M16.2 1C5.9 2.2.9 9.8.9 21.3c0 5.3 2.2 7.7 6.1 7.7h5.6c3 0 4.7-1.6 4.7-4.7v-6.4c0-3.1-1.6-4.7-4.7-4.7H9.1c.8-4.2 3.5-7.2 7.1-8.9V1Zm25 0C30.9 2.2 25.9 9.8 25.9 21.3c0 5.3 2.2 7.7 6.1 7.7h5.6c3 0 4.7-1.6 4.7-4.7v-6.4c0-3.1-1.6-4.7-4.7-4.7h-3.5c.8-4.2 3.5-7.2 7.1-8.9V1Z" />
      </svg>
      <blockquote className="grow text-[clamp(1rem,1.65vw,1.4rem)] leading-[1.36] text-navy">
        <p>{item.quote}</p>
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 xl:mt-7">
        <div className="flex min-w-0 items-center gap-4">
          <Image src={item.image} width={96} height={96} alt="" className="size-16 shrink-0 rounded-full object-cover xl:size-23" />
          <div className="min-w-0 border-l border-line pl-4 xl:pl-5">
            <p className="text-xl font-bold leading-tight text-navy xl:text-2xl">{item.name}</p>
            <p className="mt-0.5 text-base text-muted xl:text-lg">{item.title}</p>
          </div>
        </div>
        <Rating value={item.rating} label={ratingLabel} />
      </figcaption>
    </figure>
  );
}

export function TestimonialCarousel({ items, carouselLabels }: Pick<SectionData["Testimonial"], "items" | "carouselLabels">) {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex];
  const next = items[(activeIndex + 1) % items.length];

  if (!current) return null;

  return (
    <div role="region" aria-roledescription={carouselLabels.roleDescription} aria-label={carouselLabels.region} className="relative mx-auto max-w-[1320px] sm:px-13 lg:px-15">
      <div key={activeIndex} className="grid gap-5 motion-safe:animate-quick-entrance lg:grid-cols-2 xl:gap-6">
        <TestimonialCard item={current} ratingLabel={carouselLabels.rating} />
        {items.length > 1 && <TestimonialCard item={next} ratingLabel={carouselLabels.rating} className="hidden lg:flex" />}
      </div>
      {items.length > 1 && (
        <div className="mt-7 flex items-center justify-center gap-3 sm:mt-9">
          <button
            type="button"
            aria-label={carouselLabels.previous}
            onClick={() => setActiveIndex((index) => (index - 1 + items.length) % items.length)}
            className="grid size-10 cursor-pointer place-items-center rounded-full bg-ice text-navy transition-colors hover:bg-brand hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand sm:absolute sm:top-[calc(50%-1.875rem)] sm:left-0 sm:-translate-y-1/2 xl:size-12"
          >
            <Chevron className="size-5 rotate-180" />
          </button>
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={formatLabel(carouselLabels.select, { name: item.name })}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => setActiveIndex(index)}
              className="grid size-6 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span aria-hidden="true" className={`size-3 rounded-full transition-colors ${index === activeIndex ? "bg-brand" : "bg-slate-300"}`} />
            </button>
          ))}
          <button
            type="button"
            aria-label={carouselLabels.next}
            onClick={() => setActiveIndex((index) => (index + 1) % items.length)}
            className="grid size-10 cursor-pointer place-items-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand sm:absolute sm:top-[calc(50%-1.875rem)] sm:right-0 sm:-translate-y-1/2 xl:size-12"
          >
            <Chevron className="size-5" />
          </button>
          <span className="sr-only" role="status">
            {formatLabel(carouselLabels.position, { name: current.name, index: activeIndex + 1, count: items.length })}
          </span>
        </div>
      )}
    </div>
  );
}

export function FaqAccordion({ items }: { items: SectionData["FAQ"]["items"] }) {
  return (
    <div className="space-y-3.5 xl:space-y-4">
      {items.map(({ question, answer }, index) => (
        <details key={question} name="lapcore-faq" open={index === 0} className="group rounded-xl border border-line bg-[#f7f9fc] open:bg-[#f2f5fa]">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[inherit] px-4 py-3.5 text-base font-bold leading-snug text-navy transition-colors hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand group-open:bg-brand group-open:text-white group-open:hover:bg-brand-dark sm:px-5 xl:min-h-15.5 xl:px-6 xl:text-xl [&::-webkit-details-marker]:hidden">
            {question}
            <span aria-hidden="true" className="relative size-5 shrink-0 before:absolute before:inset-x-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:rounded-full before:bg-current after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:rounded-full after:bg-current group-open:after:hidden" />
          </summary>
          <p className="px-4 py-4 text-base leading-relaxed text-muted motion-safe:group-open:animate-quick-entrance sm:px-5 xl:px-6 xl:py-5 xl:text-lg">{answer}</p>
        </details>
      ))}
    </div>
  );
}

const fieldClass = "w-full min-w-0 rounded-md border border-[#c9d5e5] bg-white/55 px-3.5 text-sm text-navy outline-none transition-colors placeholder:text-muted/85 focus:border-brand focus:ring-2 focus:ring-brand/15 xl:text-base";

function FormField({ field, requiredMark }: { field: RepairFormData["fields"][number]; requiredMark: string }) {
  const { name, type, label, required, placeholder } = field;
  const inputId = `repair-${name}`;

  return (
    <div className={type === "textarea" ? "min-w-0 sm:col-span-2" : "min-w-0"}>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium leading-snug text-navy xl:text-base">
        {label}{required && <span aria-hidden="true"> {requiredMark}</span>}
      </label>
      {type === "select" ? (
        <div className="relative">
          <select id={inputId} name={name} required={required} defaultValue="" className={`${fieldClass} h-11 appearance-none pr-10`}>
            <option value="" disabled>{placeholder}</option>
            {field.options?.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          <Chevron className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 rotate-90 text-muted" />
        </div>
      ) : type === "textarea" ? (
        <textarea id={inputId} name={name} required={required} placeholder={placeholder} rows={4} className={`${fieldClass} min-h-29 resize-y py-2.5`} />
      ) : (
        <input
          id={inputId}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={type === "tel" || type === "email" ? type : type === "text" ? "name" : undefined}
          className={`${fieldClass} h-11`}
        />
      )}
    </div>
  );
}

export function RepairForm({ form, emailHref }: { form: RepairFormData; emailHref: string }) {
  const [emailDraft, setEmailDraft] = useState<string>();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = form.fields.flatMap(({ name, label }) => {
      const value = values.get(name);
      return typeof value === "string" && value.trim() ? [`${label}: ${value.trim()}`] : [];
    }).join("\r\n");
    const draft = `${emailHref}?subject=${encodeURIComponent(form.title)}&body=${encodeURIComponent(body)}`;

    setEmailDraft(draft);
    window.location.href = draft;
  }

  return (
    <div className="min-w-0 overflow-hidden rounded-[18px] bg-[#f8fafc] shadow-[0_16px_45px_rgba(13,40,76,0.15)]">
      <div className="flex items-stretch justify-between bg-[#0a243b] text-white">
        <h3 className="self-center px-5 py-5 text-[clamp(1.25rem,2.35vw,2rem)] font-bold leading-tight tracking-tight md:px-7 xl:px-10">{form.title}</h3>
        <span className="grid min-h-16 w-17 shrink-0 place-items-center bg-brand sm:w-24 xl:min-h-22 xl:w-31">
          <Icon name="LaptopRepair" className="size-9 stroke-[1.2] xl:size-13" />
        </span>
      </div>
      <form
        action={emailHref}
        method="post"
        encType="text/plain"
        onSubmit={handleSubmit}
        onInput={() => emailDraft && setEmailDraft(undefined)}
        className="px-5 pt-5 pb-6 md:px-7 xl:px-10 xl:pb-9"
      >
        <p className="mb-6 text-base leading-[1.45] text-muted xl:mb-7 xl:text-lg">{form.description}</p>
        <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2">
          {form.fields.map((field) => <FormField key={field.name} field={field} requiredMark={form.requiredMark} />)}
        </div>
        <button type="submit" className="group mt-6 inline-flex min-h-12 cursor-pointer items-center justify-center gap-5 rounded-md bg-brand px-6 text-sm font-bold text-white uppercase transition-colors hover:bg-brand-dark focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand xl:min-h-13 xl:px-11 xl:text-lg">
          {form.submit}
          <Icon name="ArrowRight" className="size-5 stroke-[2.5] motion-safe:transition-transform motion-safe:group-hover:translate-x-1" />
        </button>
        {emailDraft && (
          <p role="status" className="mt-3 text-sm leading-relaxed text-muted motion-safe:animate-quick-entrance">
            {form.draftMessage} <a href={emailDraft} className="font-semibold text-brand underline underline-offset-2">{form.draftLinkLabel}</a>
          </p>
        )}
      </form>
    </div>
  );
}
