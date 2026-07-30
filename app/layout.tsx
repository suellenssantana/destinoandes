import type { Metadata } from "next";
import "./globals.css";
import { WhatsAppFloat } from "./components";
import { Analytics } from "@vercel/analytics/next";


export const metadata: Metadata = {
  metadataBase: new URL("https://destino-andes-chile.example"),
  title: { default: "Destino Andes | Chile, Peru e Argentina", template: "%s | Destino Andes" },
  description: "Viagens e experiências personalizadas no Chile, Peru e Argentina, com curadoria humana e atendimento em português, espanhol e inglês.",
  keywords: ["Destino Andes","viagens América do Sul","passeios no Chile","viagens Peru","viagens Argentina","tours em Santiago"],
  openGraph: { title: "Destino Andes | Chile, Peru e Argentina", description: "Os Andes começam aqui. Experiências cuidadas por quem conhece cada caminho.", type: "website", locale: "pt_BR" },
  other: { "codex-preview": "development" },
  icons: { icon: "/logo-destino-andes.png", shortcut: "/logo-destino-andes.png" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}<WhatsAppFloat/><Analytics /></body></html>;
}
