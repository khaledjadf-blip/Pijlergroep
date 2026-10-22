import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { RootDocument } from "@/components/RootDocument";
import { dictionaries } from "@/data/i18n";
import { buildMetadata } from "@/data/metadata";

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const t = dictionaries.ar;

export const metadata = buildMetadata(t);

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootDocument t={t} fontClassName={plexArabic.variable}>
      {children}
    </RootDocument>
  );
}
