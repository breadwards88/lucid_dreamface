import './Exploration.css';
import { Link } from 'react-router-dom';

const Exploration = () => {
    return (
        <div id="section">
            <h2 className='center'>Elucidation Exploration</h2>
            <h4 className='center'>choose your path</h4>
            <div className="grid1">
                <section className="slot1">
                    <p className="emoji-sun">☀️</p>
                    <div className="cloud-small two"></div>
                    <h3>Waking Dreams</h3>
                    <p>Daydreams, aspirations, and the soft architechture of hope.</p>
                    <button className="waking"><Link to="/waking">Enter</Link></button>
                </section>
                <section className="slot2">
                    <p className="emoji-moon">🌙</p>
                    <div className="cloud-small two"></div>
                    <h3>Slumber & Dreaming</h3>
                    <p>The science and wonder of the nocturnal dream state.</p>
                    <button className="slumber"><Link to="/slumberndreams">Enter</Link></button>
                </section>
                <section className="slot3">
                    <p className="emoji-star">⭐</p>
                    <div className="cloud-small two"></div>
                    <h3>Dreams vs Goals</h3>
                    <p>The time tested link between Success and Aspirations.</p>
                    <button className="dreams"><Link to="/dreamvgoal">Enter</Link></button>
                </section>
                <section className="slot4">
                    <p className="emoji-void">🌀</p>
                    <div className="cloud-small two"></div>
                    <h3>A Lack of Dreams</h3>
                    <p>Not everyone needs a powerful driving force to get by.</p>
                    <button className="lack"><Link to="/lackdream">Enter</Link></button>
                </section>
            </div>
        </div>
    );
}

export default Exploration;