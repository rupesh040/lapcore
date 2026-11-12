"use client";

import { useRef } from "react";
import type { SectionData } from "@/type";
import { Icon } from "./icons";

export function MobileNavigation({ data }: { data: SectionData["Header"] }) {
  const menu = useRef<HTMLDetailsElement>(null);

  function close() {
    if (menu.current) menu.current.open = false;
  }

  return (
    <details
      ref={menu}
      className="group lg:hidden"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menu.current?.open) {
          close();
          menu.current.querySelector("summary")?.focus();
        }
      }}
    >
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-line text-brand-dark hover:bg-ice focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [&::-webkit-details-marker]:hidden">
        <span className="sr-only">{data.menuLabel}</span>
        <Icon name="Menu" className="size-6 group-open:hidden" />
        <Icon name="Close" className="hidden size-6 group-open:block" />
      </summary>
      <nav aria-label={data.mobileNavigationLabel} className="absolute inset-x-0 top-full z-20 max-h-[70dvh] overflow-y-auto border-y border-line bg-white px-5 py-3 shadow-lg motion-safe:group-open:animate-quick-entrance">
        <ul className="mx-auto grid max-w-xl gap-0.5">
          {data.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close} className="block rounded-md px-3 py-2.5 font-medium hover:bg-ice hover:text-brand">
                {link.name}
              </a>
            </li>
          ))}
          <li className="mt-1">
            <a href={data.buttonHref} onClick={close} className="flex items-center gap-2.5 rounded-md bg-brand px-3 py-2.5 font-semibold text-white hover:bg-brand-dark">
              <Icon name="Phone" className="size-4" />
              {data.button}
            </a>
          </li>
        </ul>
      </nav>
    </details>
  );
}
