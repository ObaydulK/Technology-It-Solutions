import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Main = () => {
    return (
        <div className="font-serif">
            < Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;