import { HomePage } from "@/components/HomePage";
import { dictionaries } from "@/data/i18n";

export default function DutchHomePage() {
  return <HomePage t={dictionaries.nl} />;
}
