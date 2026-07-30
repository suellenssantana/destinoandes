import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer, Header } from "../../components";
import { getPost, posts } from "../data";

type PostPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.title, post.category, "dicas sobre o Chile", "viagem para o Chile"],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <article className="article">
          <header>
            <Link href="/blog">← Voltar ao guia do Chile</Link>
            <p className="kicker">
              {post.country} · {post.category}
            </p>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <span>{post.readTime} de leitura</span>
          </header>
          <img className="article-cover" src={post.image} alt={post.title} />
          <div className="article-body">
            <p className="article-intro">{post.intro}</p>
            {post.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
            <aside>
              <p className="kicker light">VIVA O CHILE COM QUEM CONHECE</p>
              <h3>Transforme inspiração em uma viagem com o seu ritmo.</h3>
              <p>
                Selecionamos experiências de acordo com suas datas, interesses e jeito de viajar.
              </p>
              <div className="article-cta-actions">
                <Link className="btn gold" href="/contato">
                  Criar meu roteiro
                </Link>
                <Link className="btn glass" href="/chile/passeios">
                  Ver experiências
                </Link>
              </div>
            </aside>
          </div>
        </article>
        <section className="related-posts section">
          <div className="section-title">
            <div>
              <p className="kicker">CONTINUE DESCOBRINDO</p>
              <h2>Mais ideias para viver o Chile</h2>
            </div>
          </div>
          <div className="post-grid">
            {related.map((item) => (
              <Link className="post-card" href={`/blog/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={item.title} />
                <div>
                  <p>
                    {item.country} · {item.category}
                  </p>
                  <h3>{item.title}</h3>
                  <span>Ler guia →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
