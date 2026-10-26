import Hero from "../../components/hero/HeroDB";
import Dreamlisting from "../../components/dreamlisting/Dreamlisting";
import Contact from "../../components/contact/Contact";

const Dreamboard = () => {
    return (
        <div id ="dreamboard" className="page">
            <Hero />
            <Dreamlisting />
            <Contact />
        </div>
    );
}

export default Dreamboard;