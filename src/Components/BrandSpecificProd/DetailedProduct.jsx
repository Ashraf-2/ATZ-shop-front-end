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
            <div>
                <div>
                    {/* <img src={photo_url} alt={prod_name} /> */}
                </div>
            </div>
        </div>
    );
};

export default DetailedProduct;