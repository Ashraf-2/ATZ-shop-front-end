
const AddProduct = () => {
    const handelAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const prod_name = form.product_name.value;
        const brand_name = form.brand_name.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo_url = form.photo_url.value;
        const brandselect = form.brandselect.value;
        console.log("form : ",prod_name,brand_name,rating,price,description,photo_url,brandselect);
        
        console.log('hi');
    }
    return (
        <div>
            <div className="max-w-5xl mx-auto">

                <h2 className="text-3xl font-bold text-center py-5 text-sky-500">Add Your Product</h2>
                <form onSubmit={handelAddProduct} className="bg-red-200 p-10">
                    {/* form row 1*/}
                    <div className="md:flex mb-5">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="product_name" placeholder="product name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Enter Brand Name" className="input input-bordered w-full" required />
                            </label>
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
                                <input type="text" name="rating" placeholder="Rating out of 5 point" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Quantity</span> */}
                                <input type="number" name="price" placeholder="Enter Price" className="input input-bordered w-full" required />
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
                                <input type="text" name="photo_url" placeholder="Enter photo URL" className="input input-bordered rounded w-full" required />
                            </label>
                        </div>
                    </div>

                    {/* <div className="form-control md:w-1/2 flex flex-col broder border-2">

                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Fashion</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                        </label>

                        <label className="label cursor-pointer">
                            <span className="label-text">Kid Toy</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Electronics</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-amber-500" checked />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Furniture</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-stone-500" checked />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Books</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-purple-500" checked />
                        </label>
                        <label className="label cursor-pointer">
                            <span className="label-text">Groceries</span>
                            <input type="radio" name="radio-10" className="radio checked:bg-orange-500" checked />
                        </label>
                    </div> */}
                    {/* extra */}
                    <label htmlFor="brandSelect">Select a Brand:</label>
                    <select name="brandselect" id="brandSelect">
                        <option value="">Select a Brand</option>
                        <option value="ABC Electronics">ABC Electronics</option>
                        <option value="XYZ Appliances">XYZ Appliances</option>
                        <option value="Tech Innovators">Tech Innovators</option>
                        <option value="Gadget Wizards">Gadget Wizards</option>
                        <option value="EcoTech Solutions">EcoTech Solutions</option>
                        <option value="Digital Dreams">Digital Dreams</option>
                    </select>

                    {/* end extra */}
                    <input type="submit" value="Add Product" className="w-full btn btn-neutral mt-5" />

                </form>
            </div >
        </div >
    );
};

export default AddProduct;