import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import { useState } from "react";

const Root = () => {

    
    
    return (
        <div className="" >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;