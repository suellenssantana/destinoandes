import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { WhatsAppFloat } from "./components";
import { Analytics } from "@vercel/analytics/next";
import { LanguageRuntime } from "./i18n-runtime";
import { ShareActions } from "./share-actions";


export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "destinoandes.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();

  return {
    metadataBase: base,
    title: { default: "Destino Andes | Chile, Peru e Argentina", template: "%s | Destino Andes" },
    description: "Viagens e experiências personalizadas no Chile, Peru e Argentina, com curadoria humana e atendimento em português, espanhol e inglês.",
    keywords: ["Destino Andes","viagens América do Sul","passeios no Chile","viagens Peru","viagens Argentina","tours em Santiago"],
    openGraph: {
      title: "Destino Andes | Chile, Peru e Argentina",
      description: "Os Andes começam aqui. Experiências cuidadas por quem conhece cada caminho.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Destino Andes — Chile, Peru e Argentina" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Destino Andes | Chile, Peru e Argentina",
      description: "Os Andes começam aqui. Experiências cuidadas por quem conhece cada caminho.",
      images: [socialImage],
    },
    icons: { icon: "/logo-destino-andes.png", shortcut: "/logo-destino-andes.png" },
  };
}

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}<ShareActions/><WhatsAppFloat/><LanguageRuntime/><Analytics /></body></html>;
}
