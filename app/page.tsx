import Link from "next/link";
import { Footer, Header } from "./components";

const countries = [
  { name:"Chile", flag:"🇨🇱", href:"/chile", className:"country-chile", image:"/images/tours/img-003.jpg", copy:"Neve, vinhos, desertos e cidades entre a Cordilheira e o Pacífico.", cta:"Explorar o Chile" },
  { name:"Peru", flag:"🇵🇪", href:"/peru", className:"country-peru", image:"/images/tours/img-302.jpg", copy:"História, cultura, gastronomia e caminhos que atravessam séculos.", cta:"Explorar o Peru" },
  { name:"Argentina", flag:"🇦🇷", href:"/argentina", className:"country-argentina", image:"/images/tours/img-330.jpg", copy:"Sabores, paisagens e experiências do tango ao fim do mundo.", cta:"Explorar a Argentina" },
];

export default function BrandHome() {
  return <><Header/><main>
    <section className="brand-hero">
      <div className="brand-hero-image"/><div className="brand-hero-copy"><p className="kicker light">TRÊS PAÍSES · UMA CURADORIA</p><h1>Os Andes<br/><em>começam aqui.</em></h1><p>Chile, Peru e Argentina em experiências criadas para o seu jeito de viajar — com cuidado local, organização e presença humana.</p><div className="hero-actions"><a className="btn gold" href="#destinos">Escolher meu destino</a><Link className="btn glass" href="/contato">Falar com um especialista</Link></div></div>
      <div className="brand-signature">Destino Andes<small>CHILE · PERU · ARGENTINA</small></div>
    </section>
    <section className="brand-intro section"><p className="kicker">AMÉRICA DO SUL, COM PROFUNDIDADE</p><h2>Uma agência.<br/>Três formas de viver os Andes.</h2><p>Não vendemos apenas destinos. Traduzimos cada país em jornadas bem pensadas, conectando paisagem, cultura, tempo e o seu jeito de viajar.</p></section>
    <section className="country-showcase" id="destinos">{countries.map(country=><Link href={country.href} className={`country-panel ${country.className}`} key={country.name}><img src={country.image} alt=""/><div className="country-panel-overlay"/><div className="country-panel-copy"><span>{country.flag}</span><p>DESTINO ANDES</p><h2>{country.name}</h2><em>{country.copy}</em><b>{country.cta} →</b></div></Link>)}</section>
    <section className="brand-values section"><div className="section-title"><div><p className="kicker">NOSSO JEITO DE CUIDAR</p><h2>Conhecimento local.<br/>Escolhas com intenção.</h2></div></div><div className="value-grid"><article><span>01</span><h3>Curadoria humana</h3><p>Recomendações construídas por pessoas que escutam, conhecem e acompanham.</p></article><article><span>02</span><h3>Especialização regional</h3><p>Três países conectados pelos Andes e uma leitura profunda de cada destino.</p></article><article><span>03</span><h3>Clareza em cada etapa</h3><p>Roteiros, valores, condições e suporte apresentados sem letras miúdas.</p></article><article><span>04</span><h3>Liberdade com segurança</h3><p>Viagens personalizadas sem perder a tranquilidade de uma operação organizada.</p></article></div></section>
    <section className="journey-banner"><div><p className="kicker light">DO PRIMEIRO PLANO À ÚLTIMA MEMÓRIA</p><h2>Você escolhe o horizonte.<br/>Nós cuidamos do caminho.</h2><Link className="btn gold" href="/contato">Começar meu planejamento</Link></div></section>
  </main><Footer/></>;
}
