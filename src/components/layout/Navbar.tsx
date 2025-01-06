import { Link } from "react-router-dom";
import logo from "../../../public/task-removebg-preview.png";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  return (
    <nav className="w-[1280px] mx-auto max-h-24 flex items-center justify-around py-5 dark:bg-cyan-950 bg-cyan-100 opacity-90">
      <div className="flex items-center p-5">
        <img src={logo} alt="" />
        <span className="text-5xl text-blue-900 dark:text-cyan-200 font-bold ml-2">Master</span>
      </div>
      <div className="space-x-2">
        <Link to="/">
          <Button className="bg-cyan-700">Home</Button>
        </Link>
        <Link to="/tasks">
          <Button className="bg-cyan-700">Tasks</Button>
        </Link>
        <Link to="/user">
          <Button className="bg-cyan-700">User</Button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Link to="/login">
          <Button className="bg-cyan-700">Log in</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
