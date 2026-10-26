import HeroWD from "../../components/hero/HeroWD";
import StatisticsWD from "../../components/statistics/StatisticsWD";
import QuoteWD from "../../components/quote/QuoteWD";
import SectionWD from "../../components/section/SectionWD";

const WakingDreams = () => {
    return (
        <div id ="wakingdreams" className="page">
            <HeroWD />
            <SectionWD />
            <QuoteWD />
            <StatisticsWD />
        </div>
    );
}

export default WakingDreams;