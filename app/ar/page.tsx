import { HomePage } from "@/components/HomePage";
import { dictionaries } from "@/data/i18n";

export default function ArabicHomePage() {
  return <HomePage t={dictionaries.ar} />;
}
