import type { Metadata } from "next";
import { Footer, Header } from "../components";
import manifest from "../../public/images/library/manifest.json";
import { MediaLibraryBrowser } from "./media-library-browser";

export const metadata: Metadata = {
  title: "Banco de imagens",
  description:
    "Acervo visual organizado do Guia Chile para tours, projetos e conteúdos do blog.",
  robots: { index: false, follow: false },
};

export default function ImageLibraryPage() {
  return (
    <>
      <Header />
      <main className="media-library-page">
        <section className="media-library-hero">
          <div>
            <p className="kicker light">ACERVO GUIA CHILE</p>
            <h1>
              Uma viagem inteira,
              <br />
              <em>pronta para contar.</em>
            </h1>
            <p>
              Encontre a imagem certa para cada tour, projeto ou história do blog.
              Pesquise por destino, filtre o formato e copie o caminho para usar.
            </p>
          </div>
          <dl>
            <div>
              <dt>{manifest.items.length}</dt>
              <dd>imagens</dd>
            </div>
            <div>
              <dt>{manifest.categories.length}</dt>
              <dd>temas</dd>
            </div>
            <div>
              <dt>Full HD</dt>
              <dd>prontas para web</dd>
            </div>
          </dl>
        </section>

        <MediaLibraryBrowser
          categories={manifest.categories}
          items={manifest.items}
        />
      </main>
      <Footer />
    </>
  );
}
