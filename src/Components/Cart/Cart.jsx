import { useContext, useEffect, useState } from "react";
import { CartContext } from "../MainLayout/MainLayout";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    
    const findProduct = [...products].find(p => p.product_id === cart);

    if (!findProduct) {
        return <p>Product not found in the cart.</p>;
    }

    const { description, price, category, product_image, product_id, product_title } = findProduct;
    
    return (
        <div>
            <div className="shadow-lg mt-10 rounded-lg">
                <div className="flex gap-5 flex-col lg:flex-row p-6">
                    <img
                        src={product_image}
                        alt={product_title}
                        className="max-w-sm rounded-lg shadow-2xl w-48 h-28"
                    />
                    <div className="space-y-4">
                        <h1 className="text-2xl font-semibold">{product_title}</h1>
                        <p className="text-xs text-gray-500">{description}</p>
                        <p>Price: ${price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;