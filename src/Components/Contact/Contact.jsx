import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import swal from 'sweetalert';

const Contact = () => {
    const handleFormSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        swal("Thannk You!", "We Will get back you soon.", "success");
        form.reset()
        location.reload();

    }
    return (
        <div className="py-10 md:px-10 px-5 bg-[#F875AA] bg-opacity-30 dark:bg-slate-700 dark:text-white">
            <h2 className="text-4xl text-center font-bold text-red-500">Contact Us</h2>
            <div className="flex flex-col mt-10 md:flex-row gap-5 ">
                {/* text side */}
                <div className="flex-1 ">
                    <img src="https://imagizer.imageshack.com/v2/320x240q70/924/js0enr.png" />

                    <p className="text-lg font-medium my-5">Welcome to ATZ, where your satisfaction is our priority. We're here to assist you with any questions, concerns, or feedback you may have. Please feel free to get in touch with us through any of the following methods:</p>

                    <div className='my-10'>
                        <p className='text-lg my-5'>Also you can reach us through:</p>
                        <div className="flex flex-row gap-5 ml-5">
                            <span className='text-blue-600 text-3xl '>
                                <AiFillFacebook></AiFillFacebook>
                            </span>
                            <span className='text-red-600 text-3xl '>
                                <BsInstagram></BsInstagram>
                            </span>
                            <span className='text-red-500 text-3xl '>
                                <BsYoutube></BsYoutube>
                            </span>
                            <span className='text-blue-500 text-3xl '>
                                <FaTwitter></FaTwitter>
                            </span>
                        </div>

                    </div>

                    <div className='my-10'>
                        <p className='text-lg'>Our Shop Address: </p>
                        <address>ATZ shop, Rajin Tower, 4th-floor, Mirabazar, Sylhet</address>
                    </div>

                </div>
                {/* form */}
                <div className="flex-1 ">
                    <form onSubmit={handleFormSubmit}>
                        <h2 className='text-center text-3xl mb-5'>Email Us</h2>
                        <div className="my-2">
                            <label >Name</label> <br />
                            <input className="input input-bordered bg-base-200 w-full" type="text" name="name" placeholder="Name please" required />
                        </div>
                        <div className="my-2">
                            <label >Email</label> <br />
                            <input className="input input-bordered bg-base-200 w-full" type="Email" name="Email" placeholder="Emaild Address" required />
                        </div>
                        <div className="my-2">
                            <label >Subject Matter</label> <br />
                            <input className="input input-bordered bg-base-200 w-full" type="text" name="Email" placeholder="You are writing about...?" required />
                        </div>
                        <div className="my-2">
                            <label>Your Message</label> <br />
                            <textarea className="input input-bordered bg-base-200 h-32 w-full" type="text" name="message" placeholder="Write here your message" required></textarea>
                        </div>
                        <div className="mt-5">
                            <input type="submit" value="Submit" className="btn btn-neutral w-5/12" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;