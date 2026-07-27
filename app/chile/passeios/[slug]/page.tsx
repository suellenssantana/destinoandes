import { notFound } from "next/navigation";
import Link from "next/link";
import { Footer, Gallery, Header, Price, TourCard } from "../../../components";
import { getTour, tours } from "../../../data";

export default async function TourPage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params; const tour = getTour(slug); if (!tour) notFound();
  const related = tours.filter(t => t.slug !== tour.slug && t.category.some(c=>tour.category.includes(c))).slice(0,3);
  const whatsapp = `https://wa.me/56900000000?text=${encodeURIComponent(`Olá! Quero consultar disponibilidade para o passeio ${tour.name}.`)}`;
  return <><Header/><main>
    <section className="tour-heading"><Link href="/chile/passeios">← Todos os passeios</Link><p className="kicker">{tour.eyebrow}</p><h1>{tour.name}</h1><p>{tour.short}</p><div className="quick-facts"><span>◷ {tour.duration}</span><span>◉ {tour.mode}</span><span>❄ {tour.season}</span></div></section>
    <section className="tour-gallery-wrap"><Gallery tour={tour}/></section>
    <section className="tour-content">
      <div className="tour-copy">
        <div className="lead"><p className="kicker">A EXPERIÊNCIA</p><h2>O que torna este passeio especial</h2><p>{tour.description}</p></div>
        <div className="info-section"><p className="kicker">ROTEIRO COMPLETO</p><h2>Seu dia, passo a passo</h2><ol className="timeline">{tour.itinerary.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></div>
        <div className="info-grid"><div><p className="kicker">INCLUÍDO</p><ul className="check">{tour.included.map(x=><li key={x}>✓ {x}</li>)}</ul></div><div><p className="kicker">NÃO INCLUÍDO</p><ul>{tour.notIncluded.map(x=><li key={x}>— {x}</li>)}</ul></div></div>
        <div className="details-grid"><article><span>◷</span><div><b>Duração e horários</b><p>{tour.times}. Horários aproximados e confirmados na véspera.</p></div></article><article><span>⌂</span><div><b>Saída e retirada</b><p>{tour.pickup}</p></div></article><article><span>◉</span><div><b>Modalidade</b><p>{tour.mode}. Consulte também a opção privativa para seu grupo.</p></div></article><article><span>☀</span><div><b>Clima e operação</b><p>{tour.climate}</p></div></article></div>
        <div className="recommendation"><p className="kicker">ANTES DE IR</p><h2>Requisitos e recomendações</h2><ul className="check">{tour.requirements.map(x=><li key={x}>✓ {x}</li>)}</ul></div>
        <div className="policy"><p className="kicker">TRANQUILIDADE PARA PLANEJAR</p><h2>Alterações e cancelamento</h2><p>{tour.cancellation}</p><p>Condições climáticas, fechamento de estradas e decisões operacionais podem exigir ajustes ou reagendamento. A segurança sempre vem primeiro.</p></div>
      </div>
      <aside className="booking"><span className="limited">● VAGAS LIMITADAS</span><Price tour={tour}/><div className="booking-line"/><p><b>{tour.duration}</b><br/>{tour.times}</p><p><b>{tour.mode}</b><br/>Confirmação sujeita à formação do grupo.</p><a className="btn dark" href={whatsapp}>Consultar disponibilidade</a><a className="btn outline" href={whatsapp}>Reservar pelo WhatsApp</a><small>Você conversa com uma pessoa de verdade. Sem pagamento automático antes de confirmar todos os detalhes.</small></aside>
    </section>
    <section className="related section"><div className="section-title"><div><p className="kicker">CONTINUE EXPLORANDO</p><h2>Você também pode gostar</h2></div></div><div className="tour-grid">{related.map(t=><TourCard key={t.slug} tour={t}/>)}</div></section>
  </main><Footer/></>;
}
