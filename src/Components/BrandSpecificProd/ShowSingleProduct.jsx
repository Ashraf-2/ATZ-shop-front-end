/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ShowSingleProduct = ({ product }) => {
    console.log("product in show single product : ", product);
    const { _id, prod_name: prodName, prod_type, brand_name, price, photo_url, rating, description } = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title">{prodName}</h2>
                        <div className="badge badge-secondary text-white">{brand_name}</div>
                    </div>
                    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
                    <div className=" ">
                        <p>Price: ${price}</p>
                        <p>Product Type: {prod_type}</p>
                        <p>Rating: {rating}/5</p>
                        <div className="badge badge-outline">{prod_type}</div>
                        <div>
                            <Link to={`/updateProduct/${_id}`}>
                            <button className="btn btn-neutral w-full mt-5">Update Product</button>
                            </Link>
                            <Link to={`/detailedProduct/${prodName}`} product={product}>
                                <button className="btn btn-neutral w-full mt-5">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowSingleProduct;