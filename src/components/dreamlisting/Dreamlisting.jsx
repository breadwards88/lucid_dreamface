import "./Dreamlisting.css";
import Dream from "../dream/Dream";
import axios from "axios";
import {useState, useEffect} from "react";
import{ API_BASE_URL } from "../../config";

const Dreamlisting = () => {
    const [dreams, setDreams] = useState([]);
    const [pending, setPending] = useState(true);

    //post pageload
    useEffect(() => {
        const loadDreams = async () => {
            const response = await axios.get(`${API_BASE_URL}/api/dreams/`);
            setPending(false);
            setDreams(response.data);
        };
        loadDreams();
    }, []);

    return (
        <div id="section2">
            <h2 className="center">Dreamboard</h2>
            <h4 className="center">What do you dream of?</h4>

            <section className="slot-DB">
                <div id="dreamlist" className="gridDB" >
                    {pending && <p>Loading...</p>}
                    {dreams.map((dream) => (
                        <Dream
                        id={dream._id}
                        title={dream.title}
                        type={dream.type}
                        img_name={dream.img_name}
                        description={dream.description}
                        />
                    ))}
                </div>
            </section>
        </div>

    )
}

export default Dreamlisting;