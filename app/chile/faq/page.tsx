import { FAQ, Footer, Header, SocialLinks } from "../../components";
const items: [string,string][] = [
  ["Com quanta antecedência devo reservar?", "No inverno, feriados e alta temporada, recomendamos reservar assim que suas datas estiverem definidas. As vagas e veículos são limitados."],
  ["O passeio acontece com chuva ou neve?", "Depende da experiência e das condições de segurança. Chuva leve normalmente não impede tours urbanos ou de vinícola; montanha depende da estrada e autoridades."],
  ["Crianças pagam o mesmo valor?", "A regra varia conforme passeio, idade e fornecedor. Informe as idades no atendimento para receber o valor correto."],
  ["O ingresso das atrações está incluído?", "Somente quando indicado expressamente na confirmação. O preço-base de vários passeios cobre transporte e condução, não ingressos opcionais."],
  ["Vocês buscam no aeroporto?", "Traslado de aeroporto é um serviço separado. Podemos incluí-lo no planejamento e alinhar com seus voos."],
  ["Posso levar malas no passeio?", "O espaço é limitado em veículos compartilhados. Avise antes caso precise transportar bagagem."],
  ["Há opção em português?", "Sim. Nosso atendimento é em português e buscamos oferecer condução em português ou bilíngue conforme o passeio."],
  ["Como confirmo o preço atualizado?", "Envie data, quantidade de pessoas e passeio desejado. Validamos disponibilidade, câmbio aplicável e eventuais ingressos antes da reserva."],
  ["O que vestir para a neve?", "Use camadas térmicas, roupa impermeável, luvas, meias adequadas e calçado com boa aderência. Podemos orientar sobre aluguel de roupas."],
  ["E se a estrada fechar?", "A segurança vem primeiro. Quando uma operação é cancelada por força maior, avaliamos reagendamento, alternativa ou reembolso conforme valores recuperáveis."],
];
export default function FaqPage(){return <><Header/><main><section className="inner-hero faq-hero"><p className="kicker light">PERGUNTAS FREQUENTES</p><h1>Viaje sabendo<br/><em>o que esperar.</em></h1></section><section className="faq-page section"><div><p className="kicker">RESPOSTAS DIRETAS</p><h2>Tudo que você precisa saber</h2><p>Não encontrou sua dúvida? Nosso atendimento ajuda com os detalhes da sua viagem.</p><SocialLinks className="faq-socials" /></div><FAQ items={items}/></section></main><Footer/></>};
