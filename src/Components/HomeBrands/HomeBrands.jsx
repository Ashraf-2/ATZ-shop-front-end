/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const HomeBrands = ({ brand }) => {
    const { id, image, brandname } = brand;
    return (

        <div className="card  bg-base-100 shadow-xl">
            <figure><img className="h-[200px]" src={image} alt={brandname} /></figure>
            <div className="flex justify-center items-center">
                <h2 className="card-title text-center my-4">{brandname}</h2>
            </div>
        </div>

    );
};

export default HomeBrands;