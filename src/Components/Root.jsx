import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

const Root = () => {
    
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;