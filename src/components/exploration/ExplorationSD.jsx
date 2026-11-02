import './Exploration.css';
import pic from './sleeping.png';
import {useState} from "react";

const ExplorationSD = () => {
    const[hideExplore, setHideExplore] = useState(false);
    const [sl1Active, setSl1Active] = useState(false);
    const [sl2Active, setSl2Active] = useState(false);
    const [sl3Active, setSl3Active] = useState(false);
    const [sl4Active, setSl4Active] = useState(false);

    const toggleSL1 = () => {
        setSl1Active(true);
        setSl2Active(false);
        setSl3Active(false);
        setSl4Active(false);
    };
    const toggleSL2 = () => {
        setSl1Active(false);
        setSl2Active(true);
        setSl3Active(false);
        setSl4Active(false);
    };

    const toggleSL3 = () => {
        setSl1Active(false);
        setSl2Active(false);
        setSl3Active(true);
        setSl4Active(false);
    };

    const toggleSL4 = () => {
        setSl1Active(false);
        setSl2Active(false);
        setSl3Active(false);
        setSl4Active(true);
    };

    return (
        <div id="section2">
            <div>
                <img className="img-small" src={pic} alt="Sleeping Image"/>
            </div>
            <div>
                <p className="slot3 centerl s2-interim">💤 deep in the dream cycle 💤</p>
            </div>
            <div>
                <h1 className="s2-title center">The Sleep Cycle</h1>
                <p className="ptext">Each cycle is ~90 minutes and repeats 4–6 times per night.</p>
                <p className="ptext">Tap a stage.</p>
            </div>
            <div>
                <button id="sb1" className="n1" onClick={toggleSL1}>😴 N1</button>
                <button id="sb2" className="n2" onClick={toggleSL2}>💤 N2</button>
                <button id="sb3" className="n3" onClick={toggleSL3}>🌊 N3</button>
                <button id="sb4" className="rem" onClick={toggleSL4}>🌙 REM</button>
            </div>
            <div>
                <section id="sl1" className={sl1Active ? "slot1" : "hidden"}>
                    <p className="emoji-sleeper">😴</p>
                    <h3 className="center">Light Sleep</h3>
                    <p className="ptext">The threshold between waking and sleep. Hypnic jerks occur here — that sudden falling sensation that snaps you back to consciousness. Brain waves slow from alert beta to relaxed theta.</p>
                </section>
                <section id="sl2" className={sl2Active ? "slot2" : "hidden"}>
                    <p className="emoji-snooze">💤</p>
                    <h3 className="center">True Sleep</h3>
                    <p className="ptext">Body temperature drops, heart rate slows, and sleep spindles appear — brief bursts of neural activity thought to play a key role in memory consolidation. You spend roughly half the night here.</p>
                </section>
                <section id="sl3" className={sl3Active ? "slot3" : "hidden"}>
                    <p className="emoji-wave">🌊</p>
                    <h3 className="center">Deep Sleep</h3>
                    <p className="ptext">Slow-wave sleep. The hardest to wake from. Growth hormone is released. The glymphatic system — the brain's waste clearance mechanism — flushes out metabolic byproducts of waking thought.</p>
                </section>
                <section id="sl4" className={sl4Active ? "slot4" : "hidden"}>
                    <p className="emoji-moon">🌙</p>
                    <h3 className="center">Dream Sleep</h3>
                    <p className="ptext">Rapid Eye Movement sleep. The brain is nearly as active as when awake. Vivid, narrative dreams arise. The body is temporarily paralyzed. Creative connections form between disparate ideas.</p>
                </section>
            </div>
        </div>
    );
}

export default ExplorationSD;