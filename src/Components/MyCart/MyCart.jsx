import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartedSingleProduct from "./CartedSingleProduct";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
    const carts = useLoaderData();
    // console.log("carts in overall cart page", carts);
    const { user } = useContext(AuthContext);
    // console.log("user: ", user);
    // console.log(user.email);
    const [loadCarts,setLoadCarts] = useState(carts);
    console.log("loadcarts: ",loadCarts);

    const results = loadCarts.filter(result => result.userEmail === user.email);
    console.log("results", results);

    return (
        <div>
            <div className=" max-w-lg md:mx-auto mx-5">
                {
                    results?.length > 0 ? results.map(product => <CartedSingleProduct key={product._id} product={product} carts={results} setLoadCarts={setLoadCarts} ></CartedSingleProduct>) 
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