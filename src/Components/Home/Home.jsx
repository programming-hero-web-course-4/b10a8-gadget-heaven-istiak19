import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    const products=useLoaderData()
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;