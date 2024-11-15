import { Link } from "react-router-dom";
import userImg from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const { user, singOut } = useContext(AuthContext)

    const Logout = () => {
        singOut()
            .then(() => {
            console.log("Log Out Success");
            
            })
            .catch((error) => {
                console.log(error);
                
              });
    }
    

    return (
        <div className="flex justify-between">
            <div className="">{ user && user.name }</div>
            <div>
                <ul className="flex gap-5">
                    <Link to={"/"}>Home</Link>
                    <Link to={"career"}>Career</Link>
                    <Link to={"about"}>About</Link>
                </ul>
            </div>
            <div className="flex items-center gap-5">
                <div>
                    <img src={userImg} alt="" />
                </div>
                {
                    user?.email? <button onClick={Logout} className="btn rounded-none bg-black text-xl font-bold text-white">Log Out</button> : <Link to={"/auth/login"} className="btn rounded-none bg-black text-xl font-bold text-white">Log in</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;