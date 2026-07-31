"use client";

import { FormEvent, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import type { Tour } from "./data";
import { categories, tours } from "./data";
import {
  getStoredLanguage,
  LANGUAGE_EVENT,
  LANGUAGE_STORAGE_KEY,
  translatePhrase,
  type Language,
} from "./i18n-runtime";

export const WHATSAPP_NUMBER = "56988333161";
export const WHATSAPP = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = "destinoandes.cl@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/destinoandes/";
export const FACEBOOK = "https://www.facebook.com/profile.php?id=61577088880597";
const money = new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 });
const moneyBrl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
type Country = "chile" | "peru" | "argentina";

const countries: { id: Country; flag: string; name: string; href: string }[] = [
  { id: "chile", flag: "🇨🇱", name: "Chile", href: "/chile" },
  { id: "peru", flag: "🇵🇪", name: "Peru", href: "/peru" },
  { id: "argentina", flag: "🇦🇷", name: "Argentina", href: "/argentina" },
];

const ui = {
  PT: { home:"Início", tours:"Passeios", blog:"Guia Chile", how:"Como funciona", contact:"Contato", doubts:"Dúvidas", talk:"Montar minha viagem", specialist:"Fale com um especialista", newsletter:"Receba nossos guias por e-mail", monthly:"Uma vez por mês, sem spam.", subscribe:"Assinar", subscribing:"Enviando...", placeholder:"seu@email.com", saved:"Inscrição recebida!", subscribeError:"Não foi possível cadastrar agora. Tente novamente.", privacy:"Seu e-mail será usado somente para a newsletter.", explore:"Explore", plan:"Planeje", allTours:"Todos os passeios", reserve:"Como reservar", faq:"Perguntas frequentes", payments:"Formas de pagamento", cancellation:"Alterações e cancelamento", documents:"Documentos necessários" },
  ES: { home:"Inicio", tours:"Tours", blog:"Guía Chile", how:"Cómo funciona", contact:"Contacto", doubts:"Dudas", talk:"Planificar mi viaje", specialist:"Habla con un especialista", newsletter:"Recibe nuestras guías por e-mail", monthly:"Una vez al mes, sin spam.", subscribe:"Suscribirme", subscribing:"Enviando...", placeholder:"tu@email.com", saved:"¡Suscripción recibida!", subscribeError:"No fue posible registrarte ahora. Inténtalo de nuevo.", privacy:"Tu e-mail será usado solamente para la newsletter.", explore:"Explora", plan:"Planifica", allTours:"Todos los tours", reserve:"Cómo reservar", faq:"Preguntas frecuentes", payments:"Formas de pago", cancellation:"Cambios y cancelación", documents:"Documentos necesarios" },
  EN: { home:"Home", tours:"Tours", blog:"Chile Guide", how:"How it works", contact:"Contact", doubts:"FAQ", talk:"Plan my trip", specialist:"Talk to a specialist", newsletter:"Get our travel guides by email", monthly:"Once a month, no spam.", subscribe:"Subscribe", subscribing:"Sending...", placeholder:"your@email.com", saved:"Subscription received!", subscribeError:"We could not register you right now. Please try again.", privacy:"Your email will only be used for the newsletter.", explore:"Explore", plan:"Plan", allTours:"All tours", reserve:"How to book", faq:"Frequently asked questions", payments:"Payment methods", cancellation:"Changes and cancellation", documents:"Required documents" },
};

function currentCountry(pathname: string): Country {
  if (pathname.startsWith("/peru")) return "peru";
  if (pathname.startsWith("/argentina")) return "argentina";
  return "chile";
}

function useLanguage() {
  const language = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(LANGUAGE_EVENT, onStoreChange);
      return () => window.removeEventListener(LANGUAGE_EVENT, onStoreChange);
    },
    getStoredLanguage,
    () => "PT" as Language,
  );
  const choose = (value: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, value);
    window.dispatchEvent(new Event(LANGUAGE_EVENT));
  };
  return { language, choose, labels: ui[language] };
}

export function CountrySwitcher({ compact=false }: { compact?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = countries.find(country => country.id === currentCountry(pathname)) ?? countries[0];
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!ref.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  const choose = (country: typeof countries[number]) => {
    window.localStorage.setItem("destino-andes-country", country.id);
    setOpen(false);
    router.push(country.href);
  };
  return <div className={`switcher-wrap ${compact?"compact":""}`} ref={ref}>
    <button className="country-switch" onClick={() => setOpen(!open)} aria-expanded={open} aria-haspopup="listbox"><span>{selected.flag}</span>{selected.name}<b>⌄</b></button>
    {open && <div className="country-menu" role="listbox">{countries.map(country=><button role="option" aria-selected={country.id===selected.id} key={country.id} className={country.id===selected.id?"selected":""} onClick={()=>choose(country)}><span>{country.flag}</span>{country.name}{country.id===selected.id&&<b>✓</b>}</button>)}</div>}
  </div>;
}

export function LanguageSwitcher({ compact=false }: { compact?: boolean }) {
  const { language, choose } = useLanguage();
  return <label className={`language-switch ${compact?"compact":""}`} aria-label="Idioma"><span>◎</span><select value={language} onChange={e=>choose(e.target.value as Language)}><option value="PT">PT</option><option value="ES">ES</option><option value="EN">EN</option></select></label>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const { language, labels } = useLanguage();
  const pathname = usePathname();
  const country = currentCountry(pathname);
  const countryHome = `/${country}`;
  const toursHref = country === "chile" ? "/chile/passeios" : `${countryHome}#experiencias`;
  const countryName = countries.find(c=>c.id===country)?.name;
  const messageByLanguage: Record<Language, string> = {
    PT: `Olá! Quero planejar minha viagem para ${countryName}.`,
    ES: `¡Hola! Quiero planificar mi viaje a ${countryName}.`,
    EN: `Hello! I would like to plan my trip to ${countryName}.`,
  };
  const message = encodeURIComponent(messageByLanguage[language]);
  return <>
    <div className="announcement">Chile · Peru · Argentina <span>•</span> Curadoria humana em português, espanhol e inglês</div>
    <header className="header">
      <Link className="brand wordmark" href="/" aria-label="Destino Andes, página inicial">
        <span>Destino Andes<small>CHILE · PERU · ARGENTINA</small></span>
      </Link>
      <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Abrir menu">☰</button>
      <nav className={open ? "nav nav-open" : "nav"}>
        <Link href={countryHome}>{labels.home}</Link>
        <Link href={toursHref}>{labels.tours}</Link>
        <Link href="/blog">{labels.blog}</Link>
        <Link href={country==="chile"?"/chile/como-funciona":"/contato"}>{labels.how}</Link>
        <Link href="/contato">{labels.contact}</Link>
        <div className="nav-switchers"><CountrySwitcher/><LanguageSwitcher/></div>
        <a className="nav-cta" href={`${WHATSAPP}?text=${message}`}>{labels.talk}</a>
      </nav>
    </header>
  </>;
}

function Newsletter() {
  const { labels } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          website: data.get("website"),
          page: window.location.href,
        }),
      });
      if (!response.ok) throw new Error("Newsletter request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  return <div className="newsletter"><div><span>{labels.newsletter}</span><p>{labels.monthly}</p></div>{status==="success"?<strong role="status">✓ {labels.saved}</strong>:<><form onSubmit={submit}><input required name="email" type="email" autoComplete="email" aria-label="E-mail" placeholder={labels.placeholder}/><input className="newsletter-trap" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"/><button type="submit" disabled={status==="sending"}>↗ {status==="sending"?labels.subscribing:labels.subscribe}</button></form><small>{labels.privacy}</small>{status==="error"&&<strong className="newsletter-error" role="alert">{labels.subscribeError}</strong>}</>}</div>;
}

export function SocialLinks({ className = "" }: { className?: string }) {
  const channels = [
    { href: INSTAGRAM, label: "Instagram", Icon: FaInstagram, external: true },
    { href: FACEBOOK, label: "Facebook", Icon: FaFacebookF, external: true },
    { href: `mailto:${EMAIL}`, label: "E-mail", Icon: FaEnvelope, external: false },
    { href: WHATSAPP, label: "WhatsApp", Icon: FaWhatsapp, external: true },
  ];

  return <div className={`social-links ${className}`.trim()}>{channels.map(({ href, label, Icon, external }) =>
    <a href={href} aria-label={label} title={label} key={label} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <Icon aria-hidden="true" />
    </a>
  )}</div>;
}

export function Footer() {
  const { labels } = useLanguage();
  return <footer>
    <div className="footer-grid expanded">
      <div><Link className="brand footer-brand wordmark" href="/"><span>Destino Andes<small>CHILE · PERU · ARGENTINA</small></span></Link><p>Experiências cuidadas por quem conhece cada caminho.</p><SocialLinks /></div>
      <div><strong>{labels.explore}</strong><Link href="/chile/passeios">{labels.allTours}</Link><Link href="/blog">{labels.blog}</Link><Link href="/contato">{labels.contact}</Link></div>
      <div><strong>{labels.plan}</strong><Link href="/chile/como-funciona">{labels.reserve}</Link><Link href="/chile/faq">{labels.faq}</Link><Link href="/chile/como-funciona#pagamento">{labels.payments}</Link><Link href="/chile/como-funciona#cancelamento">{labels.cancellation}</Link></div>
      <div className="footer-card"><span>ATENDIMENTO HUMANO</span><strong>{labels.specialist}</strong><SocialLinks className="footer-contact-icons" /></div>
    </div>
    <div className="footer-news"><Newsletter/><div className="footer-settings"><CountrySwitcher compact/><LanguageSwitcher compact/></div></div>
    <div className="copyright">© 2026 Destino Andes. Todos os direitos reservados.<span><Link href="/politica-de-privacidade">Privacidade</Link> · <Link href="/termos-de-uso">Termos de uso</Link> · <Link href="/chile/como-funciona#cancelamento">Cancelamento</Link></span></div>
  </footer>;
}

export function WhatsAppFloat() {
  const { language } = useLanguage();
  const messages: Record<Language, string> = {
    PT: "Olá! Quero saber mais sobre a Destino Andes.",
    ES: "¡Hola! Quiero saber más sobre Destino Andes.",
    EN: "Hello! I would like to learn more about Destino Andes.",
  };
  return <a className="whatsapp-float" href={`${WHATSAPP}?text=${encodeURIComponent(messages[language])}`} aria-label="Falar com a Destino Andes pelo WhatsApp" title="WhatsApp"><FaWhatsapp aria-hidden="true" /></a>;
}

export function SiteFrame({children}:{children:React.ReactNode}) {
  return <><Header/>{children}<Footer/><WhatsAppFloat/></>;
}

export function Price({ tour, compact = false }: { tour: Tour; compact?: boolean }) {
  if (tour.price.currency === "BRL") {
    return <div className={compact ? "price compact" : "price"}>
      <span>A partir de</span><strong>{moneyBrl.format(tour.price.brlReference)}</strong><em>por pessoa · consulte condições</em>
      {!compact && <small>Preço de referência publicado para as datas selecionadas. A proposta comercial confirma disponibilidade, inclusões, requisitos e condições antes da reserva.</small>}
    </div>;
  }
  return <div className={compact ? "price compact" : "price"}>
    <span>A partir de</span><strong>{money.format(tour.price.clp ?? 0)}</strong><em>≈ R$ {tour.price.brlReference} por pessoa</em>
    {!compact && <small>Valor aproximado em reais, sujeito à variação cambial. Consulte o preço atualizado antes da reserva. Referência atualizada em 06/01/2026.</small>}
  </div>;
}

export function TourCard({ tour }: { tour: Tour }) {
  const isPackage = tour.category.includes("Pacotes");
  return <article className={`tour-card${isPackage ? " package-card" : ""}`}>
    <Link className="card-image" href={`/chile/passeios/${tour.slug}`}><img src={tour.images[0]} alt={tour.name} loading="lazy" />{isPackage && <span className="package-badge">PACOTE 2026</span>}<span className="duration-badge">{tour.duration}</span></Link>
    <div className="card-body"><p className="kicker">{tour.eyebrow}</p><h3><Link href={`/chile/passeios/${tour.slug}`}>{tour.name}</Link></h3><p>{tour.short}</p>
      <div className="chips">{tour.category.slice(0,2).map(c => <span key={c}>{c}</span>)}</div>
      <Price tour={tour} compact/><Link className="text-link" href={`/chile/passeios/${tour.slug}`}>Ver experiência <span>→</span></Link>
    </div>
  </article>;
}

export function TourFilters() {
  const catalogMaxPrice = Math.ceil(Math.max(...tours.map((tour) => tour.price.brlReference)) / 250) * 250;
  const [category, setCategory] = useState("Todos");
  const [duration, setDuration] = useState("Todos");
  const [mode, setMode] = useState("Todos");
  const [season, setSeason] = useState("Todos");
  const [priceCap, setPriceCap] = useState(catalogMaxPrice);
  const filtered = useMemo(() => tours.filter(t =>
    (category === "Todos" || t.category.includes(category)) &&
    (duration === "Todos" || t.duration === duration) &&
    (mode === "Todos" || t.mode === mode) &&
    (season === "Todos" || t.season === season) && t.price.brlReference <= priceCap
  ), [category, duration, mode, season, priceCap]);
  return <div className="catalog-layout">
    <aside className="filters">
      <div className="filter-head"><strong>Filtrar experiências</strong><button onClick={() => {setCategory("Todos");setDuration("Todos");setMode("Todos");setSeason("Todos");setPriceCap(catalogMaxPrice)}}>Limpar</button></div>
      <fieldset><legend>Região ou estilo</legend>{categories.map(c => <label key={c}><input type="radio" name="category" checked={category===c} onChange={()=>setCategory(c)}/><span>{c}</span></label>)}</fieldset>
      <label className="select-label">Duração<select value={duration} onChange={e=>setDuration(e.target.value)}><option>Todos</option><option>Dia inteiro</option><option>Meio período</option><option>5 dias</option></select></label>
      <label className="select-label">Modalidade<select value={mode} onChange={e=>setMode(e.target.value)}><option>Todos</option><option>Compartilhado</option><option>Privativo</option></select></label>
      <label className="select-label">Disponibilidade<select value={season} onChange={e=>setSeason(e.target.value)}><option>Todos</option><option>Ano todo</option><option>Inverno</option><option>Datas selecionadas</option></select></label>
      <label className="range-label">Até <strong>{moneyBrl.format(priceCap)}</strong><input type="range" min="250" max={catalogMaxPrice} step="250" value={priceCap} onChange={e=>setPriceCap(Number(e.target.value))}/></label>
    </aside>
    <div><div className="results-head"><p><strong>{filtered.length}</strong> experiências encontradas</p><span>Preços por pessoa</span></div><div className="tour-grid">{filtered.map(t=><TourCard key={t.slug} tour={t}/>)}</div>{!filtered.length && <div className="empty">Nenhum passeio corresponde aos filtros. Tente ampliar a faixa de preço.</div>}</div>
  </div>;
}

export function Gallery({ tour }: { tour: Tour }) {
  const [active, setActive] = useState(0);
  return <div className="gallery"><button className="gallery-main" onClick={()=>setActive((active+1)%tour.images.length)} aria-label="Ver próxima foto"><img src={tour.images[active]} alt={`${tour.name} — foto ${active+1}`} style={{objectPosition:tour.imagePositions?.[active]??"50% 50%"}}/><span>{active+1} / {tour.images.length}</span></button><div className="thumbs">{tour.images.map((image,i)=><button key={image} className={i===active?"active":""} onClick={()=>setActive(i)}><img src={image} alt="" style={{objectPosition:tour.imagePositions?.[i]??"50% 50%"}}/></button>)}</div></div>;
}

export function FAQ({ items }: { items: [string,string][] }) {
  return <div className="faq-list">{items.map(([q,a])=><details key={q}><summary>{q}<span>＋</span></summary><p>{a}</p></details>)}</div>;
}

export function ContactForm() {
  const { language } = useLanguage();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const copy: Record<Language, { send: string; sending: string; sent: string; success: string; error: string; privacy: string }> = {
    PT: { send: "Enviar mensagem", sending: "Enviando com segurança...", sent: "Mensagem enviada ✓", success: "Recebemos sua mensagem. Nossa equipe responderá pelo e-mail informado.", error: "Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.", privacy: "Envio privado e seguro. Seus dados serão usados somente para responder ao seu contato." },
    ES: { send: "Enviar mensaje", sending: "Enviando de forma segura...", sent: "Mensaje enviado ✓", success: "Recibimos tu mensaje. Nuestro equipo responderá al e-mail informado.", error: "No fue posible enviar ahora. Inténtalo de nuevo o habla con nosotros por WhatsApp.", privacy: "Envío privado y seguro. Tus datos se utilizarán únicamente para responder a tu contacto." },
    EN: { send: "Send message", sending: "Sending securely...", sent: "Message sent ✓", success: "We received your message. Our team will reply to the email provided.", error: "We could not send it now. Please try again or contact us on WhatsApp.", privacy: "Private and secure submission. Your data will only be used to reply to your enquiry." },
  };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.get("name"), email: data.get("email"), message: data.get("message"), website: data.get("website"), page: window.location.href }),
      });
      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };
  const buttonText = status === "sending" ? copy[language].sending : status === "success" ? copy[language].sent : copy[language].send;
  return <form className="contact-form" onSubmit={submit} onChange={() => status !== "sending" && status !== "idle" && setStatus("idle")}><label>{translatePhrase("Nome", language)}<input name="name" autoComplete="name" minLength={2} maxLength={100} required/></label><label>E-mail<input name="email" type="email" autoComplete="email" maxLength={254} required/></label><label>{translatePhrase("Mensagem", language)}<textarea name="message" rows={6} minLength={10} maxLength={5000} required/></label><label className="contact-trap" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label><button className="btn dark" type="submit" disabled={status === "sending"}>{buttonText}</button>{status === "success" && <p className="contact-form-status success" role="status" aria-live="polite">{copy[language].success}</p>}{status === "error" && <p className="contact-form-status error" role="alert">{copy[language].error}</p>}<small>{copy[language].privacy}</small></form>;
}
