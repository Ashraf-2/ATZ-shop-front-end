
const HomeBrands = ({ brand }) => {
    const { id, image, brandname } = brand;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-[200px]" src={image} alt={brandname} /></figure>
            <div className="flex justify-center items-center">
                <h2 className="card-title text-center my-4">{brandname}</h2>
                {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
            </div>
        </div>

    );
};

export default HomeBrands;