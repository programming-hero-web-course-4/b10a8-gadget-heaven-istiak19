import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams()
    const idIn = parseInt(id)
    const data = useLoaderData()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const findProduct = data.find(product => product.product_id === idIn)
        setProduct(findProduct)
    }, [data, idIn])
    const { rating, availability, specification, description, price, category, product_image, product_id, product_title } = product


    return (
        <div className="hero my-32">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={product_image}
                    className="w-[424.31px] h-[503px] rounded-lg" />
                <div className="space-y-3">
                    <h1 className="text-2xl font-bold">{product_title}</h1>
                    <p className="font-semibold">Price: {price} $</p>
                    <button className="text-xs px-3 py-2 rounded-full bg-green-200 text-green-600 border border-green-600">{availability ? 'In Stock' : 'Out Of Stock'}</button>
                    <p className="text-gray-500">{description}</p>
                    <p className="font-bold">Rating ⭐ </p>
                    <div className="flex items-center text-xs">
                        <div className="rating mr-3">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                        </div>
                        <p className="bg-gray-300 rounded-full px-1 py-2">{rating}</p>
                    </div>
                    <button className="btn bg-[#9538E2] text-white rounded-full mr-5">Add To Card <i className="fa-solid fa-cart-shopping"></i></button>
                    <button className="btn border border-black rounded-full">
                        <i className="fa-solid fa-heart"></i>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default ProductDetails;