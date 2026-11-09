import "./Dreamlisting.css";
import Dream from "../dream/Dream";
import axios from "axios";
import {useState, useEffect} from "react";

const Dreamlisting = () => {
    const [dreams, setDreams] = useState([]);

    //post pageload
    useEffect(() => {
        (async () => {
            const response = await axios.get("https://lucid-backend-xqj7.onrender.com/api/dreams/");

            setDreams(response.data);
        })();
    }, []);

    return (
        <div className="section2">
            <h2 className="center">Dreamboard</h2>
            <h4 className="center">What do you dream of?</h4>
            <section className="slot-DB">
                <div id="dreamlist" className="gridDB" >
                    {dreams.map((dream) => (<Dream title={dream.title}
                        type={dream.type}
                        src={dream.src}
                        description={dream.description} />
                    ))}
                </div>
            </section>
        </div>

    )
}

export default Dreamlisting;