import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components";
import { posts } from "./data";

export const metadata: Metadata = {
  title: "Guia Chile: seu melhor amigo na viagem",
  description:
    "Seu Guia Chile sempre à mão: dicas próximas e práticas sobre Santiago, neve, Cordilheira, vinícolas, litoral e tudo para viver uma viagem incrível.",
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
    title: "Guia Chile | Seu melhor amigo na viagem",
    description:
      "Dicas que ajudam de verdade, curiosidades e experiências para você aproveitar o melhor do Chile.",
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
            <p className="kicker light">GUIA CHILE · DESTINO ANDES</p>
            <h1>
              Guia Chile.
              <br />
              <em>Seu melhor amigo na viagem.</em>
            </h1>
            <p>
              Sempre à mão, do primeiro plano ao último passeio — com dicas que ajudam de
              verdade e aquele olhar de quem já conhece o caminho.
            </p>
            <div className="hero-actions">
              <Link className="btn gold" href="/chile/passeios">
                Quero descobrir o Chile
              </Link>
              <a className="btn glass" href="#guias">
                Por onde eu começo?
              </a>
            </div>
          </div>
        </section>

        <section className="blog-intro section">
          <div>
            <p className="kicker">SEU GUIA SEMPRE À MÃO</p>
            <h2>Aquele amigo que sabe o que vale a pena — e te conta tudo.</h2>
          </div>
          <div>
            <p>
              Sabe aquele amigo que avisa o que levar, onde vale parar e o que não pode ficar de
              fora? É isso que queremos ser na sua viagem: informação prática, escolhas sinceras
              e companhia para você aproveitar cada dia no Chile.
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
            <p className="kicker">SE É SUA PRIMEIRA VEZ, COMECE AQUI</p>
            <span>Um guia para salvar antes de embarcar</span>
          </div>
          <Link href={`/blog/${featured.slug}`} className="featured-post">
            <img src={featured.image} alt={featured.title} />
            <div>
              <p className="kicker">
                {featured.country} · {featured.category}
              </p>
              <h2 id="guia-destaque">{featured.title}</h2>
              <p>{featured.excerpt}</p>
              <span>Quero saber tudo · {featured.readTime} →</span>
            </div>
          </Link>
        </section>

        <section className="blog-list section" id="guias">
          <div className="section-title">
            <div>
              <p className="kicker">O GUIA CHILE TE CONTA</p>
              <h2>Dicas que você vai agradecer ter lido antes</h2>
            </div>
            <p className="blog-list-intro">
              Sem complicação: cidade, montanha, vinho, litoral e as escolhas certas para o seu
              jeito de viajar.
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
          <p className="kicker light">SEU GUIA TE TROUXE ATÉ AQUI</p>
          <h2>
            Agora deixa a gente
            <br />
            te levar pelo Chile.
          </h2>
          <p>
            Você conta o que imagina. A gente aproxima as melhores experiências das suas datas,
            interesses e ritmo.
          </p>
          <div className="hero-actions">
            <Link className="btn gold" href="/contato">
              Quero planejar minha viagem
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
