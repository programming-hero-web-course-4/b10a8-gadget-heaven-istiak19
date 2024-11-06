import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Bar, BarChart,Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const products = useLoaderData()
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Statistics - GadgetHeaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-[#9538E2] text-center py-8 space-y-3">
                <h2 className="font-bold text-3xl text-white">Statistics</h2>
                <p className="text-gray-200">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="max-w-7xl mx-auto my-10">
                <h2 className="my-5">Statistics</h2>
                <BarChart width={1300} height={450} data={products}>
                    <XAxis dataKey="product_title" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;