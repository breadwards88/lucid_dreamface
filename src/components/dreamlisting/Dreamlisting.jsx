import "./Dreamlisting.css";
import Dream from "../dream/Dream";
import peacepic from './peace.jpg';
import healthpic from './health.jpg';
import astronautpic from './astronaut.jpg';
import educationpic from './education.jpg';
import foodpic from './food.jpg';
import lotterypic from './lottery.jpg';
import starpic from './star.jpg';
import travelpic from './travel.jpg';
import axios from "axios";
import {useState, useEffect} from "react";

const Dreamlisting = () => {
    const Dreams = () => {
        const [dreams, setDreams] = useState([]);
    }

    //post pageload
    useEffect(() => {
        const pullDreams = async()=>{
            const response = await axios.getUri("https://")
            setDreams(response.data);
        };

        pullDreams();
    },[]);

    return (
        <div className="section2">
            <h2 className="center">Dreamboard</h2>
            <h4 className="center">What do you dream of?</h4>
            <section className="slot-DB">
                <div id="dreamlist" className="gridDB" >
                    {dreams.map((dream)=>(<Dream title={dream.title}
                        type={dream.type}
                        src={dream.src}
                        description={dream.description} />
                        ))}
                    
                    <Dream title="End World Hunger"
                        type="Long-term"
                        src={foodpic}
                        description="A world where no one goes hungry and has access to sufficient food." />
                    <Dream title="Free Education"
                        type="Long-term"
                        src={educationpic}
                        description="A world where education is funded by government spending and accessible to all children." />
                    <Dream title="Free Healthcare"
                        type="Long-term"
                        src={healthpic}
                        description="A world where healthcare is freely available to all individuals." />
                    <Dream title="Become a Star"
                        type="Long-term"
                        src={starpic}
                        description="To reach stardom and become a celebrated celebrity." />
                    <Dream title="To win the Lottery"
                        type="Long-term"
                        src={lotterypic}
                        description="Winning it big at the lottery so I can achieve financial freedom." />
                    <Dream title="To become an Astronaut"
                        type="Long-term"
                        src={astronautpic}
                        description="Train to become an astronaut and get picked for the Space Program." />
                    <Dream title="To Travel the World"
                        type="Long-term"
                        src={travelpic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="To Climb Mount Everest"
                        type="Long-term"
                        iframeSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637700.156236257!2d86.55243663706656!3d27.999129368736213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e854a215bd9ebd%3A0x576dcf806abbab2!2sMt%20Everest!5e0!3m2!1sen!2sus!4v1791766992413!5m2!1sen!2sus"
                        description="To climb the highest peak in the world." />
                </div>
            </section>
        </div>
            
    )
}

export default Dreamlisting;