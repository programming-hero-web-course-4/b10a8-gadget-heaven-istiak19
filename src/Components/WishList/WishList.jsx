import { useEffect, useState } from "react";
import { getStoredWishList, removeWishList } from "../utility/Utility";
import Wish from "./Wish";
const WishList = () => {
    const [products, setProducts] = useState([]);
    const [wishlist, setWishList] = useState([])
    useEffect(() => {
        fetch('../products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedWishList = getStoredWishList()
        const storedWishListIn = storedWishList.map(id => parseInt(id))
        const wishListFilter = products.filter(product => storedWishListIn.includes(product.product_id))
        setWishList(wishListFilter)
    }, [products])

    const handleRemove = (id) => {
        removeWishList(id)
        const storedWishList = getStoredWishList()
        const storedWishListIn = storedWishList.map(id => parseInt(id))
        const wishListFilter = products.filter(product => storedWishListIn.includes(product.product_id))
        setWishList(wishListFilter)
    }

    return (
        <div>
            <div className="mt-5">
                <h2 className="font-bold text-xl">Wishlist</h2>
            </div>
            <div>
                {
                    wishlist.map(wish => <Wish key={wish.product_id} wish={wish} handleRemove={handleRemove}></Wish>)
                }
            </div>
        </div>
    );
};

export default WishList;