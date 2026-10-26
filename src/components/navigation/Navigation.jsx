import "./Navigation.css";
import { Link } from "react-router-dom";
/*import logo from"./images/logo/logo192.png"*/

const Navigation = () => {
    return (
        <header>
            <div className="header-nav">
            <div className="header-title">
                <h3>Lucid Elucidation 💭</h3>
            </div>
            <div id="links" className="hidden">
                <Link to="/">Home</Link>
                <Link to="/waking">Waking Dreams</Link>
                <Link to="/slumberndreams">Slumber & Dreams</Link>
                <Link to="/dreamvgoal">Dreams vs Goals</Link>
                <Link to="/lackdream">Lack of Dreams</Link>
                <Link to="/dreamboard">Dreamboard</Link>
            </div>
            <a id="linkd" href="#" className="icon">
                <i className="fa fa-bars">☰</i>
            </a>
        </div>
        </header>
        
    );
};

export default Navigation;