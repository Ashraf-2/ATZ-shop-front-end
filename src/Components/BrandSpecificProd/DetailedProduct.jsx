import { useContext } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import Rating from "react-rating";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Provider/AuthProvider";

const DetailedProduct = () => {
    const { _id } = useParams();
    console.log("_id:",_id);
    const {user} = useContext(AuthContext);
    console.log("user:",user);
    const allproducts = useLoaderData();
    console.log(allproducts);

    const result = allproducts.find(product => product._id === _id)
    console.log("only specific prod in details page: ", result);
    const { prod_name, prod_type, brand_name, price, photo_url, rating, description } = result;
    console.log("resulted product: ", prod_name);
    console.log("user and id :",user,prod_name);
    const newCart = { prod_name, prod_type, brand_name, price, photo_url, rating, description,userEmail: user.email};
    console.log("newcart: ",newCart);




    const handleAddCart = () => {
        fetch('https://e-cmrc-server-side-ashraf-2.vercel.app/cart', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log("data carted successfully: ", data)
                swal("Congress", "you cart this product succeessfully", "success");

            })
    }
    return (
        <div className="my-10">
            <div className="max-w-2xl mx-auto flex flex-row items-center justify-evenly">
                <div>
                    <img src={photo_url} alt={prod_name} />
                </div>
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Name: <span className="text-green-600">{prod_name}</span></h2>
                    <p className="text-xl font-semibold">Brand: <span className="text-red-500">{brand_name}</span></p>
                    <p className="text-xl font-semibold">Price: <span className="text-red-500">${price}</span></p>
                    <div className="flex flex-row">

                        <span className="text-xl font-semibold">Rating: {rating}/5</span>
                    
                    </div>
                    <div>
                        <button onClick={handleAddCart} className="btn btn-neutral w-full text-xl mt-5">
                            <BsFillCartCheckFill></BsFillCartCheckFill>
                            Cart
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto my-5">
                <p className="text-xl font-bold mb-2">Description:</p>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
};

export default DetailedProduct;