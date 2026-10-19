import "./Header.css";
/*import logo from"./images/logo/logo192.png"*/

const Header = () => {
    return (
        <div className="header-nav">
            <div className="header-title">
                <h3>Lucid Elucidation 💭</h3>
            </div>
            <div id="links" className="hidden">
                <a href="home.html">Home</a>
                <a href="waking.html">Waking Dreams</a>
                <a href="slumberndreams.html">Slumber & Dreams</a>
                <a href="dvg.html">Dreams vs Goals</a>
                <a href="lack.html">Lack of Dreams</a>
                <a href="#">Dreamboard</a>
            </div>
            <a id="linkd" href="#" className="icon">
                <i className="fa fa-bars">☰</i>
            </a>
        </div>
    );
};

export default Header;