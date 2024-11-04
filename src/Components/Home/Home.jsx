import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
    const products = useLoaderData()
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                <Categories></Categories>
                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;