import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const RightNavbar = () => {
    return (
        <div>
            <h2 className="font-semibold text-lg mb-2">Login With</h2>
            <div>
                <div className="flex flex-col gap-2">
                    <button className="text-left btn bg-transparent"><FaGoogle /> Login with Google</button>
                    <button className="text-left btn bg-transparent"><FaGithub />Login with Github</button>
                </div>
                <div className="mt-8">
                    <h2 className="font-semibold text-lg mb-2">Find Us On</h2>
                    <div className="*:w-full *:justify-start space-y-2">
                        <div className="join join-vertical *:bg-transparent *:justify-start">
                            <button className="btn join-item"><FaFacebook /> Facebook</button>
                            <button className="btn join-item"><RiInstagramFill /> Instagram</button>
                            <button className="btn join-item"><FaTwitter /> Twitter</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RightNavbar;