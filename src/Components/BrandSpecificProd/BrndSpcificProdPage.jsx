import { useLoaderData, useParams } from "react-router-dom";
import ShowSingleProduct from "./ShowSingleProduct";
import { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";

const BrndSpcificProdPage = () => {
    const { brandname } = useParams();
    console.log("paarams brand: ", brandname);

    const [sliderImages, setSliderImages] = useState([]);
    // const [specificBrandSlider,setSpecificBrandSlider] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/sliderImage')
            .then(res => res.json())
            .then(data => {
                console.log("data for slider:", data);
                setSliderImages(data)
            })
    }, [])
    console.log("slider images: ", sliderImages);
    console.log("brandname: ", brandname);
    const resultForBrandedSliders = sliderImages.filter(slider => (slider.brand_name) === brandname);
    console.log("resultForBrandedSliders:", resultForBrandedSliders);

    // console.log(resultForBrandedSliders[0].image);

    const products = useLoaderData();
    // console.log('products: ',products);
    const results = products.filter(product => (product.brand_name) === brandname);
    console.log("product based on brand: ", results);


    return (
        <div>
            {/* to show slider for specific brnad */}
            <div>
                <ImageSlider></ImageSlider>
            </div>
            {/* to show specific branded products */}
            {
                results.length > 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-3 px-5 gap-5 py-5">
                        {

                            results.map(product => <ShowSingleProduct key={product._id} product={product}></ShowSingleProduct>)

                        }
                    </div>
                    :
                    <div className="flex flex-col my-10 items-center justify-center ">
                        <img src="https://imagizer.imageshack.com/v2/320x240q70/922/fISGnG.jpg" alt="empty-img" />
                        <h2 className="text-xl font-bold text-center my-5">Sorry, you have not added any product of this brand!</h2>
                    </div>
            }
        </div>
    );
};

export default BrndSpcificProdPage;