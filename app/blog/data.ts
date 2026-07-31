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
  sections: {
    title: string;
    body: string | string[];
    image?: string;
    imageAlt?: string;
    imageCaption?: string;
    highlight?: { label: string; text: string };
    bullets?: string[];
    subSections?: {
      title: string;
      body: string | string[];
      bullets?: string[];
    }[];
  }[];
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
    slug: "neve-no-chile-pela-primeira-vez",
    title: "Neve no Chile pela primeira vez: guia completo para sua viagem",
    excerpt:
      "Descubra quando ir, onde encontrar neve, como se vestir, o que levar e como viver a Cordilheira com conforto, segurança e tranquilidade.",
    category: "Cordilheira",
    country: "Chile",
    readTime: "15 min",
    image: "/images/tours/andes-panoramico-farellones-nevado.webp",
    keywords: [
      "neve no Chile pela primeira vez",
      "quando neva no Chile",
      "onde ver neve em Santiago",
      "roupa para neve",
      "Farellones",
      "Valle Nevado",
      "viagem ao Chile no inverno",
    ],
    intro:
      "O silêncio da montanha, o branco cobrindo os Andes e a sensação de tocar a neve pela primeira vez transformam um dia de inverno em memória para a vida inteira. Para que esse encontro seja tão bonito quanto você imagina, o segredo está em escolher a experiência certa e chegar preparado.",
    sections: [
      {
        title: "Quando tem neve no Chile?",
        body: [
          "A temporada de neve costuma acompanhar o inverno do Hemisfério Sul, geralmente entre junho e setembro. As datas de abertura dos centros, a quantidade acumulada e o funcionamento das atividades mudam conforme o clima de cada ano.",
          "Julho e agosto normalmente concentram as melhores possibilidades de encontrar a Cordilheira coberta de branco — e também a maior procura. Junho e setembro podem trazer valores mais interessantes e menos movimento, porém a neve tende a ser menos previsível.",
          "Santiago pode registrar bastante frio sem nevar na cidade. O contato com a neve acontece principalmente nas áreas mais altas da Cordilheira. Quanto mais flexível for o roteiro, maiores serão as chances de ajustar o passeio às condições reais da montanha.",
        ],
        highlight: {
          label: "RESPOSTA RÁPIDA",
          text: "Para aumentar as chances de ver neve, julho e agosto são os meses mais procurados. Ainda assim, neve é natureza: nenhuma data oferece garantia absoluta.",
        },
      },
      {
        title: "Onde ver neve perto de Santiago?",
        body:
          "Os destinos de montanha próximos à capital oferecem experiências diferentes. Antes de reservar, decida se você quer brincar, contemplar, fotografar, conhecer uma estação ou dedicar o dia aos esportes de inverno.",
        image: "/images/tours/andes-panoramico-estrada-valle-nevado.webp",
        imageAlt: "Estrada panorâmica entre as montanhas da região de Valle Nevado",
        imageCaption: "A subida aos Andes já faz parte da experiência — e exige transporte preparado para a montanha.",
        subSections: [
          {
            title: "Farellones: neve recreativa e clima de povoado",
            body: [
              "Farellones é um tradicional vilarejo de montanha e uma escolha muito procurada por famílias, casais e viajantes em seu primeiro encontro com a neve.",
              "O parque da região pode oferecer atrações recreativas como tubing e outras atividades de inverno. A operação varia conforme clima, temporada e disponibilidade, portanto confirme antecipadamente o que estará funcionando.",
            ],
          },
          {
            title: "Valle Nevado: estação, paisagem e esportes de inverno",
            body: [
              "Valle Nevado é uma das estações mais conhecidas da América do Sul, com estrutura para esqui e snowboard, restaurantes, aluguel de equipamentos e aulas.",
              "Quem deseja esquiar deve reservar um dia inteiro e considerar uma aula. Quem prefere contemplar precisa escolher um passeio panorâmico compatível com essa expectativa, pois conhecer a região não significa automaticamente ter acesso às pistas ou atividades.",
            ],
          },
          {
            title: "El Colorado e La Parva",
            body:
              "El Colorado reúne pistas de diferentes níveis e costuma interessar a quem quer aprender ou evoluir no esporte. La Parva combina atmosfera de vila e estrutura voltada principalmente ao esqui e snowboard. Em ambos os casos, confirme acesso, permanência e serviços incluídos.",
          },
          {
            title: "Portillo e Laguna del Inca",
            body:
              "Mais distante de Santiago e próximo à fronteira com a Argentina, Portillo recompensa o trajeto com uma das paisagens mais marcantes dos Andes. A Laguna del Inca e as montanhas formam um cenário inesquecível, mas a operação depende das condições da estrada e das decisões de segurança.",
          },
        ],
      },
      {
        title: "Preciso saber esquiar para conhecer a neve?",
        body: [
          "Não. Caminhar, brincar, fotografar e simplesmente contemplar a Cordilheira já formam uma experiência completa. Para muitas pessoas, principalmente na primeira viagem, essa é a forma mais gostosa de descobrir a neve.",
          "Se você quiser experimentar esqui ou snowboard, reserve tempo suficiente para aprender. Os primeiros movimentos exigem técnica, equilíbrio, equipamentos específicos e orientação. Uma aula torna o começo mais seguro e evita perder boa parte do dia tentando entender tudo sozinho.",
        ],
        highlight: {
          label: "NÃO CONFUNDA",
          text: "Passeio panorâmico, parque de neve e dia de esqui são experiências diferentes. Compare ingresso, roupa, equipamentos, aula, tempo de permanência e transporte antes de escolher.",
        },
      },
      {
        title: "Como se vestir para um dia na neve",
        body:
          "O segredo não é vestir o maior número possível de peças. São as camadas corretas que conservam o calor, controlam a umidade e protegem contra vento e neve.",
        image: "/images/tours/valle-nevado-infantil.webp",
        imageAlt: "Criança com roupa impermeável em Valle Nevado",
        imageCaption: "Roupa adequada deixa adultos e crianças livres para aproveitar sem desconforto.",
        subSections: [
          {
            title: "Primeira camada: proteção térmica",
            body:
              "Blusa e calça térmicas ficam em contato com a pele e ajudam a manter o corpo aquecido sem reter suor. Evite usar algodão como única camada: quando molha, demora a secar e aumenta a sensação de frio.",
          },
          {
            title: "Segunda camada: isolamento",
            body:
              "Fleece, lã ou materiais semelhantes retêm o calor corporal. A espessura depende da temperatura e do nível de atividade: quem ficará parado costuma sentir mais frio do que quem estará esquiando ou caminhando.",
          },
          {
            title: "Terceira camada: vento e umidade ficam do lado de fora",
            body:
              "Jaqueta e calça impermeáveis são essenciais para brincar, sentar ou praticar esportes na neve. Um casaco comum pode ser quente, mas perde eficiência se absorver água.",
          },
        ],
        bullets: [
          "Meias térmicas e uma meia extra",
          "Luvas impermeáveis",
          "Gorro e protetor de pescoço",
          "Óculos de sol com proteção UV",
          "Botas impermeáveis com solado aderente",
          "Protetor solar e protetor labial",
        ],
      },
      {
        title: "Comprar ou alugar roupa de neve?",
        body: [
          "Para quem não pretende usar esse vestuário com frequência, o aluguel costuma ser mais prático e econômico. Jaqueta, calça e botas impermeáveis podem ser alugadas em Santiago ou no caminho para a Cordilheira.",
          "Segunda pele, meias, gorro e protetor de pescoço são peças pessoais e geralmente valem a compra. Em dias movimentados, qualidade e tamanhos disponíveis nas lojas podem variar — principalmente para crianças —, então confirme as opções com antecedência.",
        ],
      },
      {
        title: "O que levar na mochila",
        body:
          "Leve apenas o que protege o seu conforto durante o dia. Na altitude, peso e esforço podem parecer maiores do que o habitual.",
        bullets: [
          "Água e um lanche leve",
          "Protetor solar e labial para reaplicação",
          "Óculos de sol",
          "Luvas e meias extras",
          "Medicamentos de uso pessoal",
          "Carregador portátil",
          "Saco impermeável para roupas molhadas",
          "Documentos, dinheiro ou cartão e lenços",
        ],
        highlight: {
          label: "DICA DO GUIA CHILE",
          text: "O frio reduz a duração da bateria. Leve o celular protegido da umidade e mantenha um carregador portátil à mão.",
        },
      },
      {
        title: "Sol, estrada e altitude: três cuidados que fazem diferença",
        body: [
          "A neve reflete a radiação solar. Mesmo em dias frios ou nublados, use protetor solar, protetor labial e óculos com proteção UV. Para esquiar ou praticar snowboard, prefira óculos específicos para a atividade.",
          "A subida inclui curvas acentuadas e condições que podem mudar rapidamente. No inverno, gelo, correntes nos pneus, interrupções e controle de trânsito pelas autoridades fazem parte da realidade. O trajeto deve ser realizado por profissionais acostumados à estrada e em veículos preparados.",
          "Em áreas elevadas, algumas pessoas sentem dor de cabeça, cansaço, tontura, náusea ou falta de ar. Hidrate-se, evite álcool no dia anterior, faça movimentos com calma e avise o guia imediatamente se não estiver se sentindo bem.",
        ],
        highlight: {
          label: "ATENÇÃO À SAÚDE",
          text: "Crianças, idosos, gestantes e pessoas com condições cardíacas ou respiratórias devem buscar orientação médica antes de visitar áreas de grande altitude.",
        },
      },
      {
        title: "Neve com crianças ou idosos: dá para aproveitar?",
        body: [
          "Com crianças, escolha atividades compatíveis com a idade, confirme limites de altura ou peso e leve peças extras. Elas costumam brincar diretamente na neve e molhar luvas, meias e calças com facilidade. Faça pausas e observe sinais de frio, cansaço ou desconforto.",
          "Para idosos, passeios panorâmicos com menor necessidade de caminhada podem ser mais apropriados. Confirme acessibilidade, estrutura para descanso, tempo ao ar livre e compatibilidade do roteiro com a mobilidade e as condições de saúde do viajante.",
        ],
        image: "/images/tours/valle-nevado-panorama.webp",
        imageAlt: "Vista panorâmica das montanhas e da estação de Valle Nevado",
        imageCaption: "A experiência ideal é aquela que respeita o ritmo de cada pessoa do grupo.",
      },
      {
        title: "Erros que podem estragar a primeira experiência",
        body:
          "Na neve, pequenos detalhes têm um impacto enorme. Evite decisões que parecem econômicas ou simples, mas comprometem conforto, segurança e tempo de passeio.",
        bullets: [
          "Ir com tênis de tecido, que molha e oferece pouca aderência",
          "Usar somente luvas de lã para brincar na neve",
          "Confiar em um casaco quente, porém não impermeável",
          "Esquecer protetor solar porque o dia está frio ou nublado",
          "Tentar encaixar muitas atividades no mesmo dia",
          "Escolher apenas pelo menor preço, sem comparar inclusões",
          "Reservar um passeio panorâmico esperando passar o dia esquiando",
        ],
      },
      {
        title: "Como tirar fotos bonitas sem deixar de viver o momento",
        body:
          "O branco da paisagem pede contraste e cuidado com a luz. Use roupas coloridas, limpe a lente, evite apontar diretamente para o sol e aproveite momentos espontâneos. Proteja o aparelho da umidade e lembre-se de que a bateria descarrega mais rápido no frio.",
        highlight: {
          label: "A FOTO MAIS IMPORTANTE",
          text: "Registre a experiência, mas guarde o celular por alguns minutos. A primeira neve merece ser vista, tocada e sentida — não apenas fotografada.",
        },
      },
      {
        title: "Quantos dias ficar em Santiago no inverno?",
        body: [
          "Quatro ou cinco dias permitem combinar a Cordilheira com outras experiências da capital e arredores. Uma viagem equilibrada reserva um dia para a cidade, um para a neve, um para vinícola, um para litoral ou novos bairros e uma margem de flexibilidade caso o clima exija mudanças.",
          "Quem deseja aprender a esquiar deve considerar mais tempo. Adaptar-se à altitude, fazer aula e aproveitar a estação com tranquilidade pode exigir dois ou mais dias de montanha.",
        ],
        bullets: [
          "1 dia para Santiago e seus principais bairros",
          "1 dia dedicado à neve",
          "1 dia de vinícola",
          "1 dia para litoral ou outras experiências",
          "1 data flexível para ajustes por clima e estrada",
        ],
      },
      {
        title: "A neve é garantida?",
        body: [
          "Não existe garantia absoluta quando o assunto é natureza. Intensidade, frequência e duração das nevascas variam, e a produção de neve artificial em algumas pistas não significa que toda a Cordilheira estará branca da mesma maneira.",
          "A melhor estratégia é viajar na janela de maior probabilidade, permanecer alguns dias em Santiago e manter flexibilidade. Informação atualizada e uma equipe que conheça a montanha ajudam a escolher a experiência mais coerente perto da data.",
        ],
        image: "/images/tours/portillo-hotel.webp",
        imageAlt: "Hotel Portillo cercado pela Cordilheira coberta de neve",
        imageCaption: "Cada temporada desenha os Andes de uma forma diferente — e essa imprevisibilidade faz parte da montanha.",
      },
      {
        title: "Vale a pena conhecer a neve no Chile?",
        body: [
          "Vale — e muito. A proximidade com o Brasil, a estrutura turística de Santiago e a imponência dos Andes fazem do Chile um destino especial para essa primeira experiência.",
          "Seja brincando, aprendendo a esquiar ou apenas contemplando, o dia fica melhor quando o passeio combina com o perfil do grupo, a roupa protege de verdade e o roteiro respeita clima, estrada e altitude.",
          "Sua primeira vez na neve merece cuidado em cada detalhe. Conte ao Guia Chile como você imagina esse momento: a Destino Andes aproxima as opções certas das suas datas, do seu ritmo e da experiência que você quer guardar para sempre.",
        ],
      },
    ],
  },
  {
    slug: "wise-como-levar-dinheiro-para-o-exterior",
    title: "Wise no exterior: como abrir, converter e usar na viagem",
    excerpt:
      "Um guia para criar e verificar a conta, converter moedas, preparar o cartão e organizar seus pagamentos internacionais antes do embarque.",
    category: "Dinheiro no exterior",
    country: "Chile",
    readTime: "10 min",
    image: "/images/blog/wise-exterior-hero.jpg",
    keywords: [
      "Wise no exterior",
      "como abrir conta Wise",
      "como usar Wise em viagem",
      "cartão Wise internacional",
      "dinheiro no exterior",
      "converter real para moeda estrangeira",
    ],
    intro:
      "O voo está comprado, o roteiro está pronto e a mala começa a ganhar forma. Mas uma pergunta ainda pode virar preocupação se ficar para a última hora: como levar, converter e usar o dinheiro no exterior com segurança?",
    sections: [
      {
        title: "Sua viagem financeira começa antes do embarque",
        body: [
          "Cadastro pendente, documento recusado, cartão que ainda não chegou ou conversão feita às pressas no aeroporto são problemas evitáveis. A tranquilidade nasce quando cada etapa é resolvida com antecedência.",
          "A Wise pode fazer parte da estratégia para pagamentos e conversões internacionais, mas não precisa ser a única forma de levar dinheiro. Distribuir os recursos reduz a dependência de um cartão, aplicativo, bateria ou conexão com a internet.",
          "O objetivo deste guia é ajudar você a criar a conta, concluir a verificação, adicionar dinheiro, converter moedas, preparar o cartão e embarcar com um plano alternativo.",
        ],
        highlight: {
          label: "COMECE CEDO",
          text: "Resolva cadastro, documentos e cartão semanas antes da viagem. A fila de embarque não é o lugar para descobrir uma pendência financeira.",
        },
      },
      {
        title: "Antes de abrir sua conta Wise",
        body: [
          "A conta permite manter e converter moedas em uma mesma plataforma. A disponibilidade de recursos, moedas, cartão, limites e tarifas varia conforme o país de residência, o perfil e as regras vigentes.",
          "Consulte sempre os valores apresentados na tela da operação. Tarifas financeiras e tributos podem mudar, portanto uma tabela antiga encontrada na internet não deve substituir a informação atual exibida no aplicativo ou site oficial.",
        ],
        bullets: [
          "Confirme se conta e cartão estão disponíveis para seu país de residência",
          "Consulte tarifas, tributos, limites e prazos atuais",
          "Separe outro meio de pagamento para emergências",
          "Mantenha uma pequena quantia em espécie quando fizer sentido para o destino",
        ],
      },
      {
        title: "Como abrir uma conta",
        body:
          "O cadastro pode começar pelo site ou aplicativo. A sequência muda conforme o perfil, mas normalmente envolve dados de contato, país de residência e informações pessoais.",
        bullets: [
          "Acesse o link de indicação e escolha a opção de criar a conta",
          "Informe seu e-mail e selecione o tipo de conta adequado",
          "Escolha o país de residência e informe um telefone ativo",
          "Digite o código de verificação recebido",
          "Crie uma senha forte e exclusiva",
          "Preencha os dados exatamente como aparecem nos documentos",
        ],
        highlight: {
          label: "SEGURANÇA",
          text: "Use uma senha exclusiva e acesse a conta somente pelo aplicativo ou endereço oficial. Desconfie de mensagens que peçam códigos, senhas ou acesso remoto ao aparelho.",
        },
      },
      {
        title: "Não deixe a verificação para a última hora",
        body: [
          "Para liberar determinados recursos, a plataforma pode solicitar verificação de identidade e, em alguns casos, endereço ou informações adicionais. Os documentos aceitos e o tempo de análise dependem das instruções apresentadas para cada usuário.",
          "Uma fotografia pode ser recusada, um dado pode precisar de correção ou uma nova comprovação pode ser solicitada. Faça o processo com margem suficiente para resolver qualquer pendência sem comprometer a viagem.",
        ],
      },
      {
        title: "Como adicionar dinheiro e converter moedas",
        body: [
          "No aplicativo, escolha a opção de adicionar dinheiro, informe o valor e a moeda e selecione um método de pagamento disponível para sua conta. Quando habilitada, também pode existir a possibilidade de transferir recursos usando dados fornecidos pela própria plataforma.",
          "Antes de confirmar, revise câmbio, tarifas, tributos, valor final do saldo e titularidade. A tela exibida naquele momento é a referência válida para a operação.",
          "Comece com um valor menor. Essa primeira movimentação ajuda a conhecer o fluxo, observar prazos e confirmar se os dados estão corretos antes de converter uma parcela maior do orçamento.",
        ],
        bullets: [
          "Confira o valor debitado e quanto chegará na moeda escolhida",
          "Revise nome do titular e dados da transferência",
          "Planeje conversões por etapas, sem tentar adivinhar o melhor dia do câmbio",
          "Guarde comprovantes e acompanhe a confirmação no aplicativo",
        ],
      },
      {
        title: "Solicite, ative e teste o cartão",
        body: [
          "Se o cartão estiver disponível para o seu perfil, a solicitação aparecerá na área correspondente. O processo pode exigir confirmação de endereço, verificação adicional ou outra etapa indicada na plataforma.",
          "Depois do recebimento, siga as instruções de ativação e faça uma compra simples antes da viagem. Esse teste confirma que senha, aproximação e demais recursos estão funcionando enquanto você ainda pode resolver tudo com calma.",
        ],
        bullets: [
          "Confira senha e limites disponíveis",
          "Ative notificações de todas as transações",
          "Verifique compatibilidade com sua carteira digital",
          "Faça uma compra de teste antes de embarcar",
          "Saiba como bloquear o cartão pelo aplicativo",
        ],
      },
      {
        title: "Como usar a Wise no exterior",
        body: [
          "Ao pagar em uma maquininha ou sacar em um caixa eletrônico, prefira a cobrança na moeda local do destino. No Chile, escolha pesos chilenos; em países da zona do euro, escolha euros.",
          "Se o terminal oferecer converter o valor para reais, leia as condições com atenção. Essa conversão pode ser feita pelo estabelecimento ou pelo operador do caixa, usando câmbio e custos próprios. O valor em reais parece familiar, mas nem sempre é a escolha mais econômica.",
          "Saques podem envolver limites e tarifas da Wise, além de uma cobrança independente do operador do caixa eletrônico. Leia todas as telas antes de confirmar e cancele se o custo não estiver claro.",
        ],
        image: "/images/blog/wise-exterior-pagamento.jpg",
        imageAlt: "Viajante usando cartão internacional em uma maquininha durante a viagem",
        imageCaption: "Antes de aproximar o cartão, confirme a moeda da cobrança e o valor final.",
        highlight: {
          label: "NO CHILE",
          text: "Prefira pagar em pesos chilenos. Evite selecionar reais apenas porque o valor parece mais fácil de compreender.",
        },
      },
      {
        title: "Cuidados importantes durante a viagem",
        body:
          "Uma estratégia financeira precisa continuar funcionando se o cartão for bloqueado, o celular ficar sem internet ou um estabelecimento aceitar apenas dinheiro. Prepare a redundância antes de sair do Brasil.",
        bullets: [
          "Leve outro meio de pagamento separado do cartão principal",
          "Não concentre todo o orçamento em um único aplicativo",
          "Proteja a conta com senha e recursos de segurança disponíveis",
          "Mantenha as notificações de transações ativadas",
          "Evite redes Wi-Fi públicas para movimentações financeiras",
          "Guarde comprovantes de conversões, transferências e saques",
          "Salve os canais oficiais de suporte antes do embarque",
        ],
      },
      {
        title: "Checklist Wise antes de viajar",
        body:
          "Cinco minutos de revisão antes de fechar a mala podem evitar horas de preocupação longe de casa.",
        bullets: [
          "Conta criada e cadastro verificado",
          "Documentos aprovados e dados pessoais conferidos",
          "Primeira adição e conversão realizadas",
          "Cartão recebido, ativado e testado",
          "Senha, notificações e limites revisados",
          "Carteira digital configurada, quando compatível",
          "Meio de pagamento alternativo guardado separadamente",
          "Canais oficiais de suporte salvos",
        ],
        highlight: {
          label: "LEMBRETE FINAL",
          text: "Recursos, moedas, limites, tarifas e elegibilidade podem mudar. Confirme as condições atuais diretamente na Wise antes de cada operação.",
        },
      },
      {
        title: "Organize o dinheiro agora e aproveite a viagem depois",
        body: [
          "Uma boa estratégia não depende de prever perfeitamente o câmbio. Ela depende de conhecer a ferramenta, testar o cartão, distribuir os recursos e saber o que fazer se o plano principal falhar.",
          "Prepare a parte financeira com o mesmo cuidado dedicado ao roteiro. Assim, você desembarca com mais controle e pode concentrar a energia no que realmente importa: viver cada experiência da viagem.",
        ],
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
  "wise-como-levar-dinheiro": "wise-como-levar-dinheiro-para-o-exterior",
  "neve-no-chile-primeira-vez": "neve-no-chile-pela-primeira-vez",
};

export const getPost = (slug: string) => {
  const currentSlug = legacySlugs[slug] ?? slug;
  return posts.find((post) => post.slug === currentSlug);
};
