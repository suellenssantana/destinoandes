"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Tour } from "./data";
import { categories, tours } from "./data";

const WHATSAPP = "https://wa.me/56900000000";
const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement">Atendimento local em português • Planejamento humano do início ao fim</div>
      <header className="header">
        <a className="brand" href="/chile" aria-label="Destino Andes Chile, página inicial">
          <img src="/logo-destino-andes.png" alt="" />
          <span>Destino Andes<small>Chile</small></span>
        </a>
        <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">☰</button>
        <nav className={open ? "nav nav-open" : "nav"}>
          <a href="/chile">Início</a>
          <Link href="/chile/passeios">Passeios</Link>
          <a href="/chile/como-funciona">Como funciona</a>
          <a href="/chile/faq">Dúvidas</a>
          <a className="nav-cta" href={`${WHATSAPP}?text=Olá!%20Quero%20planejar%20minha%20viagem%20ao%20Chile.`}>Falar com especialista</a>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return <footer><div className="footer-grid">
    <div><a className="brand footer-brand" href="/chile"><img src="/logo-destino-andes.png" alt="" /><span>Destino Andes<small>Chile</small></span></a><p>Experiências cuidadas por quem conhece cada caminho.</p></div>
    <div><strong>Explore</strong><Link href="/chile/passeios">Todos os passeios</Link><a href="/chile/como-funciona">Como reservar</a><a href="/chile/faq">Perguntas frequentes</a></div>
    <div><strong>Planeje</strong><a href="/chile/como-funciona#pagamento">Formas de pagamento</a><a href="/chile/como-funciona#cancelamento">Alterações e cancelamento</a><a href="/chile/como-funciona#documentos">Documentos necessários</a></div>
    <div className="footer-card"><span>PRECISA DE AJUDA?</span><strong>Converse com quem vive o Chile.</strong><a href={WHATSAPP}>Abrir WhatsApp ↗</a></div>
  </div><div className="copyright">© 2026 Destino Andes Chile <span>Turismo com clareza, cuidado e presença local.</span></div></footer>;
}

export function Price({ tour, compact = false }: { tour: Tour; compact?: boolean }) {
  return <div className={compact ? "price compact" : "price"}>
    <span>A partir de</span><strong>{money.format(tour.price.clp)}</strong><em>≈ R$ {tour.price.brlReference} por pessoa</em>
    {!compact && <small>Valor aproximado em reais, sujeito à variação cambial. Consulte o preço atualizado antes da reserva. Referência atualizada em 06/01/2026.</small>}
  </div>;
}

export function TourCard({ tour }: { tour: Tour }) {
  return <article className="tour-card">
    <a className="card-image" href={`/chile/passeios/${tour.slug}`}><img src={tour.images[0]} alt={tour.name} loading="lazy" /><span>{tour.duration}</span></a>
    <div className="card-body"><p className="kicker">{tour.eyebrow}</p><h3><a href={`/chile/passeios/${tour.slug}`}>{tour.name}</a></h3><p>{tour.short}</p>
      <div className="chips">{tour.category.slice(0,2).map(c => <span key={c}>{c}</span>)}</div>
      <Price tour={tour} compact/><a className="text-link" href={`/chile/passeios/${tour.slug}`}>Ver experiência <span>→</span></a>
    </div>
  </article>;
}

export function TourFilters() {
  const [category, setCategory] = useState("Todos");
  const [duration, setDuration] = useState("Todos");
  const [mode, setMode] = useState("Todos");
  const [season, setSeason] = useState("Todos");
  const [priceCap, setPriceCap] = useState(75000);
  const filtered = useMemo(() => tours.filter(t =>
    (category === "Todos" || t.category.includes(category)) &&
    (duration === "Todos" || t.duration === duration) &&
    (mode === "Todos" || t.mode === mode) &&
    (season === "Todos" || t.season === season) && t.price.clp <= priceCap
  ), [category, duration, mode, season, priceCap]);
  return <div className="catalog-layout">
    <aside className="filters">
      <div className="filter-head"><strong>Filtrar experiências</strong><button onClick={() => {setCategory("Todos");setDuration("Todos");setMode("Todos");setSeason("Todos");setPriceCap(75000)}}>Limpar</button></div>
      <fieldset><legend>Região ou estilo</legend>{categories.map(c => <label key={c}><input type="radio" name="category" checked={category===c} onChange={()=>setCategory(c)}/><span>{c}</span></label>)}</fieldset>
      <label className="select-label">Duração<select value={duration} onChange={e=>setDuration(e.target.value)}><option>Todos</option><option>Dia inteiro</option><option>Meio período</option></select></label>
      <label className="select-label">Modalidade<select value={mode} onChange={e=>setMode(e.target.value)}><option>Todos</option><option>Compartilhado</option><option>Privativo</option></select></label>
      <label className="select-label">Disponibilidade<select value={season} onChange={e=>setSeason(e.target.value)}><option>Todos</option><option>Ano todo</option><option>Inverno</option></select></label>
      <label className="range-label">Até <strong>{money.format(priceCap)}</strong><input type="range" min="25000" max="75000" step="5000" value={priceCap} onChange={e=>setPriceCap(Number(e.target.value))}/></label>
    </aside>
    <div><div className="results-head"><p><strong>{filtered.length}</strong> experiências encontradas</p><span>Preços por pessoa</span></div><div className="tour-grid">{filtered.map(t=><TourCard key={t.slug} tour={t}/>)}</div>{!filtered.length && <div className="empty">Nenhum passeio corresponde aos filtros. Tente ampliar a faixa de preço.</div>}</div>
  </div>;
}

export function Gallery({ tour }: { tour: Tour }) {
  const [active, setActive] = useState(0);
  return <div className="gallery"><button className="gallery-main" onClick={()=>setActive((active+1)%tour.images.length)} aria-label="Ver próxima foto"><img src={tour.images[active]} alt={`${tour.name} — foto ${active+1}`}/><span>{active+1} / {tour.images.length}</span></button><div className="thumbs">{tour.images.map((image,i)=><button key={image} className={i===active?"active":""} onClick={()=>setActive(i)}><img src={image} alt=""/></button>)}</div></div>;
}

export function FAQ({ items }: { items: [string,string][] }) {
  return <div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div>;
}
