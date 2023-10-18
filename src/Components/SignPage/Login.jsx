import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { AiFillGoogleCircle } from 'react-icons/ai';


const Login = () => {


    const { signIn, googleSignIn, updateUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setloginError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);

        if (password.length < 6) {
            setloginError("Password should have atleast 6 characters");
            swal("invalid Password!", "Your Password should have atleast 6 characters", "error");
            // console.log(loginError);
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setloginError("Password must have one uppercase");
            swal("invalid Password", "Password must have one uppercase", "error");
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            setloginError("Pasword must have one special character");
            swal("invalid Password", "Pasword must have one special character", "error");
            return;
        }

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                swal("Good job!", "Logged in successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setloginError(error.message)
            });

    }
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                swal("Congratulations!", "Login successfully!", "success");
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div>
                            {
                                loginError && <p className="my-2 text-red-600 font-medium">{loginError}</p>
                            }
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='flex flex-col items-center mt-3 mb-5'>
                            <p>or Sign in using</p>
                            <button onClick={handleGoogle} className="btn text-red-600 text-4xl hover:cursor-pointer"><AiFillGoogleCircle></AiFillGoogleCircle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;