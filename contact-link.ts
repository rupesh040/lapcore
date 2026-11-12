import type { BusinessContact } from "./type";

export function contactLink(contact: BusinessContact, method: "phone" | "email") {
  return method === "phone"
    ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
    : `mailto:${contact.email}`;
}
