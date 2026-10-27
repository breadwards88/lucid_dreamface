import "./Dreamlisting.css";
import Dream from "../dream/Dream";
import pic from './peace.jpg';

const Dreamlisting = () => {
    return (
        <div className="section2">
            <h2 className="center">Dreamboard</h2>
            <h4 className="center">What do you dream of?</h4>
            <section className="slot-DB">
                <div id="dreamlist" className="gridDB" >
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                    <Dream title="World Peace"
                        type="Long-term"
                        src={pic}
                        description="A world where all nations live in harmony and conflicts are resolved peacefully." />
                </div>
            </section>
        </div>
            
    )
}

export default Dreamlisting;