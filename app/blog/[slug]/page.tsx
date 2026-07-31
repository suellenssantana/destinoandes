import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer, Header } from "../../components";
import { getPost, posts } from "../data";

type PostPageProps = { params: Promise<{ slug: string }> };

const affiliates = [
  {
    slug: "seguros-promo",
    name: "Seguros Promo",
    headline: "Viaje protegido do embarque ao retorno.",
    description: "Compare planos, coberturas e seguradoras para o seu roteiro.",
    cta: "Comparar seguro viagem",
    href: "https://www.segurospromo.com.br/?utm_medium=afiliado&pcrid=13588&utm_source=site-blog&pcrtt=site,blog,agência",
    logo: "/images/partners/seguro-promo.png",
  },
  {
    slug: "esim-travel",
    name: "eSIM Travel",
    headline: "Tenha internet assim que chegar ao destino.",
    description: "Escolha um eSIM compatível e prepare sua conexão antes da viagem.",
    cta: "Escolher meu eSIM",
    href: "https://www.parceirospromo.com.br/partners/affiliate/travel-bds?page=https://travelbds.com&utm_medium=afiliado&pcrid=13588&utm_source=site-blog&pcrtt=site,blog,chip",
    logo: "/images/partners/esim-travel.png",
  },
  {
    slug: "wise",
    name: "Wise",
    headline: "Leve seu dinheiro de forma mais prática.",
    description: "Organize moedas, conversões e pagamentos internacionais antes de embarcar.",
    cta: "Abrir minha conta Wise",
    href: "https://wise.com/invite/ilpn/suellens124",
    logo: "/images/partners/wise.png",
  },
] as const;

function AffiliateEssentials() {
  return (
    <section className="affiliate-essentials" aria-labelledby="affiliate-essentials-title">
      <div className="affiliate-essentials-heading">
        <p className="kicker">COMPLETE SUA PREPARAÇÃO</p>
        <h2 id="affiliate-essentials-title">Deixe os essenciais da viagem prontos agora</h2>
        <p>Proteja seu roteiro, desembarque conectado e organize seus pagamentos antes de fazer as malas.</p>
      </div>
      <div className="affiliate-list">
        {affiliates.map((affiliate) => (
          <article className={`affiliate-card affiliate-${affiliate.slug}`} key={affiliate.slug}>
            <div className="affiliate-logo">
              <img src={affiliate.logo} alt={`Logo ${affiliate.name}`} loading="lazy" />
            </div>
            <div className="affiliate-copy">
              <h3>{affiliate.name}</h3>
              <strong>{affiliate.headline}</strong>
              <p>{affiliate.description}</p>
            </div>
            <a
              className="affiliate-action"
              href={affiliate.href}
              target="_blank"
              rel="sponsored noopener noreferrer"
              aria-label={`${affiliate.cta} — abre em uma nova aba`}
            >
              {affiliate.cta} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      <p className="affiliate-disclosure">
        Ao contratar por estes links, a Destino Andes pode receber uma comissão, sem custo adicional para você.
        Consulte condições, cobertura e compatibilidade no site de cada parceiro. O link da Wise é um link de
        indicação; elegibilidade e benefícios são definidos pela própria Wise.
      </p>
    </section>
  );
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords ?? [post.title, post.category, "dicas sobre o Chile", "viagem para o Chile"],
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
            <Link href="/blog">← Voltar ao Guia Chile</Link>
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
                {section.image && (
                  <figure className="article-section-media">
                    <img src={section.image} alt={section.imageAlt ?? section.title} loading="lazy" />
                    {section.imageCaption && <figcaption>{section.imageCaption}</figcaption>}
                  </figure>
                )}
                {(Array.isArray(section.body) ? section.body : [section.body]).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.highlight && (
                  <div className="article-highlight">
                    <strong>{section.highlight.label}</strong>
                    <p>{section.highlight.text}</p>
                  </div>
                )}
                {section.subSections?.map((subSection) => (
                  <div className="article-subsection" key={subSection.title}>
                    <h3>{subSection.title}</h3>
                    {(Array.isArray(subSection.body) ? subSection.body : [subSection.body]).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {subSection.bullets && (
                      <ul className="article-list">
                        {subSection.bullets.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
                {section.bullets && (
                  <ul className="article-list">
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </section>
            ))}
            <aside>
              <p className="kicker light">GOSTOU? A GENTE TE AJUDA A VIVER ISSO</p>
              <h3>Seu Guia Chile não te deixa só na inspiração.</h3>
              <p>
                Conta para a gente como você imagina a viagem. Nós aproximamos as experiências
                certas das suas datas, interesses e ritmo.
              </p>
              <div className="article-cta-actions">
                <Link className="btn gold" href="/contato">
                  Quero ajuda para planejar
                </Link>
                <Link className="btn glass" href="/chile/passeios">
                  Ver experiências
                </Link>
              </div>
            </aside>
          </div>
        </article>
        <AffiliateEssentials />
        <section className="related-posts section">
          <div className="section-title">
            <div>
              <p className="kicker">SEU GUIA CONTINUA</p>
              <h2>Salve mais dicas para a viagem</h2>
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
                  <span>Quero ler →</span>
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
