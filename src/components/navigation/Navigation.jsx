import "./Navigation.css";
import { Link } from "react-router-dom";
import {useState} from "react";
/*import logo from"./images/logo/logo192.png"*/

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }
    
    return (
        <header>
            <div className="header-nav">
                <div className="header-title">
                    <h3>Lucid Elucidation 💭</h3>
                </div>
                    <div id="links" className={menuOpen ? "" : "hide-nav"}>
                        <Link to="/">Home</Link>
                        <Link to="/waking">Waking Dreams</Link>
                        <Link to="/slumberndreams">Slumber & Dreams</Link>
                        <Link to="/dreamvgoal">Dreams vs Goals</Link>
                        <Link to="/lackdream">Lack of Dreams</Link>
                        <Link to="/dreamboard">Dreamboard</Link>
                    </div>
                <a id="linkd" className="icon" onClick={toggleNav} href="#">
                    <i className="fa fa-bars">☰</i>
                </a>
            </div>
        </header>
        
    );
};

export default Navigation;