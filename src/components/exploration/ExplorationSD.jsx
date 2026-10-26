import './Exploration.css';

const ExplorationSD = () => {
    return (
        <div id="section2">
            <div>
                <img class="img-small" src="images/sleeping.png" alt="Sleeping Image"/>
            </div>
            <div>
                <p class="slot3 centralcity s2-interim">💤 deep in the dream cycle 💤</p>
            </div>
            <div>
                <h1 class="s2-title centralcity">The Sleep Cycle</h1>
                <p class="ptext">Each cycle is ~90 minutes and repeats 4–6 times per night.</p>
                <p class="ptext">Tap a stage.</p>
            </div>
            <div>
                <button id="sb1" class="n1">😴 N1</button>
                <button id="sb2" class="n2">💤 N2</button>
                <button id="sb3" class="n3">🌊 N3</button>
                <button id="sb4" class="rem">🌙 REM</button>
            </div>
            <div>
                <section id="sl1" class="slot1">
                    <p class="emoji-sleeper">😴</p>
                    <h3 class="centralcity">Light Sleep</h3>
                    <p class="ptext">The threshold between waking and sleep. Hypnic jerks occur here — that sudden falling sensation that snaps you back to consciousness. Brain waves slow from alert beta to relaxed theta.</p>
                </section>
                <section id="sl2" class="slot2 hidden">
                    <p class="emoji-snooze">💤</p>
                    <h3 class="centralcity">True Sleep</h3>
                    <p class="ptext">Body temperature drops, heart rate slows, and sleep spindles appear — brief bursts of neural activity thought to play a key role in memory consolidation. You spend roughly half the night here.</p>
                </section>
                <section id="sl3" class="slot3 hidden">
                    <p class="emoji-wave">🌊</p>
                    <h3 class="centralcity">Deep Sleep</h3>
                    <p class="ptext">Slow-wave sleep. The hardest to wake from. Growth hormone is released. The glymphatic system — the brain's waste clearance mechanism — flushes out metabolic byproducts of waking thought.</p>
                </section>
                <section id="sl4" class="slot4 hidden">
                    <p class="emoji-moon">🌙</p>
                    <h3 class="centralcity">Dream Sleep</h3>
                    <p class="ptext">Rapid Eye Movement sleep. The brain is nearly as active as when awake. Vivid, narrative dreams arise. The body is temporarily paralyzed. Creative connections form between disparate ideas.</p>
                </section>
            </div>
        </div>
    );
}

export default ExplorationSD;