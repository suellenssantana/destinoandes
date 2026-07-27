import { Footer, Header, TourFilters } from "../../components";

export default function ToursPage() {
  return <><Header/><main><section className="inner-hero catalog-hero"><p className="kicker light">PASSEIOS NO CHILE</p><h1>Encontre seu<br/><em>próximo caminho.</em></h1><p>De picos nevados a caves centenárias: filtre por estilo, tempo e temporada.</p></section><section className="section catalog"><TourFilters/></section></main><Footer/></>;
}
