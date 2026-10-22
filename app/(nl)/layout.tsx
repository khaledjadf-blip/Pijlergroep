import { Space_Grotesk, Space_Mono, Inter } from "next/font/google";
import { RootDocument } from "@/components/RootDocument";
import { dictionaries } from "@/data/i18n";
import { buildMetadata } from "@/data/metadata";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const t = dictionaries.nl;

export const metadata = buildMetadata(t);

export default function DutchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootDocument
      t={t}
      fontClassName={`${spaceGrotesk.variable} ${spaceMono.variable} ${inter.variable}`}
    >
      {children}
    </RootDocument>
  );
}
