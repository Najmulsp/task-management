import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const JobHeader = () => {
  return (
    <div className="flex justify-evenly items-center py-6 border border-red-600 w-[1440px] mx-auto">
      <img src={logo} alt="" className="w-12" />
      <Link to="/" className="bg-cyan-700 p-2 rounded-xl">
        Home
      </Link>
      {/* <Button variant="outline" >Jobs</Button> */}

      <Button variant="outline">Login</Button>
    </div>
  );
};

export default JobHeader;
