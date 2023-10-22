import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
    const id = useParams();
    console.log('id in upadte page', id);
    const product = useLoaderData();
    const { _id, prod_name, prod_type, brand_name, price, photo_url, rating, description } = product;
    console.log('specific product in update page: ', product);

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;

        const prod_name = form.product_name.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo_url = form.photo_url.value;
        const brand_name = form.brandselect.value;
        const prod_type = form.prod_type.value;
        console.log("form : ", prod_name, rating, price, description, photo_url, brand_name, prod_type);
        const updatedProduct = { prod_name, rating, price, description, photo_url, brand_name, prod_type };

        console.log("updated information: ", updatedProduct);

        fetch(`http://localhost:5000/products/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // alert("data send successfully");
                /**
                 * if(data.modifiedCount > 0)
                 */
                swal("congratulations!", "you updated your coffee successfully", "success");
            })
    }

    return (
        <div>
            <h2>updaet product</h2>

            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold text-center py-5 text-red-400">Update Product :{prod_name} </h2>
                <form onSubmit={handleUpdateProduct} className="bg-red-200 p-10">
                    {/* form row 1*/}
                    <div className="md:flex items-center mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="product_name" placeholder="product name" className="input input-bordered w-full" defaultValue={prod_name} required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label htmlFor="brandSelect">Select a Brand: "{brand_name}"</label>
                            <select name="brandselect" id="brandSelect" defaultChecked={brand_name}>
                                <option value="">Select a Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Cannon">Cannon</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Xiaomi">Xiaomi</option>
                                <option value="Google">Google</option>
                            </select>
                        </div>
                    </div>
                    {/* form row 2 supplier*/}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Supplier</span> */}
                                <input type="text" name="rating" placeholder="Rating out of 5 point" className="input input-bordered w-full" defaultValue={rating} required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Quantity</span> */}
                                <input type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full" defaultValue={price} required />
                            </label>
                        </div>
                    </div>
                    {/* form row 3 category */}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo_url" placeholder="Enter photo URL" className="input input-bordered rounded w-full" defaultValue={photo_url} required />
                            </label>
                        </div>
                    </div>
                    <div className="md:flex items-center mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="prod_type" placeholder="category/type of product" className="input input-bordered w-full" defaultValue={prod_type} required />
                            </label>
                        </div>
                    </div>

                    {/* end extra */}
                    <input type="submit" value="Update Product" className="w-full btn btn-neutral mt-5" />

                </form>
            </div >
        </div>
    );
};

export default UpdateProduct;