export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  country: "Chile";
  readTime: string;
  image: string;
  intro: string;
  keywords?: string[];
  sections: { title: string; body: string | string[] }[];
};

export const posts: Post[] = [
  {
    slug: "melhor-epoca-para-viajar-ao-chile",
    title: "Melhor época para viajar ao Chile: guia completo por estação",
    excerpt:
      "Descubra quando viajar para ver neve, conhecer Santiago, visitar vinícolas, explorar o Atacama ou viver a Patagônia no melhor momento.",
    category: "Planejamento",
    country: "Chile",
    readTime: "12 min",
    image: "/images/library/santiago/santiago-005.webp",
    keywords: [
      "melhor época para viajar ao Chile",
      "quando neva no Chile",
      "neve em Santiago",
      "Chile no inverno",
      "Atacama melhor época",
      "Patagônia chilena",
      "vindima no Chile",
    ],
    intro:
      "Neve na Cordilheira, vinhedos em época de colheita, Santiago sob dias ensolarados, céu estrelado no Atacama ou trilhas na Patagônia: o Chile oferece viagens muito diferentes ao longo do ano. A melhor época começa pelo Chile que você quer viver.",
    sections: [
      {
        title: "Resposta rápida: qual é a melhor época para viajar ao Chile?",
        body: [
          "Para uma primeira viagem equilibrada, março, abril, outubro e novembro costumam funcionar muito bem. As temperaturas tendem a ser mais agradáveis em Santiago, a procura costuma ser menor do que nas férias e é possível combinar cidade, litoral, vinícolas e, dependendo do roteiro, o Atacama.",
          "Se o objetivo principal for neve, priorize julho e agosto. Para a vindima, observe fevereiro e março. A Patagônia oferece mais horas de luz e maior disponibilidade de trilhas entre novembro e março. Já o Atacama pode ser visitado o ano inteiro, embora outono e primavera entreguem um equilíbrio especialmente interessante.",
        ],
      },
      {
        title: "Verão, de dezembro a fevereiro: dias longos e natureza em destaque",
        body: [
          "O verão chileno traz dias mais longos, tempo geralmente seco na região central e temperaturas elevadas em Santiago. É uma ótima estação para explorar a capital, visitar Valparaíso e Viña del Mar, aproveitar o litoral e organizar roteiros que conectem diferentes regiões.",
          "Na Patagônia e na Região dos Lagos, os meses mais quentes ampliam as possibilidades de trilhas, navegações e atividades ao ar livre. Isso também significa alta temporada: janeiro e fevereiro exigem antecedência para passagens, hospedagens, parques e experiências concorridas.",
          "Quem não gosta de calor intenso deve planejar os passeios urbanos para o começo da manhã ou fim da tarde. Mesmo no verão, leve uma camada adicional para o litoral e para destinos de altitude, onde o vento e a queda de temperatura mudam rapidamente a sensação térmica.",
        ],
      },
      {
        title: "Fevereiro e março: o momento especial das vindimas",
        body: [
          "O fim do verão marca a colheita das uvas em importantes vales chilenos. Maipo, Casablanca, Colchagua, Aconcágua e Curicó ganham experiências ligadas à produção do vinho, gastronomia e celebrações locais.",
          "As datas variam conforme o clima, a maturação das uvas e a programação de cada vinícola. Se a vindima for uma prioridade, confirme o calendário antes de fechar a viagem. Fora dos eventos, os tours regulares continuam sendo uma excelente forma de conhecer vinhedos, caves e rótulos chilenos.",
        ],
      },
      {
        title: "Outono, de março a maio: clima agradável e viagem mais tranquila",
        body: [
          "O outono é uma das épocas mais versáteis para conhecer o Chile central. Santiago fica mais confortável para caminhadas, os vales do vinho ganham tons dourados e o litoral costuma receber menos visitantes do que durante as férias de verão.",
          "No Atacama, março, abril e maio podem oferecer uma boa combinação de temperaturas, paisagens abertas e menor pressão turística. A amplitude térmica continua importante: dias com sol forte podem terminar em noites bastante frias.",
          "É uma estação de transição, portanto a mala deve funcionar em camadas. Também vale acompanhar feriados e eventos, que podem alterar horários e disponibilidade mesmo fora da alta temporada tradicional.",
        ],
      },
      {
        title: "Inverno, de junho a agosto: a temporada mais desejada para ver neve",
        body: [
          "No inverno, a Cordilheira assume o protagonismo. Valle Nevado, Farellones, El Colorado, La Parva e Portillo estão entre os destinos mais procurados por quem deseja ver neve, esquiar, praticar snowboard ou simplesmente viver a montanha pela primeira vez.",
          "Julho e agosto costumam ser as janelas mais desejadas, mas nenhuma data oferece garantia absoluta de neve. O volume acumulado, a abertura das pistas, o funcionamento dos parques e as condições das estradas dependem do clima de cada temporada.",
          "Santiago não permanece coberta de neve durante o inverno. Na maior parte das viagens, o contato com a neve acontece nas áreas de montanha, acessadas a partir da capital. Por isso, transporte adequado, roupas em camadas e flexibilidade para mudanças de rota são partes essenciais do planejamento.",
        ],
      },
      {
        title: "Qual mês escolher para ver neve no Chile?",
        body: [
          "Junho pode marcar o começo da temporada, porém a quantidade de neve ainda varia bastante. Julho reúne férias escolares, maior procura e boas chances de encontrar os centros de montanha em operação. Agosto costuma combinar neve acumulada com alta demanda. Setembro pode manter condições de inverno em altitude, mas a neve tende a ficar menos previsível conforme a primavera se aproxima.",
          "Para famílias e viajantes que querem brincar na neve, uma experiência recreativa pode ser mais adequada do que um dia focado em esqui. Para esportes de inverno, confirme abertura de pistas, aluguel de equipamentos, aulas e regras do centro escolhido. Em qualquer caso, acompanhe clima, estradas e orientações do receptivo perto da data.",
        ],
      },
      {
        title: "Primavera, de setembro a novembro: roteiros variados e temperaturas amenas",
        body: [
          "A primavera traz dias gradualmente mais longos, parques floridos e temperaturas convidativas para explorar Santiago a pé. É um ótimo período para combinar a capital com Valparaíso, Viña del Mar e os vales do vinho.",
          "Atacama, trekking e Região dos Lagos também entram bem em roteiros de primavera. Setembro ainda é uma transição e pode conservar neve nas áreas mais altas, mas ela não deve ser tratada como garantida. Outubro e novembro são especialmente interessantes para quem procura diversidade de passeios e menor movimento do que nas férias de verão.",
        ],
      },
      {
        title: "Melhor época por destino: Santiago, Atacama e Patagônia",
        body: [
          "Santiago funciona durante todo o ano. Março a maio e setembro a novembro favorecem passeios urbanos; o inverno é ideal para combinar a cidade com a Cordilheira; e o verão oferece dias longos, embora possa ser quente e seco.",
          "San Pedro de Atacama também recebe visitantes o ano inteiro. Outono e primavera costumam entregar bom equilíbrio, mas noites frias, sol intenso e altitude fazem parte da experiência em qualquer mês. Alguns fenômenos climáticos podem alterar passeios, sobretudo em áreas elevadas.",
          "Na Patagônia chilena, novembro a março é a janela mais procurada para trilhas e natureza, devido às temperaturas menos rigorosas e aos dias mais longos. Ainda assim, vento, chuva e mudanças rápidas de tempo são normais: planejamento e equipamento adequado continuam indispensáveis.",
        ],
      },
      {
        title: "Quando viajar para economizar e encontrar menos movimento?",
        body: [
          "Janeiro, fevereiro e julho concentram grande parte da procura em destinos específicos: verão e Patagônia no começo do ano, neve e férias escolares no inverno. Nessas épocas, reservar cedo amplia as opções de hospedagem, transporte e passeios.",
          "Março, abril, outubro e novembro costumam oferecer uma relação interessante entre clima, disponibilidade e movimento. Maio e setembro também podem ser vantajosos, mas são meses de transição: vale aceitar maior variação de temperatura e ajustar as expectativas sobre neve ou atividades sazonais.",
          "Preço baixo não deve ser o único critério. Uma economia deixa de valer a pena se a atração que motivou a viagem estiver fechada ou fora de temporada. Primeiro defina a experiência indispensável; depois procure a melhor data dentro dessa janela.",
        ],
      },
      {
        title: "Checklist para transformar a época certa no roteiro certo",
        body: [
          "Defina as experiências prioritárias, escolha regiões compatíveis com a quantidade de dias e evite tentar atravessar um país tão extenso em um roteiro curto. Confirme horários, funcionamento, requisitos de altitude e políticas de alteração antes de reservar.",
          "Monte uma mala em camadas, considere proteção solar mesmo no frio e mantenha alguma flexibilidade para montanha, neve e fenômenos naturais. Em períodos disputados, antecipe hospedagem e passeios; fora deles, verifique se as atrações desejadas estarão operando.",
          "O melhor mês não é igual para todos. Quando datas, orçamento, ritmo e interesses conversam entre si, o Chile deixa de ser apenas uma lista de lugares e se transforma em uma viagem realmente bem planejada — com o Guia Chile sempre à mão.",
        ],
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
    image: "/images/library/santiago/santiago-003.webp",
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
    image: "/images/library/farellones/farellones-008.webp",
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
    image: "/images/library/valparaiso-vina-del-mar/valparaiso-vina-del-mar-023.webp",
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
