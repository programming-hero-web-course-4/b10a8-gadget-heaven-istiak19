import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList } from "../utility/Utility";

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

    // Local Storage add to
    const handleAddToCart = (id) => {
        addToStoredCartList(id)
    }

    // Local Storage wish to
    const handleWishList = (id) => {
        addToStoredWishList(id)
    }

    return (
        <div className="relative">
            <div className="bg-[#9538E2] text-center space-y-3 pt-8 pb-60">
                <h2 className="text-3xl text-white font-bold">Product Details</h2>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>
            <div className="absolute w-[800px] shadow-xl bg-slate-100 rounded-lg p-5 border border-pink-500 top-40 left-72">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={product_image}
                        className="w-[300px] h-[350px] rounded-lg" />
                    <div className="space-y-3">
                        <h1 className="text-xl font-bold">{product_title}</h1>
                        <p className="font-semibold">Price: {price} $</p>
                        <button className="text-xs px-3 py-2 rounded-full bg-green-200 text-green-600 border border-green-600">{availability ? 'In Stock' : 'Out Of Stock'}</button>
                        <p className="text-gray-500 font-light">{description}</p>
                        <p className="font-bold">Rating ⭐ </p>
                        <div>
                            <ul className="font-light text-gray-500">
                                {
                                    specification && specification.map((s, idx) => <li key={idx}>{idx + 1}. {s}</li>)
                                }
                            </ul>
                        </div>
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
                        <button onClick={() => handleAddToCart(id)} className="btn bg-[#9538E2] text-white rounded-full mr-5">Add To Card <i className="fa-solid fa-cart-shopping"></i></button>
                        <button onClick={() => handleWishList(id)} className="btn border border-black rounded-full">
                            <i className="fa-solid fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;