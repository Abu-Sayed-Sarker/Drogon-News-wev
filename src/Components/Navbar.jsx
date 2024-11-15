import { Link } from "react-router-dom";
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <div className=""></div>
            <div>
                <ul className="flex gap-5">
                    <Link to={"/"}>Home</Link>
                    <Link to={"career"}>Career</Link>
                    <Link to={"about"}>About</Link>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <img src={user} alt="" />
                </div>
                <button className="btn rounded-none bg-black text-xl font-bold text-white">Log in</button>
            </div>
        </div>
    );
};

export default Navbar;