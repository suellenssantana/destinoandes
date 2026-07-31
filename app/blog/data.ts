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
    slug: "como-escolher-seguro-viagem",
    title: "Como escolher o seguro viagem ideal: guia completo",
    excerpt:
      "Aprenda a comparar cobertura médica, bagagem, esportes, condições preexistentes, atendimento e exclusões para viajar realmente protegido.",
    category: "Planejamento",
    country: "Chile",
    readTime: "13 min",
    image: "/images/blog/como-escolher-seguro-viagem.jpg",
    keywords: [
      "como escolher seguro viagem",
      "melhor seguro viagem",
      "seguro viagem internacional",
      "seguro viagem Chile",
      "seguro viagem para neve",
      "cobertura seguro viagem",
      "seguro viagem para gestante",
      "seguro viagem esportes",
      "Seguros Promo",
    ],
    intro:
      "Passagens compradas, hospedagem reservada e roteiro organizado. Tudo parece pronto — até surgir a pergunta que muita gente deixa para o final: qual seguro viagem contratar? A resposta não está automaticamente no plano mais barato nem no mais caro, mas na proteção que acompanha o destino, as pessoas e as experiências reais da viagem.",
    sections: [
      {
        title: "Seguro viagem não é só uma exigência: é uma rede de apoio",
        body: [
          "Mesmo uma viagem cuidadosamente planejada pode ser atravessada por uma indisposição, um acidente, uma bagagem extraviada ou a necessidade de atendimento longe de casa. No exterior, um episódio aparentemente simples pode gerar despesas relevantes e exigir decisões rápidas em outro idioma.",
          "O seguro existe para oferecer as coberturas e os serviços previstos no plano contratado. Despesas médicas, hospitalares e odontológicas costumam formar a base; traslado, regresso sanitário, bagagem e interrupção variam conforme o produto.",
          "Mais do que cumprir uma eventual regra do destino, contratar bem significa saber a quem recorrer, como acionar o atendimento e até onde vai a proteção quando algo foge do roteiro.",
        ],
        highlight: {
          label: "RESPOSTA RÁPIDA",
          text: "Cruze seis informações antes de olhar o preço: destino, duração, idade, condições de saúde, atividades previstas e limite financeiro das coberturas.",
        },
      },
      {
        title: "1. Comece pelo destino — não pelo preço",
        body: [
          "O mesmo limite de cobertura não oferece necessariamente o mesmo nível de proteção em todos os países. Custos médicos, moeda, duração da estadia, deslocamentos e regras de entrada mudam a análise.",
          "Na Europa, confira a validade territorial e as regras aplicáveis ao seu caso. Nos Estados Unidos e em outros destinos com atendimento médico caro, considere limites mais amplos. Na América do Sul, a proximidade com o Brasil não elimina riscos de saúde, acidentes, cancelamentos ou bagagem.",
          "Para o Chile, pense no roteiro completo: dias em Santiago, estradas de montanha, altitude no Atacama, neve, trilhas e qualquer extensão para outras regiões ou países.",
        ],
        bullets: [
          "A cobertura vale em todos os países e conexões do roteiro?",
          "As datas incluem ida, volta e todo o período fora do Brasil?",
          "O limite médico é coerente com o custo do destino?",
          "A moeda da cobertura foi considerada na comparação?",
          "Viagens longas respeitam o limite máximo de dias do plano?",
        ],
      },
      {
        title: "2. Considere quem está viajando",
        body: [
          "Duas pessoas no mesmo voo e no mesmo hotel podem precisar de proteções diferentes. Idade, gravidez, condições preexistentes, mobilidade e uso contínuo de medicamentos alteram a comparação.",
          "Não presuma que uma necessidade está coberta porque o plano menciona assistência médica. Procure o limite específico, as condições de utilização, eventual carência e exclusões. Se a informação não estiver clara, confirme antes do pagamento.",
        ],
        bullets: [
          "Confira limites de idade e eventuais preços diferenciados",
          "Verifique a definição e a cobertura de condições preexistentes",
          "Para gestantes, confirme período gestacional, idade, eventos e limites aceitos",
          "Considere as necessidades de crianças, idosos e pessoas com mobilidade reduzida",
          "Informe corretamente tudo o que for solicitado na contratação",
        ],
      },
      {
        title: "3. Faça o seguro acompanhar o que você fará",
        image: "/images/library/valle-nevado/valle-nevado-021.webp",
        imageAlt: "Montanhas nevadas do Valle Nevado, no Chile",
        imageCaption:
          "Neve, esqui, snowboard, trilhas e altitude pedem uma leitura específica das atividades aceitas pelo plano.",
        body: [
          "Uma viagem urbana tem riscos diferentes de um roteiro com esqui, snowboard, mergulho, trilhas em altitude ou outras atividades de aventura. Viajar para ver neve não é a mesma coisa que entrar em uma pista para praticar esporte.",
          "Antes de contratar, confirme se a modalidade aparece expressamente nas condições, se exige acompanhamento profissional e qual limite vale para acidentes durante a prática. Uma expressão genérica como “cobertura para esportes” não substitui a lista de atividades aceitas.",
        ],
        bullets: [
          "A atividade planejada aparece expressamente nas condições?",
          "Existe cobertura específica ou adicional para esportes?",
          "Há exigência de guia, instrutor ou equipamento de segurança?",
          "Qual limite é aplicado ao atendimento decorrente da atividade?",
          "Competições e prática profissional estão excluídas?",
        ],
      },
      {
        title: "4. Compare as coberturas que realmente importam",
        body: [
          "Despesas médicas e hospitalares costumam ser o ponto de partida, mas não devem ser analisadas isoladamente. O valor exibido é um limite máximo sujeito aos eventos, regras e condições do plano — não um saldo livre para qualquer despesa.",
          "Compare a moeda da cobertura, o custo do atendimento no destino, a duração da viagem e as necessidades dos viajantes. Depois observe proteções complementares que façam sentido para aquele roteiro.",
        ],
        bullets: [
          "Despesas médicas, hospitalares e odontológicas",
          "Traslado médico e regresso sanitário",
          "Atendimento relacionado a condições preexistentes",
          "Cobertura farmacêutica, quando prevista",
          "Regresso antecipado e interrupção de viagem",
          "Extravio, atraso ou dano à bagagem",
          "Cancelamento, atraso de voo e perda de conexão, conforme o plano",
        ],
        highlight: {
          label: "NÃO COMPARE SÓ O NÚMERO MAIOR",
          text: "Dois planos com limites parecidos podem ter franquias, exclusões, moedas e formas de atendimento completamente diferentes.",
        },
      },
      {
        title: "5. Entenda como o atendimento funciona",
        body: [
          "Em algumas situações, o viajante aciona a central e recebe orientação para um serviço da rede. Em outras, precisa pagar a despesa e pedir reembolso depois, apresentando recibos, relatórios e documentos definidos no contrato.",
          "Descobrir esse fluxo durante uma emergência adiciona tensão a um momento que já é difícil. Antes do embarque, entenda os canais, o idioma do suporte, a necessidade de autorização prévia e os prazos para enviar documentos.",
        ],
        bullets: [
          "Salve telefone, WhatsApp, aplicativo e número do certificado",
          "Confirme se a central funciona 24 horas e oferece suporte em português",
          "Entenda quando o atendimento é direto e quando ocorre por reembolso",
          "Pergunte quais comprovantes precisam ser guardados",
          "Compartilhe a apólice com alguém que viajará com você",
        ],
      },
      {
        title: "6. Bagagem e voos: leia além do título da cobertura",
        body: [
          "Extravio, atraso na entrega, danos à mala, cancelamento e interrupção podem aparecer no plano, mas cada proteção possui limites, gatilhos e documentos próprios.",
          "A indenização por bagagem pode complementar o pagamento da companhia aérea ou seguir outra regra contratual. Confira quando a cobertura começa, como o valor é calculado e quais comprovantes serão exigidos.",
          "Ao perceber um problema, comunique imediatamente a companhia responsável, registre o ocorrido e guarde protocolos, notas e comprovantes. O seguro pode exigir esses documentos para analisar o pedido.",
        ],
      },
      {
        title: "7. Leia as exclusões antes de se encantar pelos benefícios",
        body: [
          "Saber o que o seguro não cobre é tão importante quanto conhecer seus benefícios. Dois planos parecidos na tela de cotação podem ter regras muito diferentes nas condições gerais.",
          "Não dependa apenas do resumo comercial. Observe franquias, restrições, prazos, necessidade de comunicação imediata e procedimentos para reembolso. Em caso de dúvida, peça esclarecimento antes de concluir a compra.",
        ],
        bullets: [
          "Tratamentos, eventos e situações excluídas",
          "Regras para condições preexistentes, gestantes e idosos",
          "Modalidades esportivas não aceitas",
          "Consequências relacionadas ao consumo de álcool ou outras substâncias",
          "Limites de idade, duração e território",
          "Prazos e documentos obrigatórios para atendimento ou reembolso",
        ],
      },
      {
        title: "Como comparar seguros sem se perder entre tantos planos",
        body: [
          "Um comparador reúne ofertas de diferentes seguradoras e permite visualizar lado a lado preço, cobertura médica, bagagem e benefícios adicionais. Isso reduz o trabalho da pesquisa, mas não substitui a leitura das condições do plano escolhido.",
          "Preencha destino, datas e idade corretamente. Separe algumas opções compatíveis com o perfil da viagem e compare os limites relevantes, em vez de simplesmente ordenar pelo menor preço.",
        ],
        bullets: [
          "Elimine planos incompatíveis com o destino ou com os viajantes",
          "Compare coberturas equivalentes e na mesma moeda",
          "Observe seguradora, rede de atendimento e forma de acionamento",
          "Abra as condições gerais antes de finalizar",
          "Confirme nomes, documentos, datas e todos os viajantes no certificado",
        ],
        highlight: {
          label: "GUIA CHILE RECOMENDA",
          text: "Use o cartão da Seguros Promo no final desta matéria para comparar planos. A cotação é feita no ambiente do parceiro e você deve conferir todas as condições antes de contratar.",
        },
      },
      {
        title: "Checklist final antes de contratar",
        body:
          "Faça esta conferência antes do pagamento. São poucos minutos que podem evitar uma apólice inadequada ou dados incorretos quando você mais precisar.",
        bullets: [
          "Destino e datas abrangem todo o período, inclusive deslocamentos",
          "Todos os viajantes estão incluídos e os nomes conferem com os documentos",
          "O limite médico é compatível com o destino e a duração",
          "Condições de saúde, idade e gestação foram consideradas",
          "As atividades esportivas planejadas estão expressamente incluídas",
          "Regras para bagagem, cancelamento e reembolso foram compreendidas",
          "Canais de emergência foram salvos em mais de um lugar",
          "Exclusões e condições gerais foram lidas",
        ],
        highlight: {
          label: "A ESCOLHA CERTA É PESSOAL",
          text: "O melhor seguro não é um produto universal: é o plano que acompanha o destino, as pessoas e as experiências do seu roteiro.",
        },
      },
      {
        title: "Contrate com calma e viaje com o apoio certo",
        body: [
          "Compare coberturas, leia as condições e trate a proteção como parte do planejamento — não como um item de última hora. Depois da contratação, deixe a apólice disponível no celular e também fora dele.",
          "Informações, limites, regras e preços podem mudar. Confirme tudo no site e nas condições do parceiro antes do pagamento e do embarque.",
        ],
      },
    ],
  },
  {
    slug: "valparaiso-vina-del-mar-vinicolas",
    title: "Valparaíso, Viña del Mar e vinícolas: roteiro pelo Chile Central",
    excerpt:
      "Descubra como combinar Valparaíso, Viña del Mar e as vinícolas de Casablanca e Maipo em um roteiro completo pelo Chile Central.",
    category: "Litoral & vinhos",
    country: "Chile",
    readTime: "12 min",
    image: "/images/tours/valparaiso-colorido.webp",
    keywords: [
      "Valparaíso e Viña del Mar",
      "vinícolas perto de Santiago",
      "Vale de Casablanca",
      "Vale do Maipo",
      "roteiro Chile Central",
      "bate-volta de Santiago",
      "vinhos chilenos",
    ],
    intro:
      "Arte, Pacífico e vinhos em uma viagem que atravessa paisagens completamente diferentes — todas a pouca distância de Santiago. Em poucas horas, o Chile Central troca a capital pelos vinhedos, sobe os morros coloridos de Valparaíso e termina diante do mar em Viña del Mar.",
    sections: [
      {
        title: "Três paisagens, uma viagem cheia de contrastes",
        body: [
          "Poucos roteiros entregam tantas mudanças de cenário em distâncias tão curtas. Valparaíso é intensa, histórica e imprevisível; Viña del Mar é mais organizada, ajardinada e voltada para a orla; os vales de Casablanca e Maipo desaceleram a viagem entre parreiras, história e degustações.",
          "O segredo não é tentar transformar tudo em uma corrida. É escolher o ritmo certo para cada lugar e entender que o contraste faz parte da experiência.",
        ],
        highlight: {
          label: "O ROTEIRO EM UMA FRASE",
          text: "Valparaíso para sentir a arte, Viña del Mar para respirar o Pacífico e uma vinícola para brindar ao Chile.",
        },
      },
      {
        title: "Valparaíso: uma cidade que pede curiosidade",
        body: [
          "Valparaíso não foi feita para ser admirada apenas da janela. A cidade revela sua personalidade nas escadarias, passagens estreitas, fachadas coloridas, murais e mirantes que aparecem entre um morro e outro.",
          "Seu porto histórico e a arquitetura adaptada ao relevo ajudam a explicar por que a área histórica foi reconhecida como Patrimônio Mundial. Nos cerros Alegre e Concepción, caminhar com calma transforma paredes, portas e becos em parte do passeio.",
          "Ela é uma cidade real, com contrastes urbanos e marcas do tempo. É justamente essa mistura de arte, história portuária e vida cotidiana que torna a visita tão diferente de um cartão-postal convencional.",
        ],
        image: "/images/library/valparaiso-vina-del-mar/valparaiso-vina-del-mar-013.webp",
        imageAlt: "Visitante diante de um grande mural colorido em Valparaíso",
        imageCaption: "Em Valparaíso, a arte urbana não é um detalhe: ela conduz o caminho.",
        highlight: {
          label: "OLHAR DE VIAJANTE",
          text: "Vá com espaço para o inesperado. Muitas das melhores cenas de Valparaíso aparecem entre uma atração e outra.",
        },
      },
      {
        title: "Entre elevadores, escadas e mirantes",
        body: [
          "Os elevadores históricos ajudam a vencer parte das subidas e são uma atração por si só, mas a experiência ainda envolve ladeiras e degraus. Os trajetos mais interessantes conectam mirantes, pequenas galerias, cafés e corredores de arte.",
          "Em vez de colecionar pontos isolados, organize o passeio por áreas próximas. Isso reduz deslocamentos e deixa tempo para observar os detalhes que fazem a cidade ser tão singular.",
        ],
        image: "/images/library/valparaiso-vina-del-mar/valparaiso-vina-del-mar-030.webp",
        imageAlt: "Viajantes em uma escadaria cercada por murais em Valparaíso",
        imageCaption: "Escadas e ladeiras fazem parte da paisagem — e da experiência.",
        bullets: [
          "Use calçado confortável e com boa aderência.",
          "Leve bolsa pequena e mantenha as mãos livres para as subidas.",
          "Prefira um trajeto bem conectado a tentar cruzar muitos morros no mesmo dia.",
          "Com guia, a arte e a história portuária ganham contexto e a caminhada rende mais.",
        ],
      },
      {
        title: "Viña del Mar: quando a viagem muda de ritmo",
        body: [
          "A curta distância de Valparaíso, Viña del Mar muda completamente o cenário. Avenidas mais largas, jardins, arquitetura elegante e uma orla aberta dão à cidade um ritmo mais leve.",
          "O Relógio de Flores é a parada clássica; o Castelo Wulff acrescenta arquitetura e vista para o mar; e o litoral convida a caminhar sem pressa. A graça está em sentir a transição entre duas cidades vizinhas que parecem pertencer a universos diferentes.",
        ],
        image: "/images/library/valparaiso-vina-del-mar/valparaiso-vina-del-mar-006.webp",
        imageAlt: "Relógio de Flores em Viña del Mar",
        imageCaption: "O Relógio de Flores é um dos símbolos mais fotografados de Viña del Mar.",
        highlight: {
          label: "O CONTRASTE É O PASSEIO",
          text: "Valparaíso provoca e surpreende; Viña del Mar desacelera e abre a paisagem para o Pacífico.",
        },
      },
      {
        title: "O Pacífico é mais frio do que parece",
        body: [
          "O céu azul pode enganar: a costa chilena recebe a influência da corrente de Humboldt, e a água costuma ser fria mesmo no verão. O vento também pode mudar rapidamente a sensação térmica.",
          "Em algumas manhãs, uma névoa costeira conhecida como camanchaca cobre a orla e se dissipa ao longo do dia. Ela não estraga o passeio — apenas cria outra atmosfera para o litoral.",
        ],
        image: "/images/tours/vina-lobos-marinhos.webp",
        imageAlt: "Lobos-marinhos na costa de Viña del Mar diante do oceano Pacífico",
        imageCaption: "A vida marinha e a brisa fria lembram que este é o Pacífico sul.",
        bullets: [
          "Vista-se em camadas, mesmo em dias ensolarados.",
          "Leve uma jaqueta corta-vento para a orla.",
          "Não planeje Viña apenas como destino de banho: paisagem, arquitetura e caminhada são parte central da visita.",
        ],
      },
      {
        title: "Valparaíso e Viña no mesmo dia: vale a pena?",
        body:
          "Sim, desde que a proposta seja ter uma boa visão geral. As duas cidades combinam muito bem em um bate-volta desde Santiago, mas o dia precisa de escolhas: alguns cerros e mirantes em Valparaíso, depois os principais pontos de Viña del Mar.",
        subSections: [
          {
            title: "Para quem tem apenas um dia",
            body:
              "Comece por Valparaíso, quando há mais energia para caminhar, e deixe Viña para a segunda parte do passeio. Um roteiro organizado reduz o tempo perdido em deslocamentos e estacionamentos.",
          },
          {
            title: "Para quem quer sentir a costa com calma",
            body:
              "Uma ou duas noites permitem ver o fim de tarde no Pacífico, jantar sem pressa e explorar a arte porteña além das paradas mais conhecidas.",
          },
        ],
      },
      {
        title: "Casablanca: vinhos entre Santiago e o litoral",
        body: [
          "O Vale de Casablanca fica no caminho entre Santiago e a costa, por isso é a escolha mais natural para combinar vinhos com Valparaíso e Viña del Mar.",
          "A influência marítima e o clima mais fresco favorecem variedades como Sauvignon Blanc, Chardonnay e Pinot Noir. Muitas propriedades oferecem experiências contemporâneas, com arquitetura, gastronomia e paisagens abertas sobre os vinhedos.",
          "Uma parada breve funciona para conhecer a produção e degustar alguns rótulos. Para almoçar, caminhar pelos vinhedos e participar de uma experiência mais completa, reserve meio dia ou um dia inteiro.",
        ],
        image: "/images/library/vinicola-alyan/vinicola-alyan-016.webp",
        imageAlt: "Vinhedos chilenos iluminados pelo sol diante das montanhas",
        imageCaption: "Os vales chilenos unem paisagem, vinho e um ritmo mais contemplativo.",
        highlight: {
          label: "MELHOR COMBINAÇÃO",
          text: "Casablanca é ideal para quem quer encaixar uma experiência de vinho no mesmo eixo da viagem ao litoral.",
        },
      },
      {
        title: "Maipo: tradição aos pés dos Andes",
        body: [
          "O Vale do Maipo está associado à história do vinho chileno e a rótulos tintos, especialmente Cabernet Sauvignon. A proximidade com Santiago facilita visitas de meio dia ou de dia inteiro.",
          "Aqui, a experiência costuma destacar tradição, antigas construções, jardins e a relação entre o vale e a Cordilheira. É uma escolha forte para quem deseja dedicar um dia específico ao vinho, sem seguir em direção ao litoral.",
        ],
        image: "/images/library/vinicola-undurraga/vinicola-undurraga-005.webp",
        imageAlt: "Jardins de uma vinícola tradicional no Vale do Maipo",
        imageCaption: "No Maipo, história e paisagismo fazem parte da visita tanto quanto a degustação.",
      },
      {
        title: "Maipo ou Casablanca: qual escolher?",
        body:
          "Não existe um vale melhor para todos. A escolha depende da direção do roteiro, do perfil de vinho que você prefere e do tempo disponível.",
        subSections: [
          {
            title: "Escolha Casablanca se você quer",
            body: "Um dia que conecte vinho e litoral com deslocamentos mais eficientes.",
            bullets: [
              "Vinhos de clima fresco, com destaque para brancos e Pinot Noir.",
              "Enoturismo contemporâneo e boa integração com gastronomia.",
              "Combinar a visita com Valparaíso e Viña del Mar.",
            ],
          },
          {
            title: "Escolha Maipo se você quer",
            body: "Uma experiência clássica de vinícola partindo de Santiago.",
            bullets: [
              "Cabernet Sauvignon e tradição vitivinícola.",
              "Propriedades históricas, jardins e paisagem andina.",
              "Dedicar meio dia ou um dia inteiro exclusivamente ao vinho.",
            ],
          },
        ],
      },
      {
        title: "Como escolher a vinícola ideal",
        body: [
          "A vinícola certa não é necessariamente a mais famosa, e sim a que combina com a experiência que você deseja. Antes de reservar, compare duração, idioma, estilo de degustação e estrutura do local.",
          "Se houver degustação, evite dirigir. Transfer privativo ou passeio organizado torna o dia mais seguro e permite que todos aproveitem a experiência.",
        ],
        image: "/images/library/vinicola-alyan/vinicola-alyan-021.webp",
        imageAlt: "Mesa preparada para uma experiência gastronômica em vinícola chilena",
        imageCaption: "Almoço harmonizado, visita técnica ou degustação breve: escolha o formato antes de reservar.",
        bullets: [
          "Quer uma visita histórica, técnica, gastronômica ou mais descontraída?",
          "A degustação está incluída e há opções para quem não bebe?",
          "O tour acontece em português ou espanhol?",
          "Há restaurante e ele exige reserva separada?",
          "O local recebe crianças e tem acessibilidade adequada ao seu grupo?",
          "O horário funciona com os outros deslocamentos do dia?",
        ],
      },
      {
        title: "A melhor época muda a experiência",
        body:
          "O Chile Central pode ser visitado o ano todo, mas cada estação transforma a luz, os vinhedos e o clima da costa.",
        image: "/images/library/vinicola-santa-rita/vinicola-santa-rita-002.webp",
        imageAlt: "Jardim histórico florido em uma vinícola chilena",
        imageCaption: "Jardins, vinhedos e cores mudam ao longo das estações.",
        subSections: [
          {
            title: "Primavera — setembro a novembro",
            body:
              "Vinhedos mais verdes, jardins floridos e dias progressivamente longos. É uma época muito equilibrada para combinar costa e vinho.",
          },
          {
            title: "Verão — dezembro a fevereiro",
            body:
              "Dias longos e mais movimento no litoral. Reserve com antecedência e mantenha o corta-vento na bolsa: o Pacífico continua fresco.",
          },
          {
            title: "Outono — março a maio",
            body:
              "Os vinhedos ganham tons dourados e a época de colheita traz outra energia aos vales. É uma das fases mais fotogênicas para o enoturismo.",
          },
          {
            title: "Inverno — junho a agosto",
            body:
              "A costa pode ter chuva, vento e temperaturas mais baixas, enquanto os vales ficam mais tranquilos. É importante confirmar horários e manter o roteiro flexível.",
          },
        ],
      },
      {
        title: "Um, dois ou três dias?",
        body:
          "A melhor divisão depende menos da quantidade de atrações e mais do quanto você quer se aprofundar em cada experiência.",
        subSections: [
          {
            title: "Em 1 dia",
            body:
              "Faça Valparaíso e Viña del Mar com paradas essenciais. Inclua Casablanca apenas se a visita à vinícola for breve e estiver muito bem coordenada.",
          },
          {
            title: "Em 2 dias",
            body:
              "Dedique o primeiro dia à costa, com possibilidade de pernoite. No segundo, conheça Casablanca com almoço ou degustação sem pressa.",
          },
          {
            title: "Em 3 dias",
            body:
              "Separe Valparaíso, combine Viña del Mar com Casablanca e reserve um terceiro dia para uma experiência clássica no Maipo.",
          },
        ],
        highlight: {
          label: "NOSSA ESCOLHA",
          text: "Dois dias oferecem o melhor equilíbrio: costa com tempo para olhar e vinícola com tempo para saborear.",
        },
      },
      {
        title: "Dicas práticas para aproveitar melhor",
        body:
          "Pequenas decisões deixam o roteiro mais fluido e evitam que o dia vire uma sequência apressada de fotos.",
        image: "/images/library/valparaiso-vina-del-mar/valparaiso-vina-del-mar-018.webp",
        imageAlt: "Grupo de viajantes em uma rua colorida de Valparaíso",
        imageCaption: "Com o ritmo certo, o roteiro funciona para casais, famílias e grupos de amigos.",
        bullets: [
          "Reserve vinícolas, degustações e restaurantes com antecedência.",
          "Confirme o funcionamento dos elevadores de Valparaíso no dia da visita.",
          "Use calçado confortável e leve uma camada corta-vento.",
          "Não sobrecarregue o dia com muitas degustações ou atrações distantes.",
          "Guarde tempo livre para mirantes, cafés e pausas junto ao mar.",
          "Se beber, use transporte contratado ou participe de um passeio organizado.",
        ],
      },
      {
        title: "Três paisagens, uma viagem inesquecível",
        body: [
          "Valparaíso, Viña del Mar e os vales do vinho mostram como o Chile muda de personalidade em poucos quilômetros. O melhor roteiro não é o que acumula mais paradas, mas o que cria espaço para perceber essas diferenças.",
          "A Destino Andes organiza essa experiência de acordo com o seu ritmo, com deslocamentos coordenados, escolhas de vinícolas alinhadas ao seu perfil e tempo para viver cada lugar. Seu Guia Chile sempre à mão — da primeira curva até o último brinde.",
        ],
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
