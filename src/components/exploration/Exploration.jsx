import './exploration.css';

const Exploration = () => {
    return (
        <div id="exploration">
            <h1>Elucidation Exploration</h1>
            <h4>choose your path</h4>
            <div className="grid1">
                <section className="slot1">
                    <p class="emoji-sun">☀️</p>
                    <div class="cloud-small two"></div>
                    <h3>Waking Dreams</h3>
                    <p>Daydreams, aspirations, and the soft architechture of hope.</p>
                    <button class="waking"><a href="waking.html">Enter</a></button>
                </section>
                <section class="slot2">
                    <p class="emoji-moon">🌙</p>
                    <div class="cloud-small two"></div>
                    <h3>Slumber & Dreaming</h3>
                    <p>The science and wonder of the nocturnal dream state.</p>
                    <button class="slumber"><a href="slumberndreams.html">Enter</a></button>
                </section>
                <section class="slot3">
                    <p class="emoji-star">⭐</p>
                    <div class="cloud-small two"></div>
                    <h3>Dreams vs Goals</h3>
                    <p>The time tested link between Success and Aspirations.</p>
                    <button class="dreams"><a href="dvg.html">Enter</a></button>
                </section>
                <section class="slot4">
                    <p class="emoji-void">🌀</p>
                    <div class="cloud-small two"></div>
                    <h3>A Lack of Dreams</h3>
                    <p>Not everyone needs a powerful driving force to get by.</p>
                    <button class="lack"><a href="lack.html">Enter</a></button>
                </section>
            </div>
        </div>
    );
}

export default Exploration;