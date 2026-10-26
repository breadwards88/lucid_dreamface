import './Exploration.css';

const ExplorationSD = () => {
    return (
        <div id="section2">
            <div>
                <img className="img-small" src="images/sleeping.png" alt="Sleeping Image"/>
            </div>
            <div>
                <p className="slot3 centralcity s2-interim">💤 deep in the dream cycle 💤</p>
            </div>
            <div>
                <h1 className="s2-title centralcity">The Sleep Cycle</h1>
                <p className="ptext">Each cycle is ~90 minutes and repeats 4–6 times per night.</p>
                <p className="ptext">Tap a stage.</p>
            </div>
            <div>
                <button id="sb1" className="n1">😴 N1</button>
                <button id="sb2" className="n2">💤 N2</button>
                <button id="sb3" className="n3">🌊 N3</button>
                <button id="sb4" className="rem">🌙 REM</button>
            </div>
            <div>
                <section id="sl1" className="slot1">
                    <p className="emoji-sleeper">😴</p>
                    <h3 className="centralcity">Light Sleep</h3>
                    <p className="ptext">The threshold between waking and sleep. Hypnic jerks occur here — that sudden falling sensation that snaps you back to consciousness. Brain waves slow from alert beta to relaxed theta.</p>
                </section>
                <section id="sl2" className="slot2 hidden">
                    <p className="emoji-snooze">💤</p>
                    <h3 className="centralcity">True Sleep</h3>
                    <p className="ptext">Body temperature drops, heart rate slows, and sleep spindles appear — brief bursts of neural activity thought to play a key role in memory consolidation. You spend roughly half the night here.</p>
                </section>
                <section id="sl3" className="slot3 hidden">
                    <p className="emoji-wave">🌊</p>
                    <h3 className="centralcity">Deep Sleep</h3>
                    <p className="ptext">Slow-wave sleep. The hardest to wake from. Growth hormone is released. The glymphatic system — the brain's waste clearance mechanism — flushes out metabolic byproducts of waking thought.</p>
                </section>
                <section id="sl4" className="slot4 hidden">
                    <p className="emoji-moon">🌙</p>
                    <h3 className="centralcity">Dream Sleep</h3>
                    <p className="ptext">Rapid Eye Movement sleep. The brain is nearly as active as when awake. Vivid, narrative dreams arise. The body is temporarily paralyzed. Creative connections form between disparate ideas.</p>
                </section>
            </div>
        </div>
    );
}

export default ExplorationSD;