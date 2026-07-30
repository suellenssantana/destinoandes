import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "Blog do Chile: dicas, roteiros e experiências",
  description:
    "Guias práticos sobre o Chile: quando viajar, o que fazer em Santiago, neve, Cordilheira, vinícolas, litoral e escolhas para viver uma viagem inesquecível.",
  keywords: [
    "dicas sobre o Chile",
    "o que fazer no Chile",
    "o que fazer em Santiago",
    "viagem para o Chile",
    "neve no Chile",
    "vinícolas no Chile",
    "roteiro Chile",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Destino Andes | O Chile bem vivido",
    description:
      "Dicas certeiras, curiosidades e experiências escolhidas para você aproveitar o melhor do Chile.",
    type: "website",
    url: "/blog",
  },
};

const topics = ["Santiago", "Cordilheira", "Neve", "Vinícolas", "Litoral", "Planejamento"];

export default function Blog() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />
      <main>
        <section className="inner-hero blog-hero">
          <div className="blog-hero-copy">
            <p className="kicker light">GUIA DO CHILE · DESTINO ANDES</p>
            <h1>
              O Chile,
              <br />
              <em>bem vivido.</em>
            </h1>
            <p>
              Dicas certeiras, curiosidades locais e escolhas que transformam uma viagem bonita
              em uma experiência inesquecível.
            </p>
            <div className="hero-actions">
              <Link className="btn gold" href="/chile/passeios">
                Descobrir experiências
              </Link>
              <a className="btn glass" href="#guias">
                Explorar os guias
              </a>
            </div>
          </div>
        </section>

        <section className="blog-intro section">
          <div>
            <p className="kicker">CONTEÚDO PARA VIAJAR MELHOR</p>
            <h2>Menos listas genéricas. Mais escolhas que fazem sentido.</h2>
          </div>
          <div>
            <p>
              O Chile muda com a estação, a paisagem e o ritmo de cada viajante. Reunimos
              informação prática e olhar local para ajudar você a escolher quando ir, o que
              priorizar e como aproveitar melhor cada dia.
            </p>
            <div className="blog-topics" aria-label="Temas do blog">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-feature section" aria-labelledby="guia-destaque">
          <div className="blog-section-label">
            <p className="kicker">COMECE POR AQUI</p>
            <span>Guia essencial para planejar a viagem</span>
          </div>
          <Link href={`/blog/${featured.slug}`} className="featured-post">
            <img src={featured.image} alt={featured.title} />
            <div>
              <p className="kicker">
                {featured.country} · {featured.category}
              </p>
              <h2 id="guia-destaque">{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span>Ler o guia completo · {featured.readTime} →</span>
            </div>
          </Link>
        </section>

        <section className="blog-list section" id="guias">
          <div className="section-title">
            <div>
              <p className="kicker">ESCOLHAS DESTINO ANDES</p>
              <h2>Seu próximo capítulo no Chile começa aqui</h2>
            </div>
            <p className="blog-list-intro">
              Guias diretos para combinar cidade, montanha, vinho, litoral e o seu jeito de viajar.
            </p>
          </div>
          <div className="post-grid">
            {rest.map((post) => (
              <Link className="post-card" href={`/blog/${post.slug}`} key={post.slug}>
                <img src={post.image} alt={post.title} />
                <div>
                  <p>
                    {post.country} · {post.category}
                  </p>
                  <h3>{post.title}</h3>
                  <span>{post.readTime} de leitura →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="blog-cta">
          <p className="kicker light">DO CONTEÚDO PARA A EXPERIÊNCIA</p>
          <h2>
            Já imaginou o Chile.
            <br />
            Agora vamos desenhar a viagem.
          </h2>
          <p>
            Conte seus planos e receba uma seleção de experiências pensada para as suas datas,
            interesses e ritmo.
          </p>
          <div className="hero-actions">
            <Link className="btn gold" href="/contato">
              Criar meu roteiro
            </Link>
            <Link className="btn glass" href="/chile/passeios">
              Ver passeios no Chile
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
