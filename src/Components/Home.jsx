import { useLoaderData } from "react-router-dom";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeBrands from "./HomeBrands/HomeBrands";
import Contact from "./Contact/Contact";
import Features from "./Features/Features";

const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <div className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 gap-5 bg-[#F875AA] bg-opacity-20 py-5">
                {
                    brands.map(brand => <HomeBrands key={brand.id} brand={brand}></HomeBrands>)
                }
            </div>
            <Features></Features>
            <Contact></Contact>

        </div>
    );
};

export default Home;