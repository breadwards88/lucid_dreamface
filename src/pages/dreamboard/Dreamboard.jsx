import Hero from "../../components/hero/HeroDB";
import Dreamlisting from "../../components/dreamlisting/Dreamlisting";
import Contact from "../../components/contact/Contact";
import Dreammaker from "../../components/dreammaker/Dreammaker";

const Dreamboard = () => {
    return (
        <div id ="dreamboard" className="page">
            <Hero />
            <Dreamlisting />
            <Dreammaker />
            <Contact />
        </div>
    );
}

export default Dreamboard;