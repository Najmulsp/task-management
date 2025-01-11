import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { PenBox } from "lucide-react";
import { useState } from "react";
import { SignedIn, SignedOut, SignIn, userButton } from "@clerk/clerk-react";

const JobHeader = () => {
    const [showSignIn, setShowSignIn] =useState(false);
    // const handleOverlayClick = (e) =>{
    //     if(e.target === e.currentTarget){
    //         setShowSignIn(false);
    //     }
    // }
    return (
        <div className="flex justify-evenly items-center py-6 border border-red-600 w-[1440px] mx-auto">
            <img src={logo} alt="" className="w-12"/>
            <Link to="/" className="bg-cyan-700 p-2 rounded-xl">Home</Link>
            <Button variant="outline" >Jobs</Button>
<SignedOut>
    <Button variant="outline" onClick={()=>setShowSignIn(true)}>
        Login
    </Button>
</SignedOut>
            <SignedIn>
                <Button variant="destructive" className="rounded-full">
                    <PenBox size={20} className="mr-2"/>
                    Post a Job
                </Button>
            </SignedIn>
        </div>
    );
};

export default JobHeader; 