import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="card h-[50vh] flex flex-col items-center justify-center">
           
                <p className="text-5xl font-extrabold my-5">404 error</p>
                <p className="text-3xl font-bold my-5">Page not found.</p>
                <Link to="/">
                    <button className="btn btn-primary my-5">Go Home</button>
                </Link>
           
        </div>
    );
};

export default ErrorPage;