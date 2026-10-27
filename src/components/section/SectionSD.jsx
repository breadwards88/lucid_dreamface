import './Section.css';

const Section = () => {
    return (
        <div id="section3">
            <h2 className='center'>Types of Dreams</h2>
            <div className="grid2">
                <section className="slot1">
                    <h3 className='center'>Lucid Dreams 🎮</h3>
                    <p className="ptext">The dreamer becomes aware they are dreaming and can sometimes exert control — with documented correlates in gamma wave activity.</p>
                </section>
                <section className="slot2">
                    <h3 className='center'>Recurring Dreams ♻️</h3>
                    <p className="ptext">Dreams that repeat across weeks or years — often processing an unresolved emotional situation or persistent anxiety.</p>
                </section>
                <section className="slot3">
                    <h3 className='center'>Prophetic Dreams 🔮</h3>
                    <p className="ptext">Dreams that seem to predict real events — more likely cognitive pattern-recognition than supernatural foresight.</p>
                </section>
                <section className="slot4">
                    <h3 className='center'>Nightmares ⚡</h3>
                    <p className="ptext">Distressing dreams that fully wake the sleeper, most common in REM sleep. Often linked to stress, trauma, or certain medications.</p>
                </section>
            </div>
        </div>
    );
}

export default Section;