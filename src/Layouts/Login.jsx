import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const { singIn,setUser } = useContext(AuthContext)
    
    const singInHendel = (e) => {
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        singIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user)
                e.target.reset();

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                
              });
       
        
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl p-10">
                <h2 className="text-center font-semibold text-4xl">Login your account</h2>
                <form onSubmit={singInHendel} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 ">
                        <button className="btn btn-primary bg-gray-700">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Dont’t Have An Account ? <Link to={"/auth/ragister"} className="text-red-600">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;