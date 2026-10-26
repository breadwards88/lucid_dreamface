import Hero from "../../components/hero/Hero";
import Exploration from "../components/exploration/Exploration";
import Statistics from "../../components/statistics/Statistics";
import Quote from "../../components/quote/Quote";

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