import type { ReactNode } from "react";
import type { IconName } from "@/type";

const paths = {
  Pin: <><path d="M20 10c0 5-8 11-8 11s-8-6-8-11a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.6"/></>,
  Mail: <><rect x="2.5" y="4.5" width="19" height="15" rx="1"/><path d="m3 6 9 7 9-7"/></>,
  Phone: <path d="M22 17.3v2.8a2 2 0 0 1-2.2 2 18.5 18.5 0 0 1-8-2.8 18.3 18.3 0 0 1-5.6-5.6 18.5 18.5 0 0 1-2.8-8A2 2 0 0 1 5.4 3h2.8a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 2.1l-1.2 1.1a14.8 14.8 0 0 0 4.2 4.2l1.1-1.2a2 2 0 0 1 2.1-.6l3 .5a2 2 0 0 1 2.7 2Z" transform="translate(-.5 -.5)"/>,
  Check: <path d="m4.5 12 5 5 10-10"/>,
  ArrowRight: <path d="M4 12h15m-6-6 6 6-6 6"/>,
  Settings: <><path fill="currentColor" stroke="none" d="M9.7 2h4.6l.6 2.2 1.5.9 2.2-.6 2.3 4-1.6 1.6v1.8l1.6 1.6-2.3 4-2.2-.6-1.5.9-.6 2.2H9.7l-.6-2.2-1.5-.9-2.2.6-2.3-4 1.6-1.6v-1.8L3.1 8.5l2.3-4 2.2.6 1.5-.9.6-2.2Z" transform="translate(-1.3 -1.3) scale(1.11)"/><circle cx="12" cy="11" r="3.1" fill="white" stroke="none"/><circle cx="12" cy="11" r="1.35" fill="currentColor" stroke="none"/></>,
  LaptopRepair: <><path d="M4 17V5h8m8 6v6M3 17h18l1.5 3h-21L3 17Z"/><path d="m10 12 6-6a3 3 0 0 1 4-4l-2 2 2 2 2-2a3 3 0 0 1-4 4l-6 6a1.4 1.4 0 0 1-2-2Z"/></>,
  Users: <><circle cx="12" cy="7" r="3.1"/><path d="M6.2 20v-2.3a5.8 5.8 0 0 1 11.6 0V20H6.2ZM6.5 5.9a2.6 2.6 0 1 0-.7 5m11.7-5a2.6 2.6 0 1 1 .7 5M5.9 13A4.2 4.2 0 0 0 2 17.2V20h2m14.1-7a4.2 4.2 0 0 1 3.9 4.2V20h-2"/></>,
  ShieldCheck: <><path d="M12 2 3.5 5v6c0 5.6 3.4 9 8.5 11 5.1-2 8.5-5.4 8.5-11V5L12 2Z"/><path d="m8.3 11.8 2.5 2.5 5-5"/></>,
  Laptop: <><path d="M3 17V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12M2 17h20v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Zm10-3 1.5-3L18 6.5"/></>,
  BatteryCharging: <><rect x="2" y="6" width="18" height="12" rx="2"/><path d="M22 10v4"/><path d="m12.5 8.7-4 4h3l-.6 2.6 4-4h-3l.6-2.6Z" fill="currentColor" strokeWidth=".8"/></>,
  Cpu: <><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8.5" y="8.5" width="7" height="7" rx=".8"/><path d="M8 2v2m4-2v2m4-2v2M8 20v2m4-2v2m4-2v2M2 8h2m-2 4h2m-2 4h2m16-8h2m-2 4h2m-2 4h2"/></>,
  Keyboard: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.1m3.9 0h.1m3.9 0h.1m3.9 0h.1M6 12h.1m3.9 0h.1m3.9 0h.1m3.9 0h.1M7 15h.1m3.4 0h6.5" strokeWidth="2.25"/></>,
  HardDrive: <><rect x="3.5" y="3" width="17" height="18" rx="2"/><path d="M13 5.5a6.6 6.6 0 0 1 5 7m-2 3.5 2 2m-12-1h.1M6 6h.1"/><circle cx="11.5" cy="12.5" r="2.1"/></>,
  AppWindow: <><path d="M12 20H3.5A1.5 1.5 0 0 1 2 18.5v-13A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5V11M2 8h20M5 6h.1m3 0h.1"/><path d="m17.5 13 .5-1h2l.5 1 1 .6 1.1.1 1 1.7-.6.9v1.2l.6.9-1 1.7-1.1.1-1 .6-.5 1h-2l-.5-1-1-.6-1.1-.1-1-1.7.6-.9v-1.2l-.6-.9 1-1.7 1.1-.1 1-.6Z" transform="translate(-1 -1)"/><circle cx="18" cy="16" r="1.4"/></>,
  Fan: <><rect x="2.5" y="2.5" width="19" height="19" rx="2.5"/><circle cx="12" cy="12" r="6.9"/><circle cx="12" cy="12" r="1.35"/><path d="M12 10.6c1-1.4 1.1-3.6 0-5.5m1.4 6.9c1.4 1 3.6 1.1 5.5 0M12 13.4c-1 1.4-1.1 3.6 0 5.5m-1.4-6.9c-1.4-1-3.6-1.1-5.5 0m7.9-1c1.7-.3 3.3-1.8 3.9-3.9m-3.9 5.9c.3 1.7 1.8 3.3 3.9 3.9m-5.9-3.9c-1.7.3-3.3 1.8-3.9 3.9m3.9-5.9c-.3-1.7-1.8-3.3-3.9-3.9"/></>,
  LaptopUp: <><path d="M3 17V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v12M2 17h20v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1Zm10-3V8m-2.5 2.5L12 8l2.5 2.5"/></>,
  Timer: <><circle cx="14" cy="13.5" r="7.4"/><path d="M14 13.5V9m-2-6h4m-2 0v3m5.5 2L21 6.5M2 9h5M1 13.5h4m-3 4.5h5"/></>,
  Headphones: <><path d="M3.5 13v-1.5a8.5 8.5 0 0 1 17 0V13m-.5 5c0 2-2 3-5 3h-2"/><rect x="2" y="12" width="4.5" height="6.5" rx="1.7"/><rect x="17.5" y="12" width="4.5" height="6.5" rx="1.7"/><rect x="10" y="19.5" width="4" height="2.5" rx="1.25" fill="currentColor"/></>,
  Menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  Close: <path d="m5 5 14 14M19 5 5 19"/>,
  facebook: <path fill="currentColor" stroke="none" d="M13.9 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5H17V3.6a21 21 0 0 0-2.4-.2c-2.4 0-4 1.5-4 4.1v2.4H8v3.1h2.6v8h3.3Z"/>,
  instagram: <><rect x="3.5" y="3.5" width="17" height="17" rx="4.6"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.1" cy="6.9" r="1" fill="currentColor" stroke="none"/></>,
  linkedin: <path fill="currentColor" stroke="none" d="M4 8h3.3v12H4V8Zm1.6-5a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm4.3 5h3.2v1.7h.1a3.5 3.5 0 0 1 3.2-1.8c3.4 0 4 2.2 4 5v7.1H17v-6.5c0-1.5-.1-2.7-1.8-2.7s-2 1.3-2 2.6v6.6H9.9V8Z"/>,
  youtube: <path fill="currentColor" stroke="none" fillRule="evenodd" d="M21.5 8a2.8 2.8 0 0 0-2-2C17.8 5.5 12 5.5 12 5.5s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2A21 21 0 0 0 2 12a21 21 0 0 0 .5 4 2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2 21 21 0 0 0 .5-4 21 21 0 0 0-.5-4ZM10 9v6l5.2-3L10 9Z"/>,
} satisfies Record<IconName | "Pin" | "Check" | "ArrowRight" | "Settings" | "LaptopRepair" | "Menu" | "Close", ReactNode>;

export function Icon({ name, className }: { name: keyof typeof paths; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
