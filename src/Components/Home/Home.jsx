import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center font-bold text-3xl mt-9">Explore Cutting-Edge Gadgets</h2>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 my-24">
                    <div className="shadow-lg p-6">
                        <Categories></Categories>
                    </div>
                    <div className="col-span-3">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;