import { useEffect, useState } from "react";
import { getStoredCartList, removeCartList } from "../utility/Utility";
import CartCard from "./CartCard";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [cartList, setCartList] = useState([])
    const [price, setPrice] = useState(0)

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
    }, [products, setCartList])

    const handleSortedPrice = () => {
        const sortedPrice = [...cartList].sort((a, b) => b.price - a.price)
        setCartList(sortedPrice)
    }

    useEffect(() => {
        const totalPrice = cartList.reduce((sum, cart) => sum + cart.price, 0);
        setPrice(totalPrice);
    }, [cartList]);

    const handleRemove = (id) => {
        removeCartList(id)
        const storedCartList = getStoredCartList()
        const storedCartListIn = storedCartList.map(id => parseInt(id))
        const cartListFilter = products.filter(product => storedCartListIn.includes(product.product_id))
        setCartList(cartListFilter)
    }

    return (
        <div>
            <div className="flex justify-between items-center">
                <h2>Cart</h2>
                <div className="flex items-center gap-5">
                    <h2>Total price: {price}</h2>
                    <button onClick={handleSortedPrice} className="btn">Sort By Price</button>
                </div>
            </div>
            <div>
                {
                    cartList.map(cart => <CartCard key={cart.product_id} cart={cart} handleRemove={handleRemove}></CartCard>)
                }
            </div>
        </div>
    );
};

export default Cart;