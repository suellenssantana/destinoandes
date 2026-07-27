export type Tour = {
  slug: string;
  name: string;
  eyebrow: string;
  short: string;
  description: string;
  category: string[];
  duration: "Dia inteiro" | "Meio período";
  mode: "Compartilhado" | "Privativo";
  season: string;
  price: { clp: number; brlReference: number; updatedAt: string; referenceOnly: true };
  times: string;
  pickup: string;
  itinerary: string[];
  included: string[];
  notIncluded: string[];
  requirements: string[];
  climate: string;
  cancellation: string;
  images: string[];
};

const img = (name: string) => `/images/tours/${name}`;
const shared = {
  mode: "Compartilhado" as const,
  pickup: "Retirada em hospedagens localizadas na área de busca de Santiago. Endereços fora do perímetro são combinados previamente.",
  included: ["Transporte em veículo turístico", "Motorista-guia em português e espanhol", "Coordenação e suporte da Destino Andes"],
  notIncluded: ["Alimentação e bebidas", "Ingressos e atividades opcionais", "Gorjetas e despesas pessoais"],
  requirements: ["Documento de identificação", "Calçado confortável", "Água, protetor solar e agasalho em camadas"],
  cancellation: "Cancelamento gratuito até 72 horas antes, salvo ingressos nominativos ou serviços de terceiros. Após esse prazo, consulte as condições da reserva.",
};
const price = (clp: number, brlReference: number) => ({ clp, brlReference, updatedAt: "2026-01-06", referenceOnly: true as const });

export const tours: Tour[] = [
  {
    ...shared, slug: "portillo", name: "Portillo", eyebrow: "Cordilheira & laguna",
    short: "Uma jornada cênica pela Cordilheira até Portillo e a cinematográfica Laguna del Inca.",
    description: "Suba pelos caminhos históricos dos Andes, contemple curvas, vales e picos nevados e chegue ao mais antigo centro de esqui da América do Sul. Portillo combina paisagem, história e a beleza azul-profunda da Laguna del Inca.",
    category: ["Neve e montanha", "Natureza e família"], duration: "Dia inteiro", season: "Inverno",
    price: price(50000, 323), times: "Saída a partir das 5h30 • retorno aproximado às 17h30",
    itinerary: ["Retirada na hospedagem", "Estrada Los Caracoles e mirantes", "Centro de esqui Portillo", "Laguna del Inca", "Tempo livre para contemplação e almoço", "Retorno a Santiago"],
    climate: "Passeio sujeito às condições da estrada, neve, vento e orientações das autoridades de montanha.",
    images: [img("img-012.jpg"), img("img-003.jpg"), img("img-016.jpg")],
  },
  {
    ...shared, slug: "andes-panoramico", name: "Andes Panorâmico", eyebrow: "Neve sem complicação",
    short: "Mirantes, montanhas e paradas fotográficas em um roteiro panorâmico pela Cordilheira.",
    description: "Uma experiência leve para sentir a grandiosidade dos Andes sem precisar esquiar. O percurso privilegia paisagens, mirantes e tempo para aproveitar a neve quando as condições permitem.",
    category: ["Neve e montanha", "Natureza e família"], duration: "Dia inteiro", season: "Inverno",
    price: price(35000, 226), times: "Saída a partir das 6h • retorno aproximado às 17h",
    itinerary: ["Retirada na hospedagem", "Curva 40 e mirantes da Cordilheira", "Parada panorâmica na neve", "Tempo livre para fotos", "Povoado de Farellones", "Retorno a Santiago"],
    climate: "A rota e as paradas podem mudar por segurança, fluxo da estrada ou disponibilidade de neve.",
    images: [img("img-042.jpg"), img("img-019.jpg"), img("img-053.jpg")],
  },
  {
    ...shared, slug: "valle-nevado", name: "Valle Nevado", eyebrow: "O alto dos Andes",
    short: "Conheça um dos centros de neve mais famosos do Chile, a 3.000 metros de altitude.",
    description: "Valle Nevado entrega a experiência clássica do inverno chileno: montanhas amplas, estrutura de centro de esqui e cenários inesquecíveis. O passeio é ideal para conhecer, fotografar e aproveitar atividades opcionais.",
    category: ["Neve e montanha"], duration: "Dia inteiro", season: "Inverno",
    price: price(35000, 226), times: "Saída a partir das 5h30 • retorno aproximado às 18h",
    itinerary: ["Retirada na hospedagem", "Subida pela estrada de montanha", "Paradas panorâmicas", "Chegada a Valle Nevado", "Tempo livre e atividades opcionais", "Retorno a Santiago"],
    climate: "Operação condicionada à abertura da estrada e às regras do centro de montanha.",
    images: [img("img-007.jpg"), img("img-056.jpg"), img("img-068.jpg")],
  },
  {
    ...shared, slug: "farellones", name: "Farellones", eyebrow: "Diversão na neve",
    short: "Um dia descontraído no povoado de montanha e no parque de neve mais querido das famílias.",
    description: "Farellones é a escolha de quem quer brincar na neve. Além do vilarejo, o parque oferece atividades opcionais como tubing e teleféricos, conforme funcionamento e disponibilidade.",
    category: ["Neve e montanha", "Natureza e família"], duration: "Dia inteiro", season: "Inverno",
    price: price(35000, 226), times: "Saída a partir das 5h30 • retorno aproximado às 18h",
    itinerary: ["Retirada na hospedagem", "Subida à Cordilheira", "Povoado de Farellones", "Tempo livre no parque", "Atividades opcionais", "Retorno a Santiago"],
    climate: "Neve e atrações variam conforme clima e operação do parque. Ingressos não estão incluídos.",
    images: [img("img-090.jpg"), img("img-091.jpg"), img("img-097.jpg")],
  },
  {
    ...shared, slug: "vina-del-mar-valparaiso", name: "Viña del Mar + Valparaíso", eyebrow: "Pacífico & patrimônio",
    short: "Do colorido de Valparaíso à elegância costeira de Viña del Mar em um dia completo.",
    description: "Descubra dois ícones do litoral central: os morros artísticos, elevadores e história portuária de Valparaíso e os jardins, praias e cartões-postais de Viña del Mar.",
    category: ["Litoral"], duration: "Dia inteiro", season: "Ano todo",
    price: price(38000, 245), times: "Saída a partir das 6h30 • retorno aproximado às 18h",
    itinerary: ["Retirada na hospedagem", "Congresso Nacional e porto", "Plaza Sotomayor e Cerro Alegre", "Escadarias e arte urbana", "Viña del Mar e Museu Fonck", "Relógio de Flores e orla", "Retorno a Santiago"],
    climate: "No litoral, manhãs nubladas e vento são comuns. Leve uma camada leve mesmo no verão.",
    images: [img("img-113.jpg"), img("img-116.jpg"), img("img-119.jpg")],
  },
  {
    ...shared, slug: "zerando-sunset-dj", name: "Sunset nos Andes com DJ", eyebrow: "Capital em movimento",
    short: "Os principais marcos de Santiago em um roteiro compacto, histórico e cheio de contexto.",
    description: "Caminhe pela história da capital chilena, dos edifícios cívicos aos bairros que revelam a vida contemporânea de Santiago. Uma ótima introdução para os primeiros dias de viagem.",
    category: ["Santiago"], duration: "Meio período", season: "Inverno",
    price: price(197000, 1265), times: "Encontro às 9h • duração média de 4 horas",
    pickup: "Ponto de encontro central informado na confirmação. Transporte de ida e retorno à hospedagem não incluído.",
    itinerary: ["Plaza de Armas", "Antigo Congresso e Calle Bandera", "Bolsa de Valores", "Palacio de La Moneda", "Paris-Londres", "Cerro Santa Lucía", "Barrio Lastarria e Parque Forestal"],
    climate: "Tour urbano operado com sol ou chuva leve. Em eventos oficiais, o percurso pode ser ajustado.",
    images: [img("img-152.jpg"), img("img-153.jpg"), img("img-156.jpg")],
  },
  {
    ...shared, slug: "city-tour-santiago", name: "City Tour Santiago", eyebrow: "Capital em movimento",
    short: "Os principais marcos de Santiago em um roteiro compacto, histórico e cheio de contexto.",
    description: "Caminhe pela história da capital chilena, dos edifícios cívicos aos bairros que revelam a vida contemporânea de Santiago. Uma ótima introdução para os primeiros dias de viagem.",
    category: ["Santiago"], duration: "Meio período", season: "Ano todo",
    price: price(25000, 161), times: "Encontro às 9h • duração média de 4 horas",
    pickup: "Ponto de encontro central informado na confirmação. Transporte de ida e retorno à hospedagem não incluído.",
    itinerary: ["Plaza de Armas", "Antigo Congresso e Calle Bandera", "Bolsa de Valores", "Palacio de La Moneda", "Paris-Londres", "Cerro Santa Lucía", "Barrio Lastarria e Parque Forestal"],
    climate: "Tour urbano operado com sol ou chuva leve. Em eventos oficiais, o percurso pode ser ajustado.",
    images: [img("img-152.jpg"), img("img-153.jpg"), img("img-156.jpg")],
  },
  {
    ...shared, slug: "safari", name: "Safari", eyebrow: "Natureza para todas as idades",
    short: "Um encontro divertido com animais em uma experiência especialmente querida por famílias.",
    description: "Viva um dia diferente no parque Safari, com áreas de observação e experiências opcionais de aproximação. Um roteiro de ritmo leve para crianças e adultos.",
    category: ["Natureza e família"], duration: "Dia inteiro", season: "Ano todo",
    price: price(65000, 419), times: "Saída a partir das 7h • retorno aproximado às 18h",
    itinerary: ["Retirada na hospedagem", "Viagem até Rancagua", "Entrada no parque", "Percursos e áreas de observação", "Tempo para alimentação", "Retorno a Santiago"],
    climate: "Algumas experiências podem ser suspensas por chuva, calor intenso ou bem-estar dos animais.",
    images: [img("img-192.jpg"), img("img-193.jpg"), img("img-199.jpg")],
  },
  {
    ...shared, slug: "concha-y-toro-tradicional", name: "Concha y Toro Tradicional", eyebrow: "Clássico do vinho chileno",
    short: "Jardins, história, adegas e degustação na vinícola mais conhecida do Chile.",
    description: "Conheça a origem de rótulos emblemáticos, passeie pelos jardins de Pirque e descubra a lenda do Casillero del Diablo em uma visita guiada com degustação.",
    category: ["Vinícolas"], duration: "Meio período", season: "Ano todo",
    price: price(40000, 258), times: "Turnos pela manhã ou tarde • cerca de 5 horas com deslocamentos",
    itinerary: ["Retirada na hospedagem", "Viagem até Pirque", "Jardins e antiga residência", "Vinhedos e adegas", "Casillero del Diablo", "Degustação tradicional", "Retorno"],
    climate: "A visita ocorre em áreas abertas e caves frescas; leve uma camada adicional.",
    images: [img("img-218.jpg"), img("img-219.jpg"), img("img-222.jpg")],
  },
  {
    ...shared, slug: "concha-y-toro-marques", name: "Concha y Toro Marqués", eyebrow: "Degustação superior",
    short: "Uma leitura mais sofisticada da Concha y Toro, com seleção especial de vinhos.",
    description: "A experiência Marqués amplia o tour clássico com uma degustação premium e mais profundidade sobre terroirs, métodos e rótulos da casa.",
    category: ["Vinícolas"], duration: "Meio período", season: "Ano todo",
    price: price(60000, 387), times: "Turnos sujeitos a reserva • cerca de 5 horas com deslocamentos",
    itinerary: ["Retirada na hospedagem", "Jardins e vinhedos", "Adegas históricas", "Casillero del Diablo", "Degustação seleção Marqués", "Loja da vinícola", "Retorno"],
    climate: "Atividade operada durante todo o ano; caves mantêm temperatura baixa.",
    images: [img("img-225.jpg"), img("img-240.jpg"), img("img-241.jpg")],
  },
  {
    ...shared, slug: "santa-rita", name: "Santa Rita", eyebrow: "Vinho & história",
    short: "Patrimônio, jardins e tradição vinícola aos pés da Cordilheira.",
    description: "Uma experiência que une a história da independência chilena à produção de vinhos. Santa Rita encanta por seus jardins, arquitetura e caves centenárias.",
    category: ["Vinícolas"], duration: "Meio período", season: "Ano todo",
    price: price(45000, 290), times: "Turnos pela manhã ou tarde • cerca de 6 horas",
    itinerary: ["Retirada na hospedagem", "Vinhedos e jardins", "Bodega dos 120 Patriotas", "Processo de produção", "Degustação guiada", "Tempo livre na loja", "Retorno"],
    climate: "Inclui caminhada externa e ambientes climatizados; use calçado confortável.",
    images: [img("img-260.jpg"), img("img-261.jpg"), img("img-264.jpg")],
  },
  {
    ...shared, slug: "undurraga", name: "Undurraga", eyebrow: "Tradição desde 1885",
    short: "Um tour acolhedor por jardins, vinhedos e caves históricas no Valle del Maipo.",
    description: "A Undurraga oferece uma visita próxima e didática, com bons vinhos, jardins agradáveis e uma narrativa completa sobre a vitivinicultura chilena.",
    category: ["Vinícolas"], duration: "Meio período", season: "Ano todo",
    price: price(45000, 290), times: "Turnos pela manhã ou tarde • cerca de 5 horas",
    itinerary: ["Retirada na hospedagem", "Jardins e vinhedos", "Sala de aromas", "Caves subterrâneas", "História dos povos originários", "Degustação guiada", "Retorno"],
    climate: "Passeio disponível o ano inteiro; temperatura nas caves é mais fresca.",
    images: [img("img-247.jpg"), img("img-267.jpg"), img("img-283.jpg")],
  },
  {
    ...shared, slug: "alyan", name: "Alyan", eyebrow: "Vinho ao pôr do sol",
    short: "Uma experiência intimista entre vinhedos, com degustação e entardecer andino.",
    description: "A Alyan Family Wines combina hospitalidade familiar e paisagens do Valle del Maipo. O horário de fim de tarde transforma a visita em uma memória especialmente bonita.",
    category: ["Vinícolas"], duration: "Meio período", season: "Ano todo",
    price: price(45000, 290), times: "Saída no início da tarde • retorno à noite",
    itinerary: ["Retirada na hospedagem", "Recepção na vinícola", "Caminhada pelos vinhedos", "Visita à área de produção", "Degustação guiada", "Pôr do sol entre as parreiras", "Retorno"],
    climate: "A experiência ao ar livre depende da luz e do clima; leve agasalho para o anoitecer.",
    images: [img("img-282.jpg"), img("img-286.jpg"), img("img-289.jpg")],
  },
  {
    ...shared, slug: "templo-bahai-cousino-macul", name: "Templo Bahá’í + Cousiño Macul", eyebrow: "Arquitetura & vinho",
    short: "Contemplação aos pés dos Andes e uma das vinícolas familiares mais tradicionais do país.",
    description: "Um roteiro singular que conecta a arquitetura luminosa do Templo Bahá’í às caves históricas da Cousiño Macul, criada em 1856 no Valle del Maipo.",
    category: ["Santiago", "Vinícolas"], duration: "Dia inteiro", season: "Ano todo",
    price: price(50000, 323), times: "Saída a partir das 9h • retorno aproximado às 17h",
    itinerary: ["Retirada na hospedagem", "Visita ao Templo Bahá’í", "Tempo de contemplação e mirante", "Cousiño Macul", "Vinhedos e caves", "Degustação guiada", "Retorno"],
    climate: "O templo pode restringir acesso por eventos. A área externa está sujeita ao clima.",
    images: [img("img-302.jpg"), img("img-303.jpg"), img("img-306.jpg")],
  },
  {
    ...shared, slug: "isla-negra-algarrobo-undurraga", name: "Isla Negra + Algarrobo + Undurraga", eyebrow: "Poesia, mar & vinho",
    short: "Um dia completo que atravessa três universos chilenos: Neruda, Pacífico e vinhedos.",
    description: "Visite o litoral de Isla Negra, contemple Algarrobo e finalize entre jardins, caves e taças na Undurraga. Um dos roteiros mais completos para conhecer diferentes paisagens em um único dia.",
    category: ["Litoral", "Vinícolas"], duration: "Dia inteiro", season: "Ano todo",
    price: price(72000, 465), times: "Saída a partir das 6h30 • retorno aproximado às 20h",
    itinerary: ["Retirada na hospedagem", "Isla Negra e arredores da casa de Neruda", "Orla de Algarrobo", "Tempo livre para almoço", "Vinícola Undurraga", "Tour e degustação", "Retorno a Santiago"],
    climate: "Litoral com possibilidade de vento e neblina; a degustação segue regras da vinícola.",
    images: [img("img-326.jpg"), img("img-330.jpg"), img("img-333.jpg")],
  },
];

export const categories = ["Todos", "Neve e montanha", "Santiago", "Vinícolas", "Litoral", "Natureza e família"];
export const getTour = (slug: string) => tours.find((tour) => tour.slug === slug);
