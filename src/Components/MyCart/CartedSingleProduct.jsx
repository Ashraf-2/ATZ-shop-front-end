
const CartedSingleProduct = ({ product }) => {
    console.log(product);
    const { _id, prod_name, prod_type, brand_name, price, photo_url, rating, description, userEmail } = product

    return (
        <div>
            {/* <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo_url} alt={prod_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{prod_name}</h2>
                    <p>brand: {brand_name}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-secondary">Delete</button>
                    </div>
                </div>
            </div> */}

            
        </div>
    );
};

export default CartedSingleProduct;