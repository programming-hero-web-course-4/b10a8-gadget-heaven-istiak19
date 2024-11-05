import { useEffect, useState } from "react";
import { getStoredCartList } from "../utility/Utility";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cartList, setCartList] = useState([])
    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCartList = getStoredCartList()
        const storedCartListIn = storedCartList.map(id => parseInt(id))
        const cartListFilter = products.filter(product => storedCartListIn.includes(product.product_id))
        setCartList(cartListFilter)
    }, [products])

    // const { description, price, category, product_image, product_id, product_title } = findProduct;
    return (
        <div>
            <h2>cart {cartList.length}</h2>
        </div>
    );
};

export default Cart;