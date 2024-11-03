import { useLoaderData } from "react-router-dom";

const Home = () => {
    const products=useLoaderData()
    return (
        <div>
            <h2>Data {products.length}</h2>
        </div>
    );
};

export default Home;