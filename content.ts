import data from "./content.json";
import type { LapcoreContent } from "./type";

// JSON imports widen string literals, including section keys and icon names.
type JsonShape<T> = T extends string
  ? string
  : T extends object
    ? { [Key in keyof T]: JsonShape<T[Key]> }
    : T;

export const content = (data satisfies JsonShape<LapcoreContent>) as LapcoreContent;
export default content;
