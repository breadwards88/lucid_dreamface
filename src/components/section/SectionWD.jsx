import './Section.css';

const Section = () => {
    return (
        <div id="section">
            <div className="grid1">
                <section className="slot1 columns">
                    <p className="emoji-cloud one">☁️</p>
                    <div className="nine">
                        <h3 className="two">Daydreams</h3>
                        <p className="ptext">The mind wanders — slipping away from the present into vivid, self-generated narratives. Scientists call this the default mode network: a web of brain regions that activates when we stop focusing on the external world.</p>
                    </div>
                </section>
                <section className="slot2 columns">
                    <p className="emoji-rocket one">🚀</p>
                    <div className="nine">
                        <h3>Aspirations</h3>
                        <p className="ptext">Not all waking dreams are idle. Some crystallize into aspirations — images of who we might become. A medical student picturing herself in surgery. A child watching a rocket and deciding, silently, he will one day build one.</p>
                    </div>
                </section>
                <section className="slot3 columns">
                    <p className="emoji-twinkle one">🌟</p>
                    <div className="nine">
                        <h3>Strength of Vision</h3>
                        <p className="ptext">Mental rehearsal — the deliberate imagining of a desired outcome — has measurable effects on performance. Athletes who visualize their event activate the same neural pathways as physical practice.</p>
                    </div>
                </section>
                <section className="slot4 columns">
                    <p className="emoji-crane one">🏗️</p>
                    <div className="nine">
                        <h3>Hope as Architecture</h3>
                        <p className="ptext">Hope is not passive wishing. Psychologist Charles Snyder's hope theory describes it as a cognitive set: clear goals, perceived pathways toward them, and the agency to move. Waking dreams are its raw material.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Section;