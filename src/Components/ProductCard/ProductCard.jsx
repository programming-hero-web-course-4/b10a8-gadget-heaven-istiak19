import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const ProductCard = () => {
    const { categoryName } = useParams()
    const [products, setProducts] = useState([])
    const data = useLoaderData()
    useEffect(() => {
        const filterProducts = [...data].filter(product => product.category === categoryName)
        setProducts(filterProducts)
    }, [setProducts, data])
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <Card key={product.product_id} product={product}></Card>)
            }
        </div>
    );
};

export default ProductCard;