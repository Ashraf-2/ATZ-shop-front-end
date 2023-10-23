/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SingUp = () => {
    const {createUser,updateUser} = useContext(AuthContext);

    const [registerError, setRegisterError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo_url = form.photo_url.value;
        console.log(name,password,email,photo_url);
        

        //password validation
        if (password.length < 6) {
            setRegisterError("Password should have atleast 6 characters");
            swal("invalid Password!","Your Password should have atleast 6 characters","error");
            // console.log(loginError);
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setRegisterError("Password must have one uppercase");
            swal("invalid Password","Password must have one uppercase","error");
            return;
        }
        else if(!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)){
            setRegisterError("Pasword must have one special character");
            swal("invalid Password","Pasword must have one special character","error");
            return;
        }

        //createUser
        createUser(email,password)
        .then(result => {
            console.log(result.user)
            updateUser(name,photo_url) 
              .then((res) => {
                // Profile updated!
                // ...
                console.log("update profile");
              }).catch((error) => {
                // An error occurred
                // ...
                console.log(error);
              });
            swal("Congratulations", "Your signup successfull!", "success");
            navigate(location?.state ? location.state : '/');
        })
        .catch(error=> console.log(error) )

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profile Picture</span>
                                </label>
                                <input type="text" name="photo_url" placeholder="Profile Picture Link" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Have an account already? <Link className='font-bold' to="/login">Login Here</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;
