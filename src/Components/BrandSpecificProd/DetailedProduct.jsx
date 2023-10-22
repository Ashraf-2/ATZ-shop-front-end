import { useLoaderData, useParams } from "react-router-dom";

const DetailedProduct = () => {
    const {prodName} = useParams();
    console.log(prodName);
    
    const allproducts = useLoaderData();
    console.log(allproducts);
    const result = allproducts.find(product => product.prod_name === prodName)
    console.log("only specific prod in details page: ", result);
    const { _id, prod_name, prod_type, brand_name, price, photo_url, rating, description } = result;
    console.log("result id: ", prod_name);
    return (
        <div>
            <h2>hello</h2>
            <div className="max-w-lg mx-auto bg-red-100 border flex flex-row justify-evenly">
                <div>
                    <img src={photo_url} alt={prod_name} />
                </div>
                <div className=" bg-gray-300">
                    <h2>{prod_name}</h2>
                    <p>Brand: {brand_name}</p>
                    <p>Price: {price}</p>
                    <p>Rating: {rating}</p>

                    <div>
                        <button className="btn btn-neutral w-full mt-5">Add to Cart</button>
                    </div>
                </div>
            </div>
            <div>
                <p><span>Description: </span></p>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DetailedProduct;