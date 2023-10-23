
const CartedSingleProduct = ({ product,carts,setLoadCarts }) => {
    // console.log(product);
    // console.log("carts in cart: ", carts);

    const { _id, prod_name, prod_type, brand_name, price, photo_url, rating, description, userEmail } = product

    const handleDelete = (id) => {
        console.log("dlt id: ",id);
        //make sure to dlt by user ; swl
        fetch(`https://e-cmrc-server-side-ashraf-2.vercel.app/cart/${id}`,{
            method: 'DELETE' 
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('deleted successfully');
                //remove user from the UI
                const remainProduct = carts.filter(product => product._id !==id);
                console.log("re ", remainProduct);
                setLoadCarts(remainProduct);
            }
        })
    }

    return (
        <div className="my-10">
            <div className="card flex md:flex-row flex-col  bg-base-100 shadow-xl">
                <figure><img className="text-center" src={photo_url} alt={prod_name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{prod_name}</h2>
                    <p>Brand: {brand_name}</p>
                    <p>Price: ${price}</p>
                    <p>Category: {prod_type}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-neutral">Delete</button>
                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default CartedSingleProduct;