import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

const AuthLeyout = () => {
    return (
        <div className="w-11/12 mx-auto py-3">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLeyout;