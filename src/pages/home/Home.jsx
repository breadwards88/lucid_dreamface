import Hero from "../../components/hero/Hero";
import Statistics from "../../components/statistics/Statistics";
import Quote from "../../components/quote/Quote";
import Exploration from "../../components/exploration/exploration";

const Home = () => {
    return (
        <div id ="home" className="page">
            <Hero />
            <Exploration />
            <Statistics />
            <Quote />
        </div>
    );
}

export default Home;