import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="min-h-screen bg-cyan-50 bg-opacity-50">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;