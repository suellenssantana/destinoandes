"use client";

import { useEffect } from "react";
import { generatedTranslations } from "./generated-translations";

export type Language = "PT" | "ES" | "EN";

export const LANGUAGE_STORAGE_KEY = "destino-andes-language";
export const LANGUAGE_EVENT = "destino-language";

const htmlLanguages: Record<Language, string> = {
  PT: "pt-BR",
  ES: "es",
  EN: "en",
};

const pageMetadata: Record<Language, { title: string; description: string }> = {
  PT: {
    title: "Destino Andes | Chile, Peru e Argentina",
    description:
      "Viagens e experiências personalizadas no Chile, Peru e Argentina, com curadoria humana e atendimento em português, espanhol e inglês.",
  },
  ES: {
    title: "Destino Andes | Chile, Perú y Argentina",
    description:
      "Viajes y experiencias personalizadas en Chile, Perú y Argentina, con curaduría humana y atención en portugués, español e inglés.",
  },
  EN: {
    title: "Destino Andes | Chile, Peru and Argentina",
    description:
      "Personalized travel and experiences in Chile, Peru and Argentina, with human curation and service in Portuguese, Spanish and English.",
  },
};

type TranslatedLanguage = Exclude<Language, "PT">;
type Dictionary = Record<string, string>;

const dictionaries = generatedTranslations as unknown as Record<TranslatedLanguage, Dictionary>;
const reverseDictionaries: Record<TranslatedLanguage, Dictionary> = {
  ES: Object.fromEntries(Object.entries(dictionaries.ES).map(([source, value]) => [value, source])),
  EN: Object.fromEntries(Object.entries(dictionaries.EN).map(([source, value]) => [value, source])),
};

const glossaryRows: Array<[string, string, string]> = [
  ["área de busca", "zona de recogida", "pickup area"],
  ["ponto de encontro", "punto de encuentro", "meeting point"],
  ["tempo livre", "tiempo libre", "free time"],
  ["pôr do sol", "puesta de sol", "sunset"],
  ["o ano inteiro", "todo el año", "all year"],
  ["todo o ano", "todo el año", "all year"],
  ["alta temporada", "temporada alta", "high season"],
  ["meios de pagamento", "medios de pago", "payment methods"],
  ["dados pessoais", "datos personales", "personal data"],
  ["proteção de dados", "protección de datos", "data protection"],
  ["propriedade intelectual", "propiedad intelectual", "intellectual property"],
  ["prestadores de serviços", "prestadores de servicios", "service providers"],
  ["agência", "agencia", "agency"],
  ["agendamento", "programación", "scheduling"],
  ["agasalho", "abrigo", "warm clothing"],
  ["água", "agua", "water"],
  ["alimentação", "alimentación", "food"],
  ["alterações", "cambios", "changes"],
  ["antes", "antes", "before"],
  ["apenas", "solo", "only"],
  ["aproximado", "aproximado", "approximate"],
  ["arquitetura", "arquitectura", "architecture"],
  ["atendimento", "atención", "service"],
  ["atividades", "actividades", "activities"],
  ["autoridades", "autoridades", "authorities"],
  ["bagagem", "equipaje", "luggage"],
  ["beleza", "belleza", "beauty"],
  ["caminhada", "caminata", "walk"],
  ["caminho", "camino", "path"],
  ["caminhos", "caminos", "paths"],
  ["cancelamento", "cancelación", "cancellation"],
  ["cidade", "ciudad", "city"],
  ["cidades", "ciudades", "cities"],
  ["clima", "clima", "weather"],
  ["completo", "completo", "complete"],
  ["condições", "condiciones", "conditions"],
  ["confirmação", "confirmación", "confirmation"],
  ["confirmado", "confirmado", "confirmed"],
  ["confortável", "cómodo", "comfortable"],
  ["conhecimento", "conocimiento", "knowledge"],
  ["consulta", "consulta", "inquiry"],
  ["contemplação", "contemplación", "contemplation"],
  ["contratação", "contratación", "contracting"],
  ["crianças", "niños", "children"],
  ["cuidado", "cuidado", "care"],
  ["cultura", "cultura", "culture"],
  ["dados", "datos", "data"],
  ["degustação", "degustación", "tasting"],
  ["desconto", "descuento", "discount"],
  ["despesas", "gastos", "expenses"],
  ["destino", "destino", "destination"],
  ["destinos", "destinos", "destinations"],
  ["detalhes", "detalles", "details"],
  ["disponibilidade", "disponibilidad", "availability"],
  ["documentação", "documentación", "documentation"],
  ["documento", "documento", "document"],
  ["duração", "duración", "duration"],
  ["endereço", "dirección", "address"],
  ["estrada", "carretera", "road"],
  ["estradas", "carreteras", "roads"],
  ["experiência", "experiencia", "experience"],
  ["experiências", "experiencias", "experiences"],
  ["família", "familia", "family"],
  ["fechamento", "cierre", "closure"],
  ["fornecedores", "proveedores", "suppliers"],
  ["fotografias", "fotografías", "photographs"],
  ["gratuito", "gratuito", "free"],
  ["grupo", "grupo", "group"],
  ["hospedagem", "alojamiento", "accommodation"],
  ["horários", "horarios", "times"],
  ["identificação", "identificación", "identification"],
  ["idioma", "idioma", "language"],
  ["informações", "información", "information"],
  ["ingressos", "entradas", "tickets"],
  ["jardins", "jardines", "gardens"],
  ["lagos", "lagos", "lakes"],
  ["liberdade", "libertad", "freedom"],
  ["loja", "tienda", "shop"],
  ["mar", "mar", "sea"],
  ["melhor", "mejor", "best"],
  ["melhores", "mejores", "best"],
  ["montanha", "montaña", "mountain"],
  ["montanhas", "montañas", "mountains"],
  ["motorista", "conductor", "driver"],
  ["natureza", "naturaleza", "nature"],
  ["neve", "nieve", "snow"],
  ["opção", "opción", "option"],
  ["opcionais", "opcionales", "optional"],
  ["organização", "organización", "organization"],
  ["pagamento", "pago", "payment"],
  ["paisagens", "paisajes", "landscapes"],
  ["passeio", "tour", "tour"],
  ["passeios", "tours", "tours"],
  ["passageiro", "pasajero", "passenger"],
  ["passageiros", "pasajeros", "passengers"],
  ["percurso", "recorrido", "route"],
  ["planejamento", "planificación", "planning"],
  ["praias", "playas", "beaches"],
  ["preço", "precio", "price"],
  ["preços", "precios", "prices"],
  ["privacidade", "privacidad", "privacy"],
  ["produção", "producción", "production"],
  ["reagendamento", "reprogramación", "rescheduling"],
  ["reembolso", "reembolso", "refund"],
  ["região", "región", "region"],
  ["regras", "reglas", "rules"],
  ["reserva", "reserva", "booking"],
  ["reservar", "reservar", "book"],
  ["retirada", "recogida", "pickup"],
  ["retorno", "regreso", "return"],
  ["roteiro", "itinerario", "itinerary"],
  ["roteiros", "itinerarios", "itineraries"],
  ["segurança", "seguridad", "safety"],
  ["serviço", "servicio", "service"],
  ["serviços", "servicios", "services"],
  ["suporte", "apoyo", "support"],
  ["temporada", "temporada", "season"],
  ["termos", "términos", "terms"],
  ["transporte", "transporte", "transportation"],
  ["usuário", "usuario", "user"],
  ["valores", "valores", "prices"],
  ["veículo", "vehículo", "vehicle"],
  ["veículos", "vehículos", "vehicles"],
  ["viagem", "viaje", "trip"],
  ["viagens", "viajes", "trips"],
  ["viajante", "viajero", "traveler"],
  ["viajantes", "viajeros", "travelers"],
  ["vinhedos", "viñedos", "vineyards"],
  ["vinho", "vino", "wine"],
  ["vinhos", "vinos", "wines"],
  ["visita", "visita", "visit"],
  ["visite", "visita", "visit"],
  ["você", "tú", "you"],
  ["vocês", "ustedes", "you"],
  ["não", "no", "not"],
  ["também", "también", "also"],
  ["quando", "cuando", "when"],
  ["onde", "donde", "where"],
  ["durante", "durante", "during"],
  ["depois", "después", "after"],
  ["sempre", "siempre", "always"],
  ["conforme", "según", "according to"],
  ["através", "a través", "through"],
  ["entre", "entre", "between"],
  ["desde", "desde", "since"],
  ["sobre", "sobre", "about"],
  ["para", "para", "for"],
  ["com", "con", "with"],
  ["sem", "sin", "without"],
  ["antes de", "antes de", "before"],
  ["de acordo com", "de acuerdo con", "according to"],
];

const glossaries: Record<TranslatedLanguage, Array<[string, string]>> = {
  ES: glossaryRows.map(([pt, es]): [string, string] => [pt, es]).sort((a, b) => b[0].length - a[0].length),
  EN: glossaryRows.map(([pt, , en]): [string, string] => [pt, en]).sort((a, b) => b[0].length - a[0].length),
};

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function preserveCase(source: string, translated: string) {
  if (source === source.toLocaleUpperCase("pt-BR")) return translated.toLocaleUpperCase();
  if (source[0] === source[0]?.toLocaleUpperCase("pt-BR")) {
    return translated[0]?.toLocaleUpperCase() + translated.slice(1);
  }
  return translated;
}

function translateWithGlossary(value: string, language: TranslatedLanguage) {
  let translated = value;
  for (const [source, target] of glossaries[language]) {
    const pattern = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(source)}(?![\\p{L}\\p{N}])`, "giu");
    translated = translated.replace(pattern, (match) => preserveCase(match, target));
  }
  return translated;
}

export function getStoredLanguage(): Language {
  if (typeof window === "undefined") return "PT";
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "ES" || stored === "EN" ? stored : "PT";
}

function canonicalPhrase(value: string) {
  return reverseDictionaries.ES[value] ?? reverseDictionaries.EN[value] ?? value;
}

export function translatePhrase(value: string, language: Language) {
  const canonical = canonicalPhrase(value);
  if (language === "PT") return canonical;
  return dictionaries[language][canonical] ?? translateWithGlossary(canonical, language);
}

function translateValue(value: string, language: Language) {
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const content = value.trim();
  if (!content) return value;
  return `${leading}${translatePhrase(content, language)}${trailing}`;
}

const originalText = new WeakMap<Text, string>();
const appliedText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();

function translateTextNode(node: Text, language: Language) {
  const current = node.nodeValue ?? "";
  const lastApplied = appliedText.get(node);
  if (!originalText.has(node) || (lastApplied !== undefined && current !== lastApplied)) {
    originalText.set(node, translateValue(current, "PT"));
  }
  const translated = translateValue(originalText.get(node) ?? current, language);
  appliedText.set(node, translated);
  if (translated !== node.nodeValue) node.nodeValue = translated;
}

function translateElement(element: Element, language: Language) {
  let originals = originalAttributes.get(element);
  if (!originals) {
    originals = new Map();
    originalAttributes.set(element, originals);
  }
  for (const attribute of ["aria-label", "placeholder", "title", "alt"]) {
    const value = element.getAttribute(attribute);
    if (!value) continue;
    if (!originals.has(attribute)) originals.set(attribute, translateValue(value, "PT"));
    const translated = translateValue(originals.get(attribute) ?? value, language);
    if (translated !== value) element.setAttribute(attribute, translated);
  }
}

function translateTree(root: Node, language: Language) {
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root as Text, language);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) return;

  if (root.nodeType === Node.ELEMENT_NODE) translateElement(root as Element, language);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    if (current.nodeType === Node.TEXT_NODE) translateTextNode(current as Text, language);
    else translateElement(current as Element, language);
    current = walker.nextNode();
  }
}

function applyMetadata(language: Language) {
  document.documentElement.lang = htmlLanguages[language];
  document.title = pageMetadata[language].title;
  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = pageMetadata[language].description;
  const ogLocale = document.querySelector<HTMLMetaElement>('meta[property="og:locale"]');
  if (ogLocale) ogLocale.content = language === "PT" ? "pt_BR" : language === "ES" ? "es_ES" : "en_US";
}

export function LanguageRuntime() {
  useEffect(() => {
    let language = getStoredLanguage();
    let translating = false;

    const apply = () => {
      translating = true;
      applyMetadata(language);
      translateTree(document.body, language);
      queueMicrotask(() => {
        translating = false;
      });
    };

    const observer = new MutationObserver((mutations) => {
      if (translating) return;
      translating = true;
      for (const mutation of mutations) {
        if (mutation.type === "characterData") translateTree(mutation.target, language);
        for (const node of mutation.addedNodes) translateTree(node, language);
      }
      queueMicrotask(() => {
        translating = false;
      });
    });

    const onLanguageChange = () => {
      language = getStoredLanguage();
      apply();
    };

    apply();
    observer.observe(document.body, { childList: true, characterData: true, subtree: true });
    window.addEventListener(LANGUAGE_EVENT, onLanguageChange);
    window.addEventListener("storage", onLanguageChange);

    return () => {
      observer.disconnect();
      window.removeEventListener(LANGUAGE_EVENT, onLanguageChange);
      window.removeEventListener("storage", onLanguageChange);
    };
  }, []);

  return null;
}
