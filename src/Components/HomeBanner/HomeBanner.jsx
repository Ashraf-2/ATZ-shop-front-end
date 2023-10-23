
const HomeBanner = () => {
    return (
        <div className="md:px-10 w-full flex flex-col justify-center  md:flex-row bg-[#FFF6F6]">
            {/* <div className="hero min-h-screen bg-base-200"  style={{backgroundImage: 'url(https://images.pexels.com/photos/4087393/pexels-photo-4087393.jpeg?cs=srgb&dl=pexels-luna-lovegood-4087393.jpg&fm=jpg)'}}>
            <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-5xl text-sky-500 font-bold">Quality Product, Quality Service</h1>
                        <h2 className="py-6 text-4xl text-blue-500">6+ Branded Products in our shop just for your Comfort</h2>

                    </div>
                </div>
            </div> */}
            <div className="flex-1 px-5 md:px-0 ">
                <div className="flex flex-col justify-start my-16">
                    <h2 className="max-w-md text-5xl font-bold ">Best Official Product shop in town</h2>
                    <h3 className="max-w-md my-2 text-3xl">6+ Branded Product in One Shop</h3>
                    <button className="btn btn-neutral mth-4 w-[250px]">Get Started</button>
                </div>
            </div>
            <div className="flex-1">
                <img src="https://images.pexels.com/photos/4087393/pexels-photo-4087393.jpeg?cs=srgb&dl=pexels-luna-lovegood-4087393.jpg&fm=jpg" alt="img-banner" />
            </div>
        </div>
    );
};

export default HomeBanner;