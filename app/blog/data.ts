export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  country: "Chile";
  readTime: string;
  image: string;
  intro: string;
  sections: { title: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "melhor-epoca-para-viajar-ao-chile",
    title: "Melhor época para viajar ao Chile: escolha pela experiência",
    excerpt:
      "Neve, vinhos, litoral ou dias de céu aberto: descubra quando o Chile combina melhor com a viagem que você imagina.",
    category: "Planejamento",
    country: "Chile",
    readTime: "7 min",
    image: "/images/tours/img-003.jpg",
    intro:
      "O Chile se estende por mais de 4.000 quilômetros e muda completamente ao longo do ano. Em vez de procurar uma única época perfeita, comece pela pergunta certa: qual experiência você quer viver?",
    sections: [
      {
        title: "Inverno para encontrar a Cordilheira vestida de branco",
        body:
          "Entre junho e setembro, a neve transforma os Andes e aumenta a procura por Valle Nevado, Farellones e Portillo. É a época de reservar com antecedência, acompanhar as condições da montanha e deixar alguma flexibilidade no roteiro.",
      },
      {
        title: "Primavera e outono para equilibrar clima e movimento",
        body:
          "Temperaturas mais amenas e cidades menos concorridas favorecem passeios urbanos, vinícolas e combinações entre Santiago e o litoral. São estações excelentes para quem prefere viajar com mais calma.",
      },
      {
        title: "Verão para dias longos e grandes paisagens",
        body:
          "Os dias mais longos ampliam o tempo ao ar livre e favorecem litoral, lagos e Patagônia. Em Santiago, espere um clima geralmente seco e ensolarado, ideal para explorar a cidade e seus arredores.",
      },
    ],
  },
  {
    slug: "o-que-fazer-em-santiago",
    title: "O que fazer em Santiago: cidade, Cordilheira e vinhos",
    excerpt:
      "Uma seleção inteligente para viver a capital chilena sem escolher entre cultura, montanha e os sabores do Valle del Maipo.",
    category: "Santiago",
    country: "Chile",
    readTime: "8 min",
    image: "/images/tours/img-152.jpg",
    intro:
      "Santiago funciona melhor quando você olha além do centro: a capital reúne bairros históricos, gastronomia, mirantes e acesso privilegiado à Cordilheira e a alguns dos vinhedos mais tradicionais do Chile.",
    sections: [
      {
        title: "Comece pela cidade para entender o destino",
        body:
          "Plaza de Armas, La Moneda, Santa Lucía, Lastarria e o Parque Forestal ajudam a ler as diferentes camadas de Santiago. Um passeio com contexto transforma edifícios e bairros em uma introdução viva à história chilena.",
      },
      {
        title: "Reserve um dia para sentir a escala dos Andes",
        body:
          "A proximidade entre Santiago e a Cordilheira permite trocar o ritmo urbano por estradas panorâmicas, mirantes e centros de montanha. No inverno, a neve assume o protagonismo; em outras épocas, a paisagem continua impressionante.",
      },
      {
        title: "Inclua uma vinícola sem dirigir depois da degustação",
        body:
          "O Valle del Maipo reúne vinícolas históricas, jardins, caves e experiências de degustação próximas à capital. Um passeio organizado permite aproveitar os vinhos com tranquilidade e sem preocupação com o deslocamento.",
      },
    ],
  },
  {
    slug: "neve-no-chile-primeira-vez",
    title: "Neve no Chile pela primeira vez: o que realmente planejar",
    excerpt:
      "Roupa, horários, estrada e escolha do passeio: um guia direto para aproveitar a neve com conforto e sem expectativas erradas.",
    category: "Cordilheira",
    country: "Chile",
    readTime: "6 min",
    image: "/images/tours/img-042.jpg",
    intro:
      "Ver a Cordilheira coberta de neve costuma ser um dos momentos mais esperados da viagem. A experiência fica muito melhor quando você entende que montanha tem ritmo próprio e exige preparação.",
    sections: [
      {
        title: "Escolha a experiência, não apenas o destino",
        body:
          "Valle Nevado, Farellones, Portillo e os roteiros panorâmicos entregam propostas diferentes. Pense se o objetivo é contemplar, brincar na neve, conhecer um centro de esqui ou passar um dia inteiro em família.",
      },
      {
        title: "Vista-se em camadas e proteja as extremidades",
        body:
          "Roupa térmica, camada impermeável, luvas, meias adequadas e calçado com boa aderência fazem diferença. Óculos de sol e protetor solar continuam importantes mesmo em dias frios ou nublados.",
      },
      {
        title: "Aceite a flexibilidade como parte da montanha",
        body:
          "Neve, vento, trânsito e decisões das autoridades podem alterar horários, paradas ou até a operação. Escolha fornecedores que comuniquem as condições com clareza e priorizem segurança acima do roteiro.",
      },
    ],
  },
  {
    slug: "valparaiso-vina-del-mar-vinicolas",
    title: "Valparaíso, Viña del Mar e vinícolas: combine o Chile central",
    excerpt:
      "Arte, Pacífico e vinhos em experiências que revelam como paisagens muito diferentes convivem a pouca distância de Santiago.",
    category: "Litoral & vinhos",
    country: "Chile",
    readTime: "7 min",
    image: "/images/tours/img-113.jpg",
    intro:
      "Uma das melhores qualidades do Chile central é a possibilidade de atravessar universos diferentes em poucos dias: a energia de Santiago, os morros de Valparaíso, a elegância de Viña del Mar e os vales do vinho.",
    sections: [
      {
        title: "Valparaíso pede tempo para observar",
        body:
          "Escadarias, elevadores, arte urbana, casarões e vistas do porto formam uma cidade que não se resume a um único cartão-postal. Caminhar com contexto ajuda a entender sua identidade artística e portuária.",
      },
      {
        title: "Viña del Mar muda o ritmo do dia",
        body:
          "Jardins, orla e mar trazem uma pausa mais leve ao roteiro. Mesmo no verão, vale levar uma camada extra: manhãs nubladas e vento fazem parte da atmosfera do litoral central.",
      },
      {
        title: "Os vales do vinho completam a viagem",
        body:
          "Maipo, Casablanca e outros vales próximos reúnem paisagem, história e gastronomia. Escolha a vinícola pelo estilo de experiência que você procura, do tour clássico à degustação intimista ao pôr do sol.",
      },
    ],
  },
];

const legacySlugs: Record<string, string> = {
  "liberdade-de-alugar-um-carro": "o-que-fazer-em-santiago",
  "wise-como-levar-dinheiro": "neve-no-chile-primeira-vez",
};

export const getPost = (slug: string) => {
  const currentSlug = legacySlugs[slug] ?? slug;
  return posts.find((post) => post.slug === currentSlug);
};
