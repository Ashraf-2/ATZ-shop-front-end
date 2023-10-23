import { FcCustomerSupport } from "react-icons/fc";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

const Features = () => {
    return (
        <div className="bg-[#FFF6F6] py-10">
            <h2 className="text-center text-4xl font-bold text-[#FF5722] mb-10">Customer Satisfaction is our first priority</h2>
            <div className="flex flex-col md:flex-row justify-around gap-5">
                <div className="flex flex-col items-center">
                    <p className="text-7xl"><FcCustomerSupport></FcCustomerSupport></p>
                    
                    <h2  className="text-2xl font-medium">24/7 Service</h2>
                </div>
                <div className="flex flex-col items-center">
                    <p  className="text-7xl  text-[#FF5722]"><TbTruckDelivery></TbTruckDelivery></p>
                    <h2 className="text-2xl font-medium">Fastest Delivery</h2>
                </div>
                <div className="flex flex-col items-center">
                    <p  className="text-7xl text-[#FF5722]"><RiSecurePaymentLine></RiSecurePaymentLine></p>
                    <h2  className="text-2xl font-medium">24/7 Service</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;