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

    const handlePurchaseBtn = () => {
        setCartList([])
        localStorage.removeItem('cart-list')
        document.getElementById('my_modal_1').showModal()
    }

    return (
        <div>
            <div className="flex justify-between items-center mt-5">
                <h2 className="font-bold text-xl">Cart</h2>
                <div className="flex items-center gap-5">
                    <h2 className="font-bold text-xl">Total Cost: {price}</h2>
                    <button onClick={handleSortedPrice} className="border-2 border-purple-400 rounded-full py-3 px-5 text-purple-500 btn">Sort By Price</button>
                    <button onClick={handlePurchaseBtn}>Purchase</button>
                </div>
            </div>
            <div>
                {
                    cartList.map(cart => <CartCard key={cart.product_id} cart={cart} handleRemove={handleRemove}></CartCard>)
                }
            </div>
            {/* Show the modal */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-center space-y-5">
                    <p><i class="fa-solid fa-certificate text-[72px] text-[#3EB655]"></i></p>
                    <h3 className="font-bold text-lg">Payment Successfully</h3>
                    <p>Thanks For Purchasing.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;