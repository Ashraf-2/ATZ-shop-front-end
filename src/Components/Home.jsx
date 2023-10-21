import { useLoaderData } from "react-router-dom";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBrands from "./HomeBrands/HomeBrands";

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="px-10 grid grid-cols-2 md:grid-cols-3 gap-5 bg-[#FAF3F0] py-5">
                {
                    brands.map(brand => <HomeBrands key={brand.id} brand={brand}></HomeBrands>)
                }
            </div>
        </div>
    );
};

export default Home;