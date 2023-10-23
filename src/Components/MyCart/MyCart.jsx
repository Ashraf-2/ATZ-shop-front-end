import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartedSingleProduct from "./CartedSingleProduct";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
    const carts = useLoaderData();
    // console.log(carts);
    const { user } = useContext(AuthContext);
    console.log("user: ", user);
    // console.log(user.email);


    const results = carts.filter(result => (result.userEmail) === user.email);
    console.log(results);


    return (
        <div>
            <div className=" max-w-lg mx-auto">
                {

                    results.length > 0 ? results.map(product => <CartedSingleProduct key={product._id} product={product} ></CartedSingleProduct>) 
                    : 
                    <div className="my-20">
                        <img src="https://imagizer.imageshack.com/img922/7219/1jlllR.jpg" alt="no-cart" />
                        <h2 className="text-3xl mt-16 font-medium text-center">You have not added any product.</h2>

                    </div>

                }
            </div>




        </div>
    );
};

export default MyCart;