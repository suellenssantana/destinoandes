import { FAQ, Footer, Header } from "../../components";

const faqs: [string,string][] = [
  ["Como funcionam os passeios compartilhados?", "Você divide o veículo e a experiência com outros viajantes. A rota e os horários seguem a programação confirmada, com retirada dentro da área de busca."],
  ["Posso montar um passeio privativo?", "Sim. Ajustamos ritmo, pontos de interesse, horários e tipo de veículo ao perfil do seu grupo, conforme viabilidade operacional."],
  ["Quando minha reserva está confirmada?", "Depois da validação de disponibilidade, aceite das condições e confirmação do pagamento combinado."],
  ["Os valores em reais são fixos?", "Não. São referências sujeitas ao câmbio. O valor principal é em pesos chilenos e deve ser confirmado antes da reserva."],
];
export default function HowItWorks() {
  return <><Header/><main><section className="inner-hero editorial-hero"><p className="kicker light">PLANEJE COM CLAREZA</p><h1>Como funciona</h1><p>Informação transparente para você reservar com confiança e viajar com leveza.</p></section>
  <section className="editorial section">
    <nav className="toc"><a href="#compartilhados">Compartilhados</a><a href="#privativos">Privativos</a><a href="#reserva">Reserva</a><a href="#pagamento">Pagamento</a><a href="#cancelamento">Cancelamento</a><a href="#busca">Área de busca</a><a href="#documentos">Documentos</a><a href="#clima">Clima</a></nav>
    <div className="editorial-content">
      <article id="compartilhados"><span>01</span><div><h2>Passeios compartilhados</h2><p>Uma opção prática e econômica para descobrir o Chile em pequenos grupos. A programação possui rota e horários definidos, e as retiradas são organizadas por região para tornar o percurso eficiente.</p></div></article>
      <article id="privativos"><span>02</span><div><h2>Privativos e personalizados</h2><p>Seu grupo, seu ritmo. Podemos adaptar duração, paradas, idioma, veículo e interesses — de experiências românticas a viagens em família ou roteiros corporativos.</p></div></article>
      <article id="reserva"><span>03</span><div><h2>Como fazer uma reserva</h2><p>Escolha uma experiência, envie suas datas e número de viajantes pelo WhatsApp. Confirmamos operação, disponibilidade, endereço de retirada e valor atualizado antes de qualquer pagamento.</p></div></article>
      <article id="pagamento"><span>04</span><div><h2>Formas de pagamento</h2><p>As opções disponíveis, moeda, prazo e eventuais taxas são informados no atendimento. Valores em reais no site são apenas referenciais e variam conforme o câmbio.</p></div></article>
      <article id="cancelamento"><span>05</span><div><h2>Alterações e cancelamento</h2><p>Em regra, cancelamentos com ao menos 72 horas permitem reembolso, exceto valores já comprometidos com ingressos ou fornecedores. Cada confirmação apresenta as condições específicas.</p></div></article>
      <article id="busca"><span>06</span><div><h2>Área de busca em Santiago</h2><p>A retirada costuma contemplar hospedagens em Providencia, Las Condes, Vitacura e áreas centrais selecionadas. Endereços fora do perímetro recebem ponto de encontro ou orçamento adicional.</p></div></article>
      <article id="documentos"><span>07</span><div><h2>Documentos necessários</h2><p>Tenha documento válido para ingresso no Chile e identificação durante o passeio. Atividades específicas podem solicitar dados pessoais ou autorização para menores.</p></div></article>
      <article id="clima"><span>08</span><div><h2>Condições climáticas e operacionais</h2><p>Montanha, litoral e vinhedos possuem condições próprias. Segurança, fechamento de estrada, neve, vento ou decisões do atrativo podem alterar a rota. Nesses casos, apresentamos a melhor alternativa possível.</p></div></article>
      <div className="faq-section"><p className="kicker">PERGUNTAS RÁPIDAS</p><h2>Antes de confirmar</h2><FAQ items={faqs}/></div>
    </div>
  </section></main><Footer/></>;
}
