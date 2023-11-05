import { useId } from "react";

export function idGenerator(): string {
  return crypto.randomUUID();
}
