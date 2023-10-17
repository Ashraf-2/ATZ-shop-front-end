
const AddProduct = () => {
    const handelAddProduct = (e) => {
        console.log('hi');
    }
    return (
        <div>
            <h2>Add Product</h2>
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
                                <input type="text" name="coffee_name" placeholder="coffee name" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" placeholder="Enter Brand Name" className="input input-bordered w-full" required />
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
                                <input type="text" name="supplier" placeholder="Rating out of 5 point" className="input input-bordered w-full" required />
                            </label>
                        </div>
                        <div className="form-control ml-4 md:w-1/2">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                {/* <span>Quantity</span> */}
                                <input type="number" name="taste" placeholder="Enter Price" className="input input-bordered w-full" required />
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
                                <input type="text" name="category" placeholder="Description" className="input input-bordered w-full" required />
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

                    <div className="form-control md:w-1/2 flex flex-col broder border-2">
                        
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
                    </div>
                    <input type="submit" value="Add Product" className="w-full btn btn-neutral mt-5" />

                </form>
            </div >
        </div >
    );
};

export default AddProduct;