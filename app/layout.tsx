import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://destino-andes-chile.example"),
  title: { default: "Destino Andes Chile | Passeios e experiências", template: "%s | Destino Andes Chile" },
  description: "Passeios no Chile com atendimento local em português: neve, Santiago, vinícolas, litoral e experiências personalizadas.",
  keywords: ["passeios no Chile","tours em Santiago","Valle Nevado","vinícolas Chile","Destino Andes"],
  openGraph: { title: "Destino Andes Chile", description: "Experiências cuidadas por quem conhece cada caminho.", type: "website", locale: "pt_BR" },
  other: { "codex-preview": "development" },
  icons: { icon: "/logo-destino-andes.png", shortcut: "/logo-destino-andes.png" },
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
