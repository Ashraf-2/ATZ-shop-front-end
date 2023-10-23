import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ShowSingleProduct from "../BrandSpecificProd/ShowSingleProduct";
import CartedSingleProduct from "./CartedSingleProduct";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {
    const carts = useLoaderData();
    console.log(carts);
    const {user} = useContext(AuthContext);
    console.log(user.email);

    // const results = products.filter(product => (product.brand_name) === brandname);
    // console.log("product based on brand: ", results);
    // const results = carts.filter(result => (result.userEmail) === user.email);
    // console.log(results);
    return (
        <div>
            <h2>My Cart</h2>
            {/* <div className=" max-w-lg mx-auto ">
                {
                    results.map(product => <CartedSingleProduct key={product._id} product={product} ></CartedSingleProduct>)
                }
            </div> */}

           


        </div>
    );
};

export default MyCart;