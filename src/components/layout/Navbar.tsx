import { Link } from "react-router-dom";
import logo from "../../../public/task-removebg-preview.png"
import { Button } from "../ui/button";

const Navbar = () => {
    return (
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 p-5 bg-cyan-300 opacity-90">
            <div className="flex items-center p-5">                  
                <img src={logo} alt="" />
                <span className="text-5xl text-blue-900 font-bold ml-2">Master</span>
            </div>
            <Link to="/"> <Button>Home</Button> </Link>
            <div>
      <Link to="/login"> <Button>Log in</Button> </Link>
    </div>
        </nav>
    );
};

export default Navbar;