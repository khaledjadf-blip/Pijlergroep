import { notFound } from "next/navigation";

// With one root layout per language there is no top-level not-found, so
// unknown URLs land here and render (nl)/not-found.tsx.
export default function CatchAll() {
  notFound();
}
