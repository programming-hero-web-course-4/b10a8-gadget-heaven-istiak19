import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const ProOrder = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.info.value)
        console.log(e.target.name.value)
        console.log(e.target.number.value)
        console.log(e.target.email.value)
        console.log(e.target.msg.value)
        toast.success('Your form has been submitted successfully! Thank you for your response.')
        e.target.reset();
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Pro-Order - GadgetHeaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-gray-50 min-h-screen flex flex-col pb-5">
                <div className="bg-[#9538E2] text-center space-y-3 py-8">
                    <h2 className="text-2xl text-white font-bold">Looking For Something Different ??</h2>
                    <p className="text-white">Put Your Information in The Box...</p>
                </div>
                <div className="w-full max-w-2xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <label className=" text-xl" htmlFor="">Product Information</label> <br />
                        <input type="text" name="info" className="bg-gray-100 py-4 pl-3 pr-96 rounded-md mb-5" placeholder="Enter Product Name" /> <br />
                        <label className=" text-xl" htmlFor="">Name</label> <br />
                        <input type="text" name="name" placeholder="Enter Name" className="bg-gray-100 py-4 pl-3 pr-96 rounded-md mb-5" /><br />
                        <label className=" text-xl" htmlFor="">Phone</label><br />
                        <input type="text" name="number" id="" className="bg-gray-100 py-4 pl-3 pr-96 rounded-md mb-5" placeholder="Enter Phone No" required /><br />
                        <label className=" text-xl" htmlFor="">Email</label> <br />
                        <input type="email" name="email" className="bg-gray-100 py-4 pl-3 pr-96 rounded-md mb-5" id="" placeholder="Enter Email Address" required /> <br />
                        <label className=" text-xl" htmlFor="">Address</label><br />
                        <textarea name="msg" id="" cols="59" rows="6" className="bg-gray-100 p-5 rounded-md" placeholder="Address"></textarea> <br />
                        <input type="submit" value="Submit" className="btn bg-[#9538E2] text-white border border-black mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProOrder;