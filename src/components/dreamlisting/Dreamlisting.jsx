import "./Dreamlisting.css";
import Dream from "../dream/Dream";
import axios from "axios";
import {useState, useEffect} from "react";
import{ API_BASE_URL } from "../../config";

const Dreamlisting = () => {
    const [dreams, setDreams] = useState([]);
    const [pending, setPending] = useState(true);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    };
    
    const closeAddDialog = () => {
        setShowAddDialog(false);
    };

    //post pageload
    useEffect(() => {
        (async () => {
            const response = await axios.get('{API_BASE_URL}/api/dreams/');

            setDreams(response.data);
        })();
    }, []);

    return (
        <div id="section2">
            <h2 className="center">Dreamboard</h2>
            <h4 className="center">What do you dream of?</h4>
            <section className="slot-DB">
                <div id="dreamlist" className="gridDB" >
                    {dreams.map((dream) => (<Dream 
                        title={dream.title}
                        type={dream.type}
                        img_name={dream.img_name}
                        description={dream.description} />
                    ))}
                </div>
            </section>
        </div>

    )
}

export default Dreamlisting;