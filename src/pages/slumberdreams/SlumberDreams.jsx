import HeroSD from "../../components/hero/HeroSD";
import QuoteSD from "../../components/quote/QuoteSD";
import SectionSD from "../../components/section/SectionSD";
import ExplorationSD from "../../components/exploration/ExplorationSD";

const SlumberDreams = () => {
    return (
        <div id ="slumberdreams" className="page">
            <HeroSD />
            <ExplorationSD />
            <SectionSD />
            <QuoteSD />
        </div>
    );
}

export default SlumberDreams;