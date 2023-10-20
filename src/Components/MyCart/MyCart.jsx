import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h2>My Cart</h2>

        </div>
    );
};

export default MyCart;