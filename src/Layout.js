import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div id="content">
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;